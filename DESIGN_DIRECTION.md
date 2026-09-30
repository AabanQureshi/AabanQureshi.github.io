# Portfolio redesign

## Direction
An independent software engineer's studio: precise, approachable, and substantial. The audience is a founder or engineering lead looking for a contractor. Work, contribution, and contact are the core path.

## References researched
- https://lusion.co/ — a single memorable 3D composition and strong art direction.
- https://linear.app/ — detailed product visuals and disciplined information hierarchy.
- https://brittanychiang.com/ — readable engineering experience and project context.
- https://spline.design/ — interaction with three-dimensional objects.
- Dennis Snellenberg's site was requested during research but returned HTTP 403; no visual claims are based on that response.

## Tokens and layout
Ink #101C2C, surface #172638, paper #E7EDF3, secondary #AAB8C8, line #304052, blue #B4CCE5. Manrope carries both display and body text. Large, left-aligned type; generous margins; one prominent project followed by two supporting projects. Experience is a compact narrative rather than a collection of skill badges.

Hero: statement on the left, a layered software assembly on the right. Work follows immediately, then services, background, and contact.

## Review against the brief
The first skill search recommended liquid glass and fashion typography, which did not fit software engineering. A narrower search recommended a minimal grid with clear sans-serif type. Applied that hierarchy while choosing a blue ink palette and a subject-specific assembly. Avoided the previous particles, multicolored glows, decorative skill meters, and repeated animated cards.

## Implementation decisions
- CSS perspective and real three-dimensional transforms produce the four-layer assembly. Its button separates interface, application, data, and infrastructure layers. This needs no WebGL context and cannot crash the React root through a graphics initialization failure.
- Motion follows explicit interaction. Reduced-motion preferences remove transitions. All essential content remains ordinary HTML.
- Radix dialogs provide focus management, Escape dismissal, and keyboard access to project descriptions.
- Work uses SmartInvoice AI, QuizSystem AI, and the background invoicing project from the supplied history. Interface artwork is explicitly labeled illustrative. No new customer, revenue, uptime, or seniority claims are introduced.
- Named confidential OwaSoft client projects are excluded.
- EmailJS is used when configured. Without its configuration, show a real mailto link instead of a form that cannot deliver.
- Previous sections remain in the checkout for reference but are not imported into the new homepage.
