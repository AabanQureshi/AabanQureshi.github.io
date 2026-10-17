import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render, content } from '../dist-ssr/entry-server.js';

const root = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', root), 'utf8');
const origin = 'https://aabanrehman.me';
const { projects, certificates, profile, projectSlug } = content;
const escape = text => String(text).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const person = {
  '@type': 'Person', '@id': `${origin}/#person`, name: profile.name, url: `${origin}/`,
  jobTitle: profile.role, description: profile.about, image: origin + profile.photo,
  sameAs: [profile.github, profile.linkedin], knowsAbout: profile.foundations,
};
const pages = [
  { slug: '', title: 'Aaban Rehman | AI Engineer & Workflow Automation', description: 'Aaban Rehman is an AI engineer in Islamabad building AI integrations and workflow automation with Ollama, ASP.NET Core, .NET 8 and .NET 9.', type: 'ProfilePage' },
  { slug: 'about', title: 'About Aaban Rehman | AI Engineering & Automation', description: 'Meet Aaban Rehman, an AI engineer and automation builder in Islamabad, Pakistan. Explore his engineering background, experience, and credentials.', type: 'ProfilePage' },
  { slug: 'ai-engineering', title: 'AI Engineering | Aaban Rehman', description: 'Practical AI integrations connecting language models, application data, and APIs. Local-first experimentation with Ollama and dependable .NET foundations.', type: 'WebPage', service: 'AI engineering' },
  { slug: 'workflow-automation', title: 'Workflow Automation | Aaban Rehman', description: 'Connect APIs, webhooks, background jobs, and human review steps into business workflows. Explore AI automation concepts and discuss your workflow.', type: 'WebPage', service: 'Workflow automation' },
  { slug: 'certificates', title: 'Certificates | Aaban Rehman', description: 'Explore Microsoft credentials in Azure AI, cloud fundamentals, backend engineering, databases, and DevOps.', type: 'CollectionPage' },
  { slug: 'projects', title: 'AI Workflows & Software Projects | Aaban Rehman', description: 'Explore AI workflow design concepts, local AI infrastructure, and software projects by Aaban Rehman. Read each project’s context and engineering approach.', type: 'CollectionPage' },
  { slug: 'services', title: 'AI Engineering & Automation Services | Aaban Rehman', description: 'AI engineering, workflow automation, APIs, and application development by Aaban Rehman. Explore the approach, tools, and ways to collaborate.', type: 'CollectionPage' },
  { slug: 'feedback', title: 'Share Client Feedback | Aaban Rehman', description: 'Share feedback about working with Aaban Rehman, with optional permission to publish your testimonial.', type: 'WebPage', noindex: true },
  ...projects.map(project => ({ slug: `projects/${projectSlug(project)}`, title: `${project.name} | Aaban Rehman`, description: project.summary, type: 'WebPage', project })),
];
for (const { slug, title, description, type, project, service, noindex } of pages) {
  const url = `${origin}/${slug ? slug + '/' : ''}`;
  const pageNode = { '@type': type, '@id': url + '#page', url, name: title, description, isPartOf: { '@id': origin + '/#website' }, ...(type === 'ProfilePage' ? { mainEntity: { '@id': person['@id'] } } : { about: { '@id': person['@id'] } }) };
  const graph = [person, { '@type': 'WebSite', '@id': origin + '/#website', url: origin + '/', name: `${profile.name} — AI engineering & automation`, publisher: { '@id': person['@id'] } }, pageNode];
  if (project) graph.push({ '@type': 'CreativeWork', '@id': url + '#project', name: project.name, description: project.description, url, creator: { '@id': person['@id'] }, genre: project.status || project.category, keywords: project.technologies });
  if (service) graph.push({ '@type': 'Service', name: service, provider: { '@id': person['@id'] }, url, description });
  if (slug === 'certificates') pageNode.mainEntity = { '@type': 'ItemList', itemListElement: certificates.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.title, url: item.url || origin + item.image })) };
  if (slug) graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: profile.name, item: origin + '/' }, ...(project ? [{ '@type': 'ListItem', position: 2, name: 'Projects', item: origin + '/projects/' }] : []), { '@type': 'ListItem', position: project ? 3 : 2, name: project?.name || title.split(' | ')[0], item: url }] });
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  const html = template.replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${escape(title)}`)
    .replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*/g, `$1${escape(description)}`)
    .replace('</head>', `${noindex ? '<meta name="robots" content="noindex,follow" />' : ''}<script type="application/ld+json">${schema}</script></head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render('/' + slug)}</div>`);
  if (slug) await mkdir(new URL(`${slug}/`, root), { recursive: true });
  await writeFile(new URL(slug ? `${slug}/index.html` : 'index.html', root), html);
}
await writeFile(new URL('sitemap.xml', root), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + pages.filter(page => !page.noindex).map(({ slug }) => `  <url><loc>${origin}/${slug ? slug + '/' : ''}</loc></url>`).join('\n') + '\n</urlset>\n');
console.log(`Pre-rendered ${pages.length} pages with unique metadata and structured data.`);
