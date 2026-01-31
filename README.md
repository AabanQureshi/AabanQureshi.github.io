# Aaban Qureshi - Professional Portfolio

A modern, responsive portfolio website showcasing professional experience, CV, certificates, and contact information. Designed for both job applications and freelance project inquiries.

## Features

- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Detailed information about skills and expertise
- **CV Download**: Direct download link to curriculum vitae
- **Certificates Section**: Showcase of professional certifications
- **Contact Form**: Functional contact form with subject dropdown and custom options
- **Responsive Design**: Mobile-friendly layout
- **Smooth Navigation**: Enhanced user experience with smooth scrolling

## How to Customize

### 1. Update Certificate Links

In `script.js`, update the certificate URLs (around line 210):

```javascript
const certificateUrls = {
    '1': 'https://your-certificate-url-1.com',
    '2': 'https://your-certificate-url-2.com',
    '3': 'https://your-certificate-url-3.com'
};
```

### 2. Configure Email Contact

The contact form uses a fallback mailto link and FormSubmit service. To use your email:

In `script.js` (around line 85), update the email address:
```javascript
response = await fetch('https://formsubmit.co/ajax/your-email@domain.com', {
```

### 3. Update Personal Information

Edit `index.html` to customize:
- Name and titles in the hero section
- About me description
- Skills and expertise
- Contact information

### 4. Replace CV File

Replace `Aaban's CV.pdf` with your own CV file, or update the link in `index.html`:
```html
<a href="your-cv-file.pdf" download="Your_Name_CV.pdf" class="btn btn-primary">
```

## Local Development

To test locally:

```bash
# Using Python 3
python3 -m http.server 8080

# Or using Node.js
npx http-server -p 8080
```

Then open `http://localhost:8080` in your browser.

## Deployment

This site is configured for GitHub Pages. After pushing to the main branch, it will automatically be available at `https://username.github.io`.

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons
- FormSubmit (for contact form)

## License

© 2026 Aaban Qureshi. All rights reserved.