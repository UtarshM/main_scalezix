import os
import json
import zipfile
import xml.etree.ElementTree as ET
import qrcode
from PIL import Image, ImageDraw, ImageFont

# Load students from Excel sheet directly
excel_path = '/Users/utkarshmakwana/Downloads/Final internship (1).xlsx'

shared_strings = []
with zipfile.ZipFile(excel_path) as z:
    if 'xl/sharedStrings.xml' in z.namelist():
        tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
        for elem in tree.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}t'):
            shared_strings.append(elem.text)
    
    sheet_tree = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
    rows = []
    for row in sheet_tree.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}row'):
        row_vals = []
        for cell in row.iter('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}c'):
            t = cell.attrib.get('t')
            v = cell.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}v')
            val = v.text if v is not None else ''
            if t == 's' and val.isdigit():
                val = shared_strings[int(val)]
            row_vals.append(val)
        if len(row_vals) >= 2 and row_vals[0].strip():
            rows.append((row_vals[0].strip(), row_vals[1].strip()))

aiml_count = 0
fsd_count = 0
certificates = []

for name, course in rows:
    if "AI" in course:
        aiml_count += 1
        cert_id = f"SZX-AIML-26-{aiml_count:03d}"
        program_name = "AI & Machine Learning"
    else:
        fsd_count += 1
        cert_id = f"SZX-FSD-26-{fsd_count:03d}"
        program_name = "Full Stack Development"

    certificates.append({
        "certificateId": cert_id,
        "studentName": name,
        "program": program_name,
        "credential": "Internship Program",
        "startDate": "10 June 2026",
        "endDate": "30 July 2026",
        "issueDate": "31 July 2026",
        "organization": "Scalezix",
        "status": "valid",
        "pdf": f"/certificates/{cert_id}.pdf"
    })

# Save updated JSON
os.makedirs('src/data', exist_ok=True)
with open('src/data/certificates.json', 'w') as f:
    json.dump(certificates, f, indent=2)

print(f"Saved {len(certificates)} certificates to src/data/certificates.json")

# Now generate 300 DPI high resolution certificate images and save as PDFs
os.makedirs('public/certificates', exist_ok=True)

# Certificate Canvas dimensions: 2000 x 1414 (roughly 3:2 landscape)
W, H = 2000, 1414

# Colors
DARK_TEAL = (10, 46, 42)
GOLD = (197, 155, 63)
WHITE = (255, 255, 255)
OFF_WHITE = (248, 249, 250)
TEXT_DARK = (30, 41, 59)
TEXT_MUTED = (100, 116, 139)

# Font loading helpers
def get_font(name, size):
    try:
        if name == 'script':
            paths = ['/System/Library/Fonts/Supplemental/Zapfino.ttf', '/System/Library/Fonts/Supplemental/Brush Script.ttf', '/System/Library/Fonts/Supplemental/Georgia.ttf']
        elif name == 'serif-bold':
            paths = ['/System/Library/Fonts/Supplemental/Georgia Bold.ttf', '/System/Library/Fonts/Supplemental/Georgia.ttf']
        elif name == 'sans-bold':
            paths = ['/System/Library/Fonts/HelveticaNeue.ttc', '/System/Library/Fonts/Supplemental/Arial Bold.ttf']
        else:
            paths = ['/System/Library/Fonts/Supplemental/Georgia.ttf']
        
        for p in paths:
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
    except Exception as e:
        pass
    return ImageFont.load_default()

font_title = get_font('serif-bold', 64)
font_gold_sub = get_font('serif-bold', 28)
font_subtitle = get_font('sans-bold', 20)
font_name = get_font('script', 52)
font_body = get_font('serif-bold', 24)
font_meta = get_font('sans-bold', 18)
font_mono = get_font('sans-bold', 16)

for cert in certificates:
    img = Image.new('RGB', (W, H), WHITE)
    draw = ImageDraw.Draw(img)

    # Outer border
    draw.rectangle([40, 40, W-40, H-40], outline=DARK_TEAL, width=6)
    draw.rectangle([52, 52, W-52, H-52], outline=GOLD, width=2)

    # Corner design elements (Top Left & Bottom Right Dark Teal & Gold Triangles)
    draw.polygon([(40, 40), (320, 40), (40, 320)], fill=DARK_TEAL)
    draw.polygon([(40, 40), (300, 40), (40, 300)], fill=(14, 58, 53))
    draw.line([(40, 325), (325, 40)], fill=GOLD, width=4)

    draw.polygon([(W-40, H-40), (W-320, H-40), (W-40, H-320)], fill=DARK_TEAL)
    draw.polygon([(W-40, H-40), (W-300, H-40), (W-40, H-300)], fill=(14, 58, 53))
    draw.line([(W-40, H-325), (W-325, H-40)], fill=GOLD, width=4)

    # Top Scalezix Branding
    draw.text((W//2, 140), "Scalezix", fill=DARK_TEAL, font=get_font('serif-bold', 48), anchor="mm")
    draw.text((W//2, 185), "AI & SOFTWARE DEVELOPMENT LAB", fill=GOLD, font=font_subtitle, anchor="mm")

    # Main Title
    draw.text((W//2, 270), "CERTIFICATE", fill=DARK_TEAL, font=font_title, anchor="mm")
    
    # Gold divider line with OF COMPLETION
    draw.line([(W//2 - 250, 330), (W//2 + 250, 330)], fill=GOLD, width=2)
    draw.text((W//2, 330), " OF COMPLETION ", fill=GOLD, font=font_gold_sub, anchor="mm")

    # Subtitle
    draw.text((W//2, 420), "THIS IS TO CERTIFY THAT", fill=TEXT_MUTED, font=font_subtitle, anchor="mm")

    # Student Name
    student_name = cert['studentName']
    draw.text((W//2, 510), student_name, fill=DARK_TEAL, font=font_name, anchor="mm")
    draw.line([(W//2 - 300, 560), (W//2 + 300, 560)], fill=GOLD, width=2)

    # Program & Description
    prog = cert['program']
    desc_line1 = f"has successfully completed their internship as a {prog} Intern at Scalezix,"
    desc_line2 = "contributing to building intelligent software systems, automated workflows, and production features."
    desc_line3 = "We appreciate their dedication and wish them success in their future endeavors."

    draw.text((W//2, 620), desc_line1, fill=TEXT_DARK, font=font_body, anchor="mm")
    draw.text((W//2, 665), desc_line2, fill=TEXT_DARK, font=font_body, anchor="mm")
    draw.text((W//2, 710), desc_line3, fill=TEXT_DARK, font=font_body, anchor="mm")

    # Signature Block (Bottom Left)
    draw.line([(350, 950), (650, 950)], fill=DARK_TEAL, width=2)
    draw.text((500, 920), "Utkarsh Makwana", fill=DARK_TEAL, font=get_font('script', 28), anchor="mm")
    draw.text((500, 980), "Utkarsh Makwana", fill=GOLD, font=get_font('serif-bold', 22), anchor="mm")
    draw.text((500, 1010), "CEO AND FOUNDER", fill=DARK_TEAL, font=font_subtitle, anchor="mm")

    # Partner Ecosystem Box (Center Bottom)
    draw.rectangle([W//2 - 260, 1100, W//2 + 260, 1170], outline=GOLD, width=2, fill=WHITE)
    draw.text((W//2, 1135), "NVIDIA   |   aws   |   Google for Startups", fill=DARK_TEAL, font=get_font('sans-bold', 20), anchor="mm")

    # Issue Date (Bottom Right)
    draw.text((W - 350, 950), "Issue Date", fill=TEXT_MUTED, font=font_subtitle, anchor="mm")
    draw.text((W - 350, 985), cert['issueDate'], fill=DARK_TEAL, font=font_body, anchor="mm")

    # Verification Details & QR Code (Bottom Left Metadata)
    qr_url = f"https://scalezix.com/verify/{cert['certificateId']}"
    qr = qrcode.QRCode(version=1, box_size=4, border=2)
    qr.add_data(qr_url)
    qr.make(fit=True)
    qr_img = qr.make_image(fill_color="black", back_color="white").convert('RGB')
    qr_img = qr_img.resize((120, 120))
    img.paste(qr_img, (120, H - 220))

    draw.text((260, H - 180), f"Certificate ID: {cert['certificateId']}", fill=DARK_TEAL, font=font_mono)
    draw.text((260, H - 150), f"Verify online at: scalezix.com/verify/{cert['certificateId']}", fill=TEXT_MUTED, font=font_mono)

    # Right Ribbon / Badge
    draw.polygon([(W - 220, 50), (W - 100, 50), (W - 100, 300), (W - 160, 260), (W - 220, 300)], fill=DARK_TEAL)
    draw.polygon([(W - 212, 50), (W - 108, 50), (W - 108, 285), (W - 160, 250), (W - 212, 285)], outline=GOLD, width=2)
    draw.text((W - 160, 100), "★", fill=GOLD, font=get_font('serif-bold', 32), anchor="mm")
    draw.text((W - 160, 150), "INTERNSHIP", fill=WHITE, font=get_font('sans-bold', 15), anchor="mm")
    draw.text((W - 160, 175), "PROGRAM", fill=WHITE, font=get_font('sans-bold', 15), anchor="mm")
    draw.text((W - 160, 210), "2026", fill=GOLD, font=get_font('serif-bold', 24), anchor="mm")

    # Save as high quality PDF
    pdf_path = f"public/certificates/{cert['certificateId']}.pdf"
    img.save(pdf_path, "PDF", resolution=300.0)

print(f"Generated {len(certificates)} certificate PDFs matching exact sample certificate design!")
