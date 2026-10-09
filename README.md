# Aaban Rehman - Portfolio Website

This is my personal portfolio website showcasing my skills, experience, and projects as a Full-Stack ASP.NET Core Developer.

🌐 **Live Site**: [aabanrehman.me](https://aabanrehman.me)

## Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Features

- 📱 Responsive design
- 🎨 Modern UI with dark theme
- 📄 Downloadable CV/Resume
- 📝 Contact form
- 🏆 Certifications showcase
- 💼 Work experience timeline
- 🛠️ Skills and technologies display

## Local Development

### Prerequisites

1. Clone the repository
2. Set up EmailJS credentials (required for contact form):
   - Copy `.env.example` to `.env` in the `aabanrehman-main` directory
   - Fill in your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID=your_autoreply_template_id
     ```

### Running Locally

```bash
cd aabanrehman-main
npm install
npm run dev
```

## Building for Production

### Project screenshots and videos

Put assets in `aabanrehman-main/public/media/projects/<project-name>/` and edit the corresponding JSON in `aabanrehman-main/src/content/projects/`.
`image` selects the card thumbnail independently of the gallery; set `imageAlt` to describe it. Keep this cover an image, including when showcasing a video.
Add `media` entries in the order visitors should see them:

```json
{
  "image": "/media/projects/smartinvoice/cover.webp",
  "imageAlt": "SmartInvoice invoice dashboard",
  "media": [
    {
      "type": "image",
      "src": "/media/projects/smartinvoice/dashboard.webp",
      "alt": "Invoice dashboard with monthly totals and outstanding payments",
      "caption": "Monthly billing overview"
    },
    {
      "type": "video",
      "src": "/media/projects/smartinvoice/demo.mp4",
      "poster": "/media/projects/smartinvoice/demo-poster.webp",
      "caption": "Creating an invoice",
      "captions": "/media/projects/smartinvoice/demo.vtt"
    }
  ]
}
```

Merge these fields into the existing project JSON; the example is not a complete project entry. Videos accept MP4 or WebM. `captions` is optional; provide English WebVTT captions when the demo includes speech. Use compressed, short demos and remove private customer data from recordings.
The gallery loads videos only on playback, supports keyboard buttons and arrow/Home/End navigation in the thumbnail strip, and offers fullscreen images. Existing image-only projects show their cover in the popup. Projects without media keep their generated artwork.
`npm run validate:content` checks media fields and verifies every referenced local asset exists before deployment. No new dependency or upload editor is needed.

```bash
cd aabanrehman-main
npm run build
```

The build output will be in the `aabanrehman-main/dist` directory.

## Deployment to GitHub Pages

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

### Required GitHub Secrets

For the contact form to work in production, you must configure these repository secrets:

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:
   - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID for admin notifications
   - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key
   - `VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID` - Your EmailJS template ID for auto-reply emails (optional)

### Deployment Workflow

The deployment workflow:
1. Builds the React app using Vite (with environment variables injected)
2. Copies CNAME, CV, and .nojekyll files to dist
3. Deploys to GitHub Pages

**Note**: Ensure GitHub Pages is configured in repository settings:
- Source: GitHub Actions
- Custom domain: aabanrehman.me (configured via CNAME file)

### Manual Deployment

If you need to deploy manually:
```bash
cd aabanrehman-main
npm run build
# Copy dist contents to root for GitHub Pages
```

## License

© 2025 Aaban Rehman. All rights reserved.
