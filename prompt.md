# Napkin AI Prompts — Partners Page Visuals

Use these prompts on [napkin.ai](https://napkin.ai) to generate the placeholder visuals on the Partners page.

---

## 1. Hero Visual (right side of hero section)

**Placement:** `app/[locale]/partners/page.tsx` — Hero section, right column

**Prompt:**
```
A clean, minimal network diagram showing three connected professional profiles (icons: briefcase, building, person) linked to a central hub labeled "RELOFY". Lines connect outward to client icons. Style: flat, modern, blue and dark navy color palette (#247FE1, #0f172a, white). No gradients. Transparent or light background (#F8F9FE). Business infographic style.
```

---

## 2. How It Works Flow (right side of How It Works section)

**Placement:** `app/[locale]/partners/page.tsx` — How It Works section, right column

**Prompt:**
```
A vertical 4-step process flow diagram for a B2B partner onboarding process. Steps: (1) Apply and Get Verified, (2) Build Your Profile, (3) Receive Matched Leads, (4) Deliver and Earn. Use numbered circles connected by dotted vertical lines. Color accents: blue (#247FE1), green, purple, orange — one per step. Clean flat design. White or light background. No shadows or gradients.
```

---

## 3. One Profile System (right side of dark section)

**Placement:** `app/[locale]/partners/page.tsx` — One Profile System section, right column (dark background)

**Prompt:**
```
A single digital ID card or profile card mockup for a professional partner. Shows fields: name, verified badge, service type, coverage area, availability toggle, commission rate. Dark background (#0f172a). White text and card elements. A blue checkmark badge in the top right corner. Minimal UI mockup style, no real data, placeholder values only.
```

---

## 4. Trust Framework (left side of Trust and Compliance section)

**Placement:** `app/[locale]/partners/page.tsx` — Trust & Compliance section, left column

**Prompt:**
```
A clean shield icon at the center surrounded by 6 labeled icons in a circular arrangement: Identity Verification, GDPR Compliance, Fraud Prevention, Client KYC, Commission Tracking, Professional Standards. Flat design. Colors: blue (#247FE1) and light gray. White background. Business compliance infographic style.
```

---

## 5. Service Providers Visual (inside the Service Providers card)

**Placement:** `app/[locale]/partners/page.tsx` — Who Can Join section, inside Service Providers card

**Prompt:**
```
A simple horizontal row of 5 industry icons representing: health insurance (cross/heart), logistics (box/truck), accounting (calculator/chart), money transfer (arrows/currency), property management (building/key). Flat icons, green accent color, white or very light background. No labels needed. Minimal and compact layout.
```

---

## Export Settings for All Visuals

- Format: **SVG** (preferred) or PNG with transparent background
- Dimensions: match aspect ratio of each placeholder (see page code)
  - Hero: square (~480x480px)
  - How It Works: 4:3 ratio (~640x480px)
  - One Profile: square (~480x480px)
  - Trust Framework: 4:3 ratio (~640x480px)
  - Service Providers card: wide rectangle (~600x144px)
- Save to: `public/partners/` folder
- Update `<Image>` src in the page to point to the new files
