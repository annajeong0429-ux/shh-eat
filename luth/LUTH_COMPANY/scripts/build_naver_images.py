"""네이버 블로그에 올릴 이미지를 굽는다.

타이틀과 프로필은 네이버가 픽셀 규격을 고정해 둔 자리라 디자인이 바뀔 때마다
손으로 다시 만들면 규격이 어긋나기 쉽다. 그래서 스크립트로 고정한다.

타이틀 이미지에는 버튼을 그리지 않는다. 그림 위의 버튼은 눌리지 않아
방문자가 헛클릭하게 되므로, 링크는 전부 widgets/ 의 HTML 위젯이 맡는다.

    python scripts/build_naver_images.py
"""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
LOGO_PATH = ROOT / "public" / "images" / "logo.png"
OUT_DIR = ROOT / "naver-blog" / "images"
PHOTO_DIR = OUT_DIR / "source"

FONT_DIR = Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts"
FONT_BOLD = FONT_DIR / "malgunbd.ttf"
FONT_REGULAR = FONT_DIR / "malgun.ttf"

FOREGROUND = (29, 29, 31)
GRAY_TEXT = (110, 110, 115)
GRAY_LINE = (210, 210, 215)
WHITE = (255, 255, 255)
GRADIENT_FROM = (237, 237, 237)
GRADIENT_TO = (247, 247, 247)

PHONE_PRIMARY = "010-8740-0440"
PHONE_SECONDARY = "010-7470-4682"
TAGLINE = "전국 직영 시공 · 무상 A/S 1년"
HEADLINE = ["확실한 차량 통제의 시작,", "간편한 주차시스템을 제안합니다."]
SUBCOPY = "특허 LPR 차량번호인식 카메라 · 국내 생산 제품 · 시공부터 A/S까지"


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size)


def relative_luminance(rgb: tuple[int, int, int]) -> float:
    channels = []
    for value in rgb:
        c = value / 255
        channels.append(c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4)
    r, g, b = channels
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast_ratio(a: tuple[int, int, int], b: tuple[int, int, int]) -> float:
    high, low = sorted((relative_luminance(a), relative_luminance(b)), reverse=True)
    return (high + 0.05) / (low + 0.05)


def assert_readable(backdrop: Image.Image, box: tuple[int, int, int, int]) -> float:
    """글자가 얹힐 자리의 가장 어두운 지점이 WCAG AA를 넘는지 본다.

    현장 사진을 갈아끼우다 보면 배경이 어두워져 문구가 묻히는 일이 생긴다.
    눈으로 확인하기 전에 스크립트가 먼저 걸러낸다.
    """
    # 채도 높은 색을 같은 밝기의 회색으로 보면 실제보다 어둡게 잡혀 검사가 보수적이 된다.
    darkest = backdrop.crop(box).convert("L").getextrema()[0]
    ratio = contrast_ratio(FOREGROUND, (darkest, darkest, darkest))
    if ratio < 4.5:
        raise SystemExit(
            f"타이틀 문구 대비가 부족합니다 ({ratio:.1f}:1, 최소 4.5:1). "
            f"배경이 가장 어두운 지점의 밝기 {darkest}. 더 밝은 사진을 쓰세요."
        )
    return ratio


def tracked_width(draw: ImageDraw.ImageDraw, text: str, f, tracking: float) -> float:
    """자간을 준 상태의 문자열 폭."""
    if not text:
        return 0.0
    return sum(draw.textlength(c, font=f) for c in text) + tracking * (len(text) - 1)


def draw_tracked(draw, xy, text: str, f, fill, tracking: float = 0.0) -> None:
    """자간을 좁혀 그린다. 시안이 -0.02em 트래킹을 쓰는데 PIL은 기본 지원이 없다."""
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=f, fill=fill)
        x += draw.textlength(char, font=f) + tracking


def diagonal_gradient(size: tuple[int, int]) -> Image.Image:
    """작게 그린 뒤 확대해 매끄러운 대각 그라데이션을 만든다."""
    seed = 64
    small = Image.new("RGB", (seed, seed))
    pixels = small.load()
    for y in range(seed):
        for x in range(seed):
            t = min(1.0, (x / (seed - 1) * 0.45 + y / (seed - 1) * 0.55) / 0.7)
            pixels[x, y] = tuple(
                round(a + (b - a) * t) for a, b in zip(GRADIENT_FROM, GRADIENT_TO)
            )
    return small.resize(size, Image.LANCZOS)


def fade_to_white(image: Image.Image, start: float = 0.45) -> Image.Image:
    """아래로 갈수록 흰색으로 빠지게 해 본문 영역과 자연스럽게 이어지도록 한다."""
    width, height = image.size
    column = Image.new("L", (1, height))
    for y in range(height):
        t = y / (height - 1)
        alpha = 0 if t < start else round(235 * ((t - start) / (1 - start)) ** 1.3)
        column.putpixel((0, y), alpha)
    mask = column.resize((width, height))
    return Image.composite(Image.new("RGB", image.size, WHITE), image, mask)


def find_photo() -> Path | None:
    """images/source/ 에 현장 사진을 넣어두면 타이틀 배경으로 쓴다."""
    if not PHOTO_DIR.is_dir():
        return None
    candidates = sorted(
        p for p in PHOTO_DIR.iterdir()
        if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
    )
    return candidates[0] if candidates else None


def photo_background(photo: Path, size: tuple[int, int]) -> Image.Image:
    """사진을 꽉 채워 자른 뒤 왼쪽을 희게 덮는다.

    글자가 얹히는 왼쪽은 거의 흰색까지 밀어야 라이트 테마에서 읽힌다.
    오른쪽은 사진을 남겨 현장 분위기를 보여준다.
    """
    width, height = size
    source = Image.open(photo).convert("RGB")
    ratio = max(width / source.width, height / source.height)
    resized = source.resize(
        (round(source.width * ratio), round(source.height * ratio)), Image.LANCZOS
    )
    left = (resized.width - width) // 2
    top = (resized.height - height) // 2
    canvas = resized.crop((left, top, left + width, top + height))

    row = Image.new("L", (width, 1))
    for x in range(width):
        t = x / (width - 1)
        # 왼쪽 55%까지는 완전히 덮고 오른쪽으로 갈수록 사진을 드러낸다.
        alpha = 250 if t < 0.55 else round(250 * (1 - (t - 0.55) / 0.45) ** 0.7)
        row.putpixel((x, 0), max(alpha, 90))
    mask = row.resize((width, height))
    return Image.composite(Image.new("RGB", size, WHITE), canvas, mask)


def paste_logo(canvas: Image.Image, x: int, y: int, width: int) -> int:
    """로고를 지정 폭으로 얹고 차지한 높이를 돌려준다."""
    logo = Image.open(LOGO_PATH).convert("RGBA")
    height = round(width * logo.height / logo.width)
    logo = logo.resize((width, height), Image.LANCZOS)
    canvas.paste(logo, (x, y), logo)
    return height


def build_title(scale: int = 2) -> Path:
    """타이틀 영역 966x600. 네이버 '직접등록' 규격."""
    width, height = 966 * scale, 600 * scale
    photo = find_photo()
    if photo:
        canvas = photo_background(photo, (width, height))
        print(f"  타이틀 배경으로 {photo.name} 사용")
    else:
        canvas = fade_to_white(diagonal_gradient((width, height)))
    backdrop = canvas.copy()
    draw = ImageDraw.Draw(canvas)

    margin = 72 * scale
    safe_width = width - margin * 2
    widest = 190 * scale  # 로고 폭에서 시작해 가장 긴 줄로 넓혀 나간다

    ink_top = y = 88 * scale
    y += paste_logo(canvas, margin, y, 190 * scale) + 44 * scale

    f_tagline = font(FONT_BOLD, 20 * scale)
    draw_tracked(draw, (margin, y), TAGLINE, f_tagline, GRAY_TEXT, -0.3 * scale)
    y += 26 * scale + 26 * scale

    f_headline = font(FONT_BOLD, 46 * scale)
    for line in HEADLINE:
        used = tracked_width(draw, line, f_headline, -0.9 * scale)
        if used > safe_width:
            raise SystemExit(f"타이틀 문구가 안전 폭을 넘습니다: {line!r} ({used:.0f}px)")
        draw_tracked(draw, (margin, y), line, f_headline, FOREGROUND, -0.9 * scale)
        widest = max(widest, used)
        y += 60 * scale
    y += 30 * scale

    f_sub = font(FONT_REGULAR, 18 * scale)
    used = tracked_width(draw, SUBCOPY, f_sub, -0.2 * scale)
    if used > safe_width:
        raise SystemExit(f"보조 문구가 안전 폭을 넘습니다 ({used:.0f}px)")
    draw_tracked(draw, (margin, y), SUBCOPY, f_sub, GRAY_TEXT, -0.2 * scale)
    widest = max(widest, used)
    y += 24 * scale + 34 * scale

    draw.line([(margin, y), (margin + 340 * scale, y)], fill=GRAY_LINE, width=scale)
    y += 24 * scale

    f_label = font(FONT_REGULAR, 14 * scale)
    draw_tracked(draw, (margin, y), "시공 · 견적 문의", f_label, GRAY_TEXT, -0.2 * scale)
    y += 22 * scale

    f_phone = font(FONT_BOLD, 30 * scale)
    draw_tracked(draw, (margin, y), PHONE_PRIMARY, f_phone, FOREGROUND, -0.5 * scale)
    phone_end = margin + tracked_width(draw, PHONE_PRIMARY, f_phone, -0.5 * scale)

    f_phone2 = font(FONT_REGULAR, 20 * scale)
    draw_tracked(
        draw,
        (phone_end + 16 * scale, y + 8 * scale),
        PHONE_SECONDARY,
        f_phone2,
        GRAY_TEXT,
        -0.3 * scale,
    )
    bottom = y + 40 * scale
    if bottom > height:
        raise SystemExit(f"타이틀 내용이 세로 규격을 넘습니다 ({bottom / scale:.0f}px)")

    widest = max(widest, phone_end - margin)
    ratio = assert_readable(backdrop, (margin, ink_top, round(margin + widest), bottom))
    print(f"  문구 대비 {ratio:.1f}:1")

    out = OUT_DIR / "title-966x600.png"
    canvas.resize((966, 600), Image.LANCZOS).save(out)
    return out


def build_profile(scale: int = 4) -> Path:
    """프로필 161x161. 모바일에서는 원형으로 잘리므로 중앙에만 배치한다."""
    side = 161 * scale
    canvas = Image.new("RGB", (side, side), WHITE)

    logo_width = 112 * scale
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_height = round(logo_width * logo.height / logo.width)

    # 원형 크롭에 잘리지 않는지 확인한다. 중심에서 로고 모서리까지가 반지름보다 짧아야 한다.
    radius = side / 2
    corner = ((logo_width / 2) ** 2 + (logo_height / 2) ** 2) ** 0.5
    if corner > radius * 0.92:
        raise SystemExit(f"로고가 원형 크롭에 잘립니다 (모서리 {corner:.0f} / 반지름 {radius:.0f})")

    canvas.paste(
        logo.resize((logo_width, logo_height), Image.LANCZOS),
        (round((side - logo_width) / 2), round((side - logo_height) / 2)),
        logo.resize((logo_width, logo_height), Image.LANCZOS),
    )

    out = OUT_DIR / "profile-161x161.png"
    canvas.resize((161, 161), Image.LANCZOS).save(out)
    return out


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for path in (build_title(), build_profile()):
        with Image.open(path) as made:
            print(f"{path.relative_to(ROOT)}  {made.size[0]}x{made.size[1]}")


if __name__ == "__main__":
    main()
