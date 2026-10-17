# Portfolio content editing

Open https://app.pagescms.org/aabanqureshi/aabanqureshi.github.io and select `main`.

## Add a project

1. Open Projects and create an entry.
2. Fill in the project name, category, summary, overview, contribution, technologies, problem and approach.
3. Set Display order: lower numbers appear first. Enable Full-width feature for a larger card.
4. Optionally upload a screenshot and describe it in Screenshot description. Landscape images around 1600 pixels wide work well; portrait images also fit without cropping.
5. Add optional live project and source links. Choose Project title as the fallback illustration for new projects.
6. Turn on Show on website and save. Without this toggle the entry stays hidden on the website.

Hidden content and uploads still exist in the public GitHub repository. Do not enter confidential information.

## Other sections

- Certificates: add the name, issuer, optional date, and a credential URL or certificate image. A visible entry needs at least one of these links.
- Experience: add company, role, dates, description, visibility and display order.
- Profile & contact: edit introductions, headings, education, availability, contact information and core technologies.
- Services: add, remove or reorder service entries.
- Résumé: upload/select a PDF and save the Current résumé PDF field. Uploading a file alone does not change the download button.

Use PNG, JPG or WebP for images. Prefer compressed images below 1 MB. The website uses fixed image frames and preserves the complete image; it does not compress uploads automatically.

## Publishing

Saving to main creates a GitHub commit and triggers the existing Deploy to GitHub Pages workflow. Allow the workflow to finish before checking https://aabanrehman.me.

Build validation rejects missing required content, unsafe URL schemes, image uploads without descriptive text, and references to missing uploads. If deployment fails, the previous successful site remains live. Open the failed workflow's Build log, fix the named entry and save again.

GitHub Actions: https://github.com/AabanQureshi/AabanQureshi.github.io/actions

## Architecture decision

Pages CMS edits repository JSON and media; React imports the JSON at build time. `.pages.yml` defines the editing forms. Collections use one file per item; shared profile, services and résumé settings use single files. This keeps hosting static and removes a runtime dependency on the editor, in exchange for requiring a deployment after each content change.

Uploaded assets live under `aabanrehman-main/public/uploads/`, with public URLs under `/uploads/`. Existing résumé URLs remain available for old links; the current download button follows `src/content/resume.json`.

The design remains in React/CSS. Content controls determine order, visibility, images and text. Motion is limited to interactions and respects reduced-motion preferences.

## Verification

Validated initial content, TypeScript and production build. Browser checks cover desktop/mobile navigation, project dialogs, portrait and wide images, long unbroken titles, image failure fallback, hidden items, ordering, PDF download and reduced motion. Tested viewport widths: 320, 375, 520, 768, 1024 and 1440 pixels.

## Local directory and feedback additions

The homepage shows at most three projects and services. Use Include on homepage to select entries; project display order determines which three are shown. The Projects page shows six entries per page with category filtering. Services has a full description field.

Experience and education use natural page scrolling; certificates have a dedicated section and directory.

Feedback submissions go to a dedicated EmailJS template when VITE_EMAILJS_FEEDBACK_TEMPLATE_ID is configured together with the existing service/public key. Template parameters: from_name, from_email, message, publish_consent, publish_email_consent. Until configured, the form explicitly opens an email draft instead. No submissions are stored automatically in the public repository.

Review consent in the received message before adding an item under Approved client feedback. Only approved entries with publication consent render. Enter Public email only when the client separately opted into publishing it. Do not put private feedback, private emails, or consent evidence in this public CMS; retain the original message privately.

Production builds generate rendered route HTML and a sitemap for GitHub Pages. Google Search Console and Bing Webmaster Tools can use this sitemap to discover the site. See the current search setup below.

## AI workflow concepts, issuer artwork, and search pages

The profile now leads with AI engineering and workflow automation. Two illustrative workflow records are included under Projects. Keep their Project context / status as `Design concept` until implemented; do not present sample workflows as deployed client work.

For each certificate, upload the actual certificate under Certificate image when available. Otherwise choose an Issuer logo from the certificate media library. `microsoft-logo.svg` and `meta-logo.svg` are included. The actual certificate image takes priority, with the logo as fallback. Choose only the actual issuer; existing credentials are Microsoft-issued.

Project covers also support Image credit / reference context and Image source link. Use these for third-party reference images. Current n8n examples retain visible concept labels and source credits. Homepage priorities 0 and 1 are the n8n concepts; priority 2 is SmartInvoice AI.

Builds pre-render all visible project detail pages automatically from the project filenames, plus About, AI Engineering, Workflow Automation, Projects, Services, and Certificates. Keep filenames stable to preserve indexed URLs. Every page has metadata, structured data, and a canonical URL; indexable pages enter `/sitemap.xml`. The feedback form stays available with `noindex`.

Search Console already has the Google property verified. Bing ownership uses the public `msvalidate.01` tag in `index.html`; keep it after verification. Search engines decide when to crawl and whether to index or cite the pages.

## Shared email templates (current configuration)

Both forms now reuse VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID; the earlier dedicated feedback template settings are obsolete. Follow aabanrehman-main/email-templates/SETUP.md. Replace the HTML of the existing templates before publishing the new forms.
