# Portfolio discovery redesign

## Brief and decisions
The owner requested a new color scheme, more visible projects/certificates and skills, polished animation, independent hiring-manager and UX reviews, fixes, and deployment. They explicitly delegated decisions while away, so implementation proceeds without an approval pause.

Audience: hiring managers evaluating ASP.NET Core expertise and clients seeking business software. The first screen should establish specialization and lead directly to evidence.

Direction: cool white #F5F7FC, navy ink #142445, cobalt #315BFF, pale blue #E8EEFF, teal #16796C, white #FFFFFF. Manrope remains the typeface for continuity. Left-aligned editorial content, portrait with floating technology cards, prominent collection cards, spacious project previews. Dark panels may provide deliberate section contrast. Avoid decorative animation that competes with reading, fabricated claims, and nested scroll regions.

## Phase 0 — documentation discovery
- Active patterns: `src/components/portfolio/Portfolio.tsx` (project cards, Radix dialogs, contact), `PortfolioPages.tsx` (collection page shell/filter/pagination), `ProjectGallery.tsx` (media).
- Content API: `src/content/index.ts` exports projects, certificates, services, profile, resume; collections filter `visible === true` and sort by order.
- Deployment contract: `.github/workflows/deploy.yml` runs TypeScript and build on main; `scripts/build-pages.mjs` creates physical route entries.
- Inspiration: https://21st.dev/community/components — spotlight cards, animated feature bento, floating background concepts. Original implementation uses existing libraries, not unreviewed component installs.
- UI/UX skill search: initial developer query misrouted to FAQ; narrower `portfolio` query matched Hero + Features + CTA and high-contrast blue/white direction. Apply that match, with palette tailored to this brief.
- Allowed APIs: existing React useState, Radix Dialog primitives, lucide icons, CSS transforms/keyframes, React Router Route, build-pages fs API already in use. No new dependency needed.

## Phase 1 — evidence and discovery
- Add `/certificates` with all existing CMS credentials and direct verification links.
- Add route, physical build entry, sitemap URL, collection navigation.
- Make projects searchable and visibly countable; preserve category filters and pagination.
- Tighten CMS-backed profile intro around ASP.NET Core, .NET 8 and .NET 9. Preserve factual content.
- Verify content validation, direct page loads, filter/search empty states, credential links.

## Phase 2 — visual hierarchy and motion
- Rework active portfolio layout and stylesheet using existing component patterns.
- Hero floating technology cards, high-contrast primary CTA, prominent projects/certificates discovery cards.
- Explicit skills grouping and independent credential showcase; natural page scroll for experience.
- Retain working project media, contact and feedback paths.
- Verify 360/390/768/1440 widths, focus states, reduced motion, no overflow, contrast in light and dark sections.

## Phase 3 — independent review and correction
- Hiring manager: assess first-screen relevance, proof discovery, project details, credentials, contact/resume.
- UX reviewer: assess hierarchy, mobile, keyboard, motion, contrast, interaction clarity.
- Record findings, fix actionable issues, rerun both reviews until no material actionable findings remain. Perfection is not an objective guarantee.

## Phase 4 — verification and publication
- Run content validator, TypeScript, build, lint and browser interaction checks. Separate pre-existing lint failures from introduced failures.
- Commit scoped changes, push main, follow GitHub Pages deployment to completion and check live routes.
- Do not invent certificate images/dates, client feedback, metrics, or project outcomes. Source content edits sync through the same Git repository used by Pages CMS.

## Review and verification record
- Hiring review round 1: moved resume to hero, labelled concept artwork, removed empty feedback section, fixed technology splitting and source encoding.
- Hiring review round 2: rendered desktop/mobile journey passed; no material blockers.
- UX round 1: darkened certificate placeholder text, enlarged contact and wordmark touch targets.
- UX round 2: fixed Escape from mobile navigation links and return focus; added active collection navigation.
- UX round 3: both corrections verified; no material findings in reviewed scope.
- Browser checks: all five routes at 360/768/1440 without horizontal overflow; project search, reset, pagination, modal Escape, mobile menu link closing, reduced motion, resume URL, and image loads passed. No page errors.
- Content validation: 23 files/assets passed. TypeScript and production build passed. Lint: zero errors, nine existing warnings in shared/legacy files; changed active files lint clean.
- Contact delivery was not submitted during QA; existing email integration and private feedback workflow preserved.
