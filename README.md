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

```bash
cd aabanrehman-main
npm install
npm run dev
```

## Building for Production

```bash
cd aabanrehman-main
npm run build
```

The build output will be in the `aabanrehman-main/dist` directory.

## Deployment to GitHub Pages

This site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

The deployment workflow:
1. Builds the React app using Vite
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