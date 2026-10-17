"""Generate the portfolio's text-and-diagram sharing card from source."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
image = Image.new('RGB', (1200, 630), '#f5f7fc')
draw = ImageDraw.Draw(image)
font = lambda size, bold=False: ImageFont.truetype('C:/Windows/Fonts/seguisb.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf', size)
draw.text((65, 48), 'Aaban Rehman', font=font(30, True), fill='#142445')
draw.text((65, 100), 'AI engineering & workflow automation', font=font(24), fill='#43587b')
draw.text((60, 205), 'AI that works.', font=font(76, True), fill='#142445')
draw.text((60, 300), 'Workflows that', font=font(66, True), fill='#142445')
draw.text((60, 383), 'move business.', font=font(66, True), fill='#142445')
for y, label in [(210, 'Connect'), (315, 'Review'), (420, 'Automate')]:
    draw.rounded_rectangle((880, y, 1135, y + 72), radius=14, fill='#315bff')
    draw.text((910, y + 14), label, font=font(28, True), fill='white')
    if y < 420:
        draw.line((1008, y + 72, 1008, y + 105), fill='#8ca6ee', width=3)
draw.line((65, 535, 1135, 535), fill='#d4def0', width=2)
draw.text((65, 563), 'aabanrehman.me', font=font(24), fill='#244bdc')
image.save(root / 'public/og-image.png', optimize=True)
