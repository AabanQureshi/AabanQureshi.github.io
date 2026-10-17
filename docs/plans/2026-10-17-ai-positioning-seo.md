# AI positioning and discoverability

The owner requested AI engineering and workflow automation positioning, sample workflow projects, issuer logos controlled by Pages CMS, and Google/Bing indexing setup.

## Decisions
- Keep React/Vite and GitHub Pages. Build the existing React routes to HTML with Vite SSR and React renderToString. This avoids a server migration while delivering meaningful content to crawlers and visitors before JavaScript loads. The client mounts its interactive version afterward.
- Add project detail pages, About, AI Engineering and Workflow Automation. Use canonical trailing slash URLs, unique titles/descriptions/social metadata, a sitemap, Person/ProfilePage/WebSite/Service/CreativeWork structured data, and crawlable links.
- Keep feedback accessible but noindex and out of the sitemap. It is a submission utility, not a search landing page.
- Existing factual experience remains unchanged. New workflow entries are visibly labelled Design concept and described as illustrative proposed architectures; no invented client names, outcomes, deployed products, metrics or endorsements.
- Certificate image takes priority over issuerLogo. Existing credentials use Microsoft. A Meta logo is available as a CMS media asset for a future genuine Meta credential; it is not used to mislabel current credentials.
- No special AI text file or guarantee of search placement. Google documents that ordinary SEO and accessible textual content remain relevant to AI features; Bing recommends sitemaps for search and Copilot discovery.

## Sources
- https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/appearance/structured-data/profile-page
- https://react.dev/reference/react-dom/server/renderToString
- https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/
- Logos: Microsoft four-color symbol; Meta symbol from installed react-icons Font Awesome collection. Logos identify issuers, not endorsement.

## Validation
Build verifies every sitemap page has real rendered HTML, one H1, unique metadata, matching canonical, valid JSON-LD, existing uploaded assets and explicit concept labels. Verify responsive rendering, certificate fallback artwork, project detail links, and Search Console sitemap submission after publication.
