import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
const sitemap = await readFile(new URL('sitemap.xml', root), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert(urls.length >= 20, 'Expected collection, service, profile and project pages');
const titles = new Set();
for (const url of urls) {
  const path = new URL(url).pathname.slice(1);
  const html = await readFile(new URL(path + 'index.html', root), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Unique title missing: ${url}`);
  titles.add(title);
  assert(html.includes(`rel="canonical" href="${url}"`), `Wrong canonical: ${url}`);
  assert.equal([...html.matchAll(/<h1[\s>]/g)].length, 1, `Expected one rendered H1: ${url}`);
  assert(html.includes('<main'), `Missing pre-rendered content: ${url}`);
  assert(!html.includes('<div id="root"></div>'), `Empty app shell: ${url}`);
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/)?.[1];
  const schema = JSON.parse(json);
  assert(schema['@graph'].some(node => node['@type'] === 'Person' && node.name === 'Aaban Rehman'));
  for (const [, asset] of html.matchAll(/(?:src|href)="(\/uploads\/[^"?#]+)"/g)) {
    assert((await stat(new URL(asset.slice(1), root))).isFile(), `Missing asset ${asset}`);
  }
  if (path.includes('ai-inbox-triage') || path.includes('ai-document-intake')) {
    assert(html.includes('Design concept') && html.includes('not a deployed product'), 'Concept must not imply production work');
  }
}
assert(!sitemap.includes('/feedback/'), 'Private feedback form should not be in sitemap');
const feedback = await readFile(new URL('feedback/index.html', root), 'utf8');
assert(feedback.includes('noindex,follow'));
console.log(`Verified ${urls.length} indexable HTML pages, metadata, schema, concept labels, and assets.`);
