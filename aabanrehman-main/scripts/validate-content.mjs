import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { z } from 'zod';

const root = fileURLToPath(new URL('../', import.meta.url));
const content = resolve(root, 'src/content');
const publicRoot = resolve(root, 'public');
const text = z.string().trim().min(1, 'Required text is empty');
const optionalText = z.string().nullish();
const url = z.string().url().refine(value => /^https:\/\//i.test(value), 'Use an HTTPS URL');
const optionalUrl = z.union([url, z.literal('')]).nullish();
const asset = z.string().regex(/^\/(?!\/)[^\\?#]+$/, 'Use an uploaded file path starting with /');
const optionalAsset = z.union([asset, z.literal('')]).nullish();
const ordered = { order: z.number().int().nonnegative(), visible: z.boolean().optional() };
const schemas = {
  projects: z.object({
    name: text, category: text, summary: text, description: text, role: text,
    technologies: text, challenge: text, approach: text,
    features: z.array(text).optional(), kind: z.enum(['invoice', 'quiz', 'billing', 'generic']).optional(),
    featured: z.boolean().optional(), image: optionalAsset, imageAlt: optionalText,
    demoUrl: optionalUrl, sourceUrl: optionalUrl, ...ordered,
  }).refine(item => !item.image || Boolean(item.imageAlt?.trim()), { message: 'Add alternative text for the project image', path: ['imageAlt'] }),
  certificates: z.object({
    title: text, issuer: text, date: optionalText, url: optionalUrl, image: optionalAsset, ...ordered,
  }).refine(item => item.visible !== true || Boolean(item.url || item.image), { message: 'A visible certificate needs a credential URL or uploaded image', path: ['url'] }),
  experience: z.object({ company: text, role: text, date: text, text, ...ordered }),
  profile: z.object({
    name: text, role: text, email: z.string().email(), github: url, linkedin: url,
    availability: text, location: text, workLocation: text, headline: text, introduction: text,
    aboutHeading: text, about: text,
    education: z.object({ title: text, institution: text, dates: text }),
    foundations: z.array(text).min(1), projectsIntro: text, servicesIntro: text,
    contactIntro: text, contactLocation: text,
  }),
  services: z.object({ items: z.array(z.object({ title: text, text, tools: text })).min(1) }),
  resume: z.object({ file: asset.refine(value => /\.pdf$/i.test(value), 'Upload a PDF résumé') }),
};
let failures = 0;
let checked = 0;
async function validate(file, schema) {
  try {
    const entry = schema.parse(JSON.parse(await readFile(file, 'utf8')));
    for (const key of ['image', 'file']) {
      if (!entry[key]) continue;
      const target = resolve(publicRoot, '.' + entry[key]);
      const within = relative(publicRoot, target);
      if (within === '..' || within.startsWith('..' + sep) || !within) throw new Error(`${key}: file must be inside public/`);
      if (!(await stat(target)).isFile()) throw new Error(`${key}: upload is not a file`);
    }
    checked++;
  } catch (error) {
    failures++;
    console.error(`${relative(root, file)}: ${error instanceof z.ZodError ? error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join('; ') : error.message}`);
  }
}
for (const type of ['projects', 'certificates', 'experience']) {
  for (const name of await readdir(resolve(content, type))) {
    if (name.endsWith('.json')) await validate(resolve(content, type, name), schemas[type]);
  }
}
for (const type of ['profile', 'services', 'resume']) await validate(resolve(content, `${type}.json`), schemas[type]);
if (failures) process.exitCode = 1;
else console.log(`Content valid: ${checked} files; uploaded assets exist.`);
