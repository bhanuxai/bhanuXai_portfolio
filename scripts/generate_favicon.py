import os
import base64
from PIL import Image, ImageDraw, ImageEnhance

src_path = 'public/images/mypic.jpg'
orig = Image.open(src_path).convert('RGBA')

# 1. Square portrait crop (1376 x 1376)
square = orig.crop((0, 330, 1376, 1706))

# 2. Anti-aliased circular mask at high resolution
# Supersample 2x for ultra-smooth edge
mask_hi = Image.new('L', (1376 * 2, 1376 * 2), 0)
draw_hi = ImageDraw.Draw(mask_hi)
draw_hi.ellipse((0, 0, 1376 * 2, 1376 * 2), fill=255)
mask = mask_hi.resize((1376, 1376), Image.Resampling.LANCZOS)

circle = Image.new('RGBA', (1376, 1376), (0, 0, 0, 0))
circle.paste(square, (0, 0), mask=mask)

# Save master avatar
circle.resize((512, 512), Image.Resampling.LANCZOS).save('public/images/mypic-avatar.png')

# 3. Create resized versions with slight sharpening for small icons
def make_icon(img, size, sharpen_factor=1.0):
    res = img.resize((size, size), Image.Resampling.LANCZOS)
    if sharpen_factor > 1.0:
        res = ImageEnhance.Sharpness(res).enhance(sharpen_factor)
    return res

ico_16 = make_icon(circle, 16, 1.4)
ico_32 = make_icon(circle, 32, 1.3)
ico_48 = make_icon(circle, 48, 1.2)
ico_64 = make_icon(circle, 64, 1.1)
ico_180_sq = make_icon(square.convert('RGB'), 180, 1.0) # Apple touch icon (solid square)
ico_192 = make_icon(circle, 192, 1.0)
ico_512 = make_icon(circle, 512, 1.0)

# Save files
ico_16.save('public/favicon-16x16.png')
ico_32.save('public/favicon-32x32.png')
ico_64.save('public/favicon.png')
ico_180_sq.save('public/apple-touch-icon.png')
ico_192.save('public/android-chrome-192x192.png')
ico_512.save('public/android-chrome-512x512.png')

# Save multi-size favicon.ico
ico_sizes = [(16, 16), (32, 32), (48, 48)]
# To ensure highest quality at each ICO level:
circle.save('public/favicon.ico', format='ICO', sizes=ico_sizes)

# Also create SVG embedding the 192px PNG
with open('public/android-chrome-192x192.png', 'rb') as f:
    b64_png = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <image width="192" height="192" href="data:image/png;base64,{b64_png}" />
</svg>
'''

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

with open('public/vite.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('All favicon assets successfully generated!')
