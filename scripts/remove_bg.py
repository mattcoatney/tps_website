"""
Remove near-white backgrounds from org logos and save as transparent PNGs.
Overwrites files in images/orgs/ (keep copies elsewhere before running).
"""
from pathlib import Path
from PIL import Image

ORGS_DIR = Path(__file__).parent.parent / "images" / "orgs"
# Pixels within this distance of white become fully/partially transparent
WHITE_THRESHOLD = 30

def dist_from_white(r, g, b):
    return ((r - 255)**2 + (g - 255)**2 + (b - 255)**2) ** 0.5

def remove_white_bg(img_path: Path) -> Path:
    img = Image.open(img_path).convert("RGBA")
    pixels = img.load()
    w, h = img.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            d = dist_from_white(r, g, b)
            if d < WHITE_THRESHOLD:
                # Soft edge: fully transparent at pure white, opaque at threshold
                new_a = int(d / WHITE_THRESHOLD * 255)
                pixels[x, y] = (r, g, b, new_a)

    out_path = img_path.with_suffix(".png")
    img.save(out_path)
    return out_path

for ext in ("*.jpg", "*.jpeg", "*.png"):
    for f in sorted(ORGS_DIR.glob(ext)):
        out = remove_white_bg(f)
        if f.suffix.lower() in (".jpg", ".jpeg"):
            f.unlink()
        print(f"  {f.name} -> {out.name}")

print("Done.")
