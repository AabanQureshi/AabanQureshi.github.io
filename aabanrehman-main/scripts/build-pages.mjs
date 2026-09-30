import { readFile, writeFile, mkdir } from 'node:fs/promises';
const root = new URL('../dist/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const pages = [
  ['projects', 'Projects | Aaban Rehman', 'Explore software projects by Aaban Rehman: application architecture, backend engineering, and practical business systems.'],
  ['services', 'Software Engineering Services | Aaban Rehman', 'Freelance and contract software engineering: ASP.NET Core applications, APIs, integrations, and data architecture.'],
  ['feedback', 'Share Client Feedback | Aaban Rehman', 'Share feedback about working with Aaban Rehman, with optional permission to publish your testimonial.'],
];
// Physical entry points support direct links and reloads on GitHub Pages.
for (const [slug, title, description] of pages) {
  const url = `https://aabanrehman.me/${slug}/`;
  const page = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${title}`)
    .replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*/g, `$1${description}`);
  await mkdir(new URL(`${slug}/`, root), { recursive: true });
  await writeFile(new URL(`${slug}/index.html`, root), page);
}
await writeFile(new URL('sitemap.xml', root), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ['', 'projects/', 'services/', 'feedback/'].map(path => `  <url><loc>https://aabanrehman.me/${path}</loc></url>`).join('\n') + '\n</urlset>\n');
