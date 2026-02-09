# Open Graph Image

The current `og-image.svg` is an SVG file. While modern browsers support it, most social media platforms (Facebook, Twitter/X, LinkedIn) require PNG or JPG format for Open Graph images.

## To Generate a PNG Version:

### Option 1: Using the HTML Generator
1. Open `generate-og-image.html` in your browser
2. Click "Generate Image"
3. Right-click on the canvas and save as `og-image.png`
4. Replace the reference in `index.html` from `og-image.svg` to `og-image.png`

### Option 2: Using a Conversion Tool
Convert `og-image.svg` to PNG (1200x630px) using:
- Online tools like CloudConvert or SVGOMG
- Command line: `rsvg-convert -w 1200 -h 630 og-image.svg > og-image.png`
- Design tools like Figma, Photoshop, or GIMP

### Option 3: Create Your Own
Create a custom 1200x630px PNG with your branding and update `index.html` accordingly.

## Current Workaround
The SVG will work in many contexts, but for maximum social media compatibility, please convert to PNG following one of the options above.
