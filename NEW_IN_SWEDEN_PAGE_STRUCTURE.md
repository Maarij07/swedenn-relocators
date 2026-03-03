# New in Sweden Page - Layout & Content Structure

## Page Overview
**File Location**: `app/[locale]/new-in-sweden/page.jsx`
**Type**: Informational guide page for newcomers to Sweden
**Design Pattern**: Unique from service pages (uses custom styling with dark header card)

---

## 1. HERO SECTION (Custom Card Style)
**Background**: Dark blue/black overlay (#141A21 at 88% opacity) with background image
**Container**: 
- Max-width: 1400px
- Padding: responsive (pt-6 to pt-12)
- Border radius: rounded-lg
- Margin-top: 160px (responsive)

**Content Layout**: 2-column grid (lg:grid-cols-2)

**Left Content**:
```
- h1: "New in Sweden" (responsive text sizes)
  - text-2xl sm:text-4xl lg:text-5xl
  - color: white
  - font-bold
  
- p.subtitle: "Starting a new chapter in Sweden?" 
  - color: gray-300
  - font-medium
  - font-size: 13px → 16px
  
- p.description: Long supporting text
  - color: gray-400
  - font-normal
  - font-size: 13px → 16px
```

**Right Content**:
```
- Image: /illustration-seo.svg
  - Centered right-aligned on lg screens
  - Responsive sizing
```

---

## 2. STATS SECTION (Post-Hero)
**Container**: 
- Padding: py-14 to py-20
- Background: transparent (shows white page background)
- Max-width: 1400px

**Layout**: 4-column grid (responsive: 1 col, 2 cols on sm, 4 cols on lg)

**Each Stat Card**:
```
{
  background: white
  border: 1px solid #e5e7eb
  shadow: shadow-lg
  border-radius: rounded-lg
  padding: p-4
  dimensions: width 301.5px, height 123px
  
  Layout: flex
  - left: text content
    - small label (11px, gray-600, uppercase, bold)
    - large number (1.5rem, bold, gray-900)
  - right: icon/image (40x40)
}
```

**Cards**:
1. Employment Rate: 69.7% + icon
2. Yearly GDP: SEK 6.38T + icon
3. Total Population: 10.66 M + icon
4. Global Innovation List: 2 + icon

---

## 3. MAIN SYSTEM GUIDE SECTION
**Container**: 
- Padding: py-14 to py-20
- Background: white
- Max-width: 1400px
- Uses 20-column grid system

**Layout**: 2-column layout
- **Left Column** (13 cols, ~65%): Main content sections
- **Right Column** (7 cols, ~35%): Quick links panel

### LEFT COLUMN - Main Content Section

**Header (Centered)**:
```
- p.tagline: Color #6FAAEA, font-normal, 14px
  "Helping you navigate, so you move one step way"
  
- h2: Color #6FAAEA, font-extrabold, 38px
  "Your First Steps to Success in Sweden"
  
- h3: Color #002C5C, font-extrabold, 42px
  "A Clear Roadmap for Every Newcomer"
```

**Content Cards** (Repeating pattern):
```
{
  background: white
  border: 1px solid #e5e7eb
  shadow: 0_2px_8px_rgba(0,0,0,0.15)
  padding: p-6
  spacing: space-y-8 between cards
  
  Layout:
  1. Section title (uppercase, 12px, bold, tracking-wider)
     - Color: #6FAAEA or #174D87
     
  2. h4.title (24px, bold, #000000)
  
  3. Content div (space-y-4)
     - Multiple paragraphs (12px, #898A9C, leading-relaxed)
     - Bullet lists with dots (#174D87)
     - Nested sections with blue headers (#174D87)
}
```

**Specific Content Sections** (in order):

#### 1. ACCOMMODATION
- **Section Title**: "ACCOMMODATION"
- **Title**: "Finding Home"
- Content: 4 paragraphs about housing options

#### 2. SOCIAL SECURITY NUMBER (Personnummer)
- **Section Title**: "SOCIAL SECURITY NUMBER"
- **Title**: "Personnummer"
- Content:
  - Intro paragraph
  - Importance paragraph
  - Requirements subsection (blue header box with bullet points)

#### 3. IDENTIFICATION CARD
- **Section Title**: "IDENTIFICATION CARD"
- **Title**: "Swedish ID Card"
- Content: 2 paragraphs

#### 4. BANK ACCOUNT
- **Section Title**: "Opening of a"
- **Title**: "Bank Account"
- Content:
  - Intro
  - Identification methods (3 bullets)
  - Requirements subsection (blue header)
  - Before visiting subsection (blue header)

#### 5. EMPLOYMENT
- **Section Title**: "LOOKING"
- **Title**: "For Work In Sweden"
- Content: Paragraph with embedded link to Arbetsförmedlingen

#### 6. HEALTHCARE
- **Section Title**: "HEALTH CARE"
- **Title**: "Health Centre"
- Content sections:
  - Main description
  - **Maternity Clinics** (full-width blue header + gray content box)
  - **Healthcare Grid** (2 columns):
    - Child Health Care Centre
    - Costs and Fees
  - **Dental Care Grid** (2 columns):
    - Costs is covered
    - Where do I find a dentist

#### 7. DRIVING LICENSE
- **Section Title**: "HOW TO GET A"
- **Title**: "Driving License"
- Content:
  - EU license paragraph
  - Non-EU license paragraph
  - Steps subsection (blue header with bullet list)

#### 8. PARENTAL ALLOWANCE
- **Section Title**: "PARENTAL"
- **Title**: "Allowance"
- Content:
  - Registration subsection (blue header)
  - Details paragraph
  - Child Care Allowance subsection (blue header)

#### 9. EDUCATION
- **Section Title**: "SWEDISH EDUCATION SYSTEM"
- **Title**: "School Admissions"
- Content: 4 paragraphs covering preschool, compulsory school, free education

#### 10. QUALIFICATION RECOGNITION
- **Section Title**: "RECOGNITION OF"
- **Title**: "Higher Education Qualifications"
- Content: 3 paragraphs about ECTS and Swedish authorities

#### 11. UNEMPLOYMENT INSURANCE
- **Section Title**: "UNEMPLOYMENT"
- **Title**: "Insurance"
- Content: 3 paragraphs about unemployment benefits

#### 12. LANGUAGE COURSES
- **Section Title**: "LANGUAGE"
- **Title**: "Courses"
- Content:
  - Intro
  - 3 bullet options
  - SFI description

---

### RIGHT COLUMN - Quick Links Panel (7 cols)
**Sticky position** (fixed on right side)

**Header**:
```
h3: "Quick Links" or similar label
subtitle color, larger font
```

**Quick Link Items** (Accordion/Expandable):
```
{
  border: 1px solid #e5e7eb
  border-radius: rounded-lg
  padding: varies
  
  Summary (Click to expand):
  - Circle badge (40x40, bg-#174D87)
    - Icon inside (SVG)
  - Title text (75rem, font-600, gray-900)
  
  Details (Collapsed by default):
  - Paragraph text (70rem, gray-600)
}
```

**Quick Link Items List**:
1. Emergency Services
2. Banks
3. Healthcare
4. Driving License
5. Public Transport
6. Language School
7. Studies
8. Government Services
9. Housing
10. Employment

Each has:
- Title
- Icon (SVG from /public)
- Content description

---

## 4. SYSTEM GUIDE AUTHORITIES SECTION
**Background**: Light background (alternating from white)
**Layout**: Grid based on data categories

**Categories** (from authorityCategories array):
- Immigration & Population
- Work & Labour
- Housing Support
- Education & Skills
- Rights & Equality
- Law & Order
- Health & Safety
- Environment & Infrastructure
- Emergency Services
- Democracy & civics
- Oversight & Data Protection

Each category contains:
- **Title**: e.g., "Immigration & Population"
- **Authorities** (list items):
  - Authority name
  - Description paragraph

---

## 5. EMERGENCY NUMBERS SECTION
**Background**: Different background color (accent)
**Layout**: Grid or list format

**Content**:
- Section title: "Emergency Numbers"
- List of emergency contacts with:
  - Service name
  - Phone number
  - Brief description

---

## 6. USEFUL LINKS SECTION
**Layout**: 2-column or 3-column grid

**Each Link Card**:
```
{
  background: white
  border: subtle
  padding: p-4 to p-6
  
  Content:
  - Link title (clickable)
  - URL
  - Optional: category or description
}
```

**Links Groups**:
- Government Agencies
- Banks
- Telecom/Energy
- Cities
- EU Resources
- Other services

**Total**: 50+ links organized by category

---

## 7. CTA SECTION (Final)
**Background**: Accent color or gradient
**Layout**: Centered content

**Content**:
- Heading: Call-to-action message
- Paragraph: Descriptive text
- Button: "Contact Us" or "Get Started"
- Subtext: Additional info

---

## STYLING PATTERNS USED

### Colors
```
Primary: #174D87 (Dark blue) - Headers, accents
Secondary: #6FAAEA (Light blue) - Section labels
Text: #000000 (Black) - Headings
Text: #898A9C (Gray) - Body text
Text: #6B7280 (Medium gray) - Secondary text
Backgrounds: #FFFFFF (White), #F8FAFC (Light gray)
```

### Typography
```
H1: 1.5rem → 2.25rem (responsive)
H2: 38px, font-extrabold (#6FAAEA)
H3: 42px, font-extrabold (#002C5C)
H4: 24px, bold (#000000)
Body: 12px → 16px, #898A9C
```

### Spacing
```
Between sections: space-y-8
Card padding: p-6
Gap in grids: gap-6 to gap-8
Top padding (hero): pt-160px to pt-260px
Bottom padding: pb-20 to pb-40
```

### Components
```
Cards: rounded-lg, shadow-sm to shadow-lg, border-1 gray-100
Buttons: rounded-full, padding-responsive
Input fields: rounded-lg, border-gray-200
Accordions: Material-UI Accordion
Icons: SVG images from /public
```

---

## RESPONSIVE BREAKPOINTS

```
Mobile: 1 column layout, full width
Tablet (md:): 2 column layouts, adjusted padding
Desktop (lg:): 20-column grid, full features
4K (4k:): Larger padding, bigger fonts
```

---

## KEY DIFFERENCES FROM SERVICE PAGES

1. **No traditional hero section** - Uses custom dark card hero
2. **2-column main layout** - Left content, right sticky panel
3. **Custom styling** - Not using the service page card patterns as much
4. **Blue color scheme** - Different from purple/blue gradient accent system
5. **Accordion components** - Quick links use expandable accordions
6. **More detailed content** - Longer narrative format vs cards
7. **Statistics cards** - Unique stat display section
8. **Full-width boxes** - Less grid-based layout

---

## TRANSLATION KEYS (i18n)

```
newInSweden.mainContent
newInSweden.accommodation
newInSweden.socialSecurity
newInSweden.identificationCard
newInSweden.bankAccount
newInSweden.employment
newInSweden.healthcare
newInSweden.drivingLicense
newInSweden.parentalAllowance
newInSweden.education
newInSweden.qualificationRecognition
newInSweden.unemployment
newInSweden.language
newInSweden.systemGuide.quickLinks
newInSweden.authorityCategories
newInSweden.emergencyNumbers
(+ many more nested properties)
```

---

