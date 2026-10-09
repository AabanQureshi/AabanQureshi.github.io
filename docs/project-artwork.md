# Project artwork

The current eleven covers were commissioned through the official Open Design MCP on 2026-10-09, using its frontend-design skill in project `portfolio-project-covers-v2`.

Run: `987c033e-1566-4e8f-8e7f-c5e0cf6db885` (succeeded). The design brief requested project-specific interface concepts and engineering workflow diagrams, readable typography, restrained palettes, fictional sample records, and no generic 3D or AI imagery. Open Design produced standalone SVGs, PNG exports, a review gallery, and a contact sheet, then reviewed and refined the output.

These are designed concepts, not actual application screenshots or evidence of deployed system topology. Each image explicitly carries an Interface concept or Workflow diagram label. No customer records or performance claims are used.

The portfolio uses 1600 x 900 WebP exports at `aabanrehman-main/public/uploads/projects/<slug>-design.webp`. Each project JSON selects its cover through `image` and describes it through `imageAlt`. Pages CMS exposes the same covers through its existing thumbnail selector. The rejected generated illustrations have been removed.

Editable standalone SVG sources and the review contact sheet are preserved in [project-covers](project-covers/). The Open Design workspace retains the full gallery and generation history. Raster exports were converted from Open Design's PNGs with Pillow at WebP quality 95.

Validation: all eleven source files and corresponding project entries were matched, and every PNG was checked for 1600 x 900 dimensions before integration. Content validation and the production build verify asset paths. Full-size visual inspection and a contact-sheet review check layout and text rendering.
