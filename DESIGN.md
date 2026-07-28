---
name: IMR Tech Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#46494b'
  on-tertiary: '#ffffff'
  tertiary-container: '#5e6163'
  on-tertiary-container: '#dadcde'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is anchored in **Precision, Authority, and Innovation**. It is designed for a target audience of C-suite executives and technical decision-makers who value clarity over decoration. The UI evokes a sense of "technological luxury"—where high-end craftsmanship meets industrial efficiency.

The visual style is a blend of **High-Contrast Minimalism** and **Corporate Modernity**. It utilizes an architectural approach to layout, where whitespace is treated as a structural element rather than a void. The aesthetic is sharp and geometric, utilizing a monochromatic foundation to allow technical content and "Electric Indigo" calls-to-action to command absolute attention.

**Key Principles:**
- **Calculated Whitespace:** Generous margins to facilitate focus and rapid information processing.
- **Structural Integrity:** Use of visible grid alignments and precise 1px borders.
- **Functional Sophistication:** Every element serves a specific purpose; decorative flourishes are replaced by exceptional typography and subtle depth.

## Colors

The palette is strictly curated to reinforce a high-tech, premium atmosphere. It relies on a heavy monochrome base to establish authority, using the accent color only to denote interactivity or critical path items.

- **Primary (Electric Indigo):** #4F46E5. Used exclusively for primary buttons, active states, and high-priority data visualization.
- **Secondary (Deep Black):** #000000. Used for headlines and heavy structural elements to provide maximum contrast.
- **Tertiary (Cool Gray):** #F5F7F9. A soft, functional background color used for container backgrounds and subtle section differentiation.
- **Neutral:** A range of slate grays (focused on #64748B) used for secondary text and decorative borders.
- **Pure White:** #FFFFFF. The base for the primary canvas, ensuring a clean, laboratory-like precision.

## Typography

This design system uses a dual-sans-serif approach to balance technical precision with extreme legibility. 

**Geist** is used for headlines and labels. Its slightly condensed, monolinear construction provides the "architectural" feel required for the brand. Headlines should always use high-contrast weights (SemiBold to Bold) to establish a clear hierarchy.

**Inter** is the workhorse for body copy and UI elements. Its neutral character and high x-height ensure readability in data-heavy contexts.

**Stylistic Rules:**
- **Hierarchy:** Maintain a clear distinction between display text (Geist) and functional text (Inter).
- **Leading:** Body text utilizes generous line heights (1.5x+) to maintain the "clean" aesthetic.
- **Caps:** Labels and small identifiers often use Geist in Uppercase with 5% letter spacing for a technical, "data-tag" look.

## Layout & Spacing

The layout is built on a **12-column Fixed Grid** for desktop (max-width 1280px) and a **4-column Fluid Grid** for mobile. 

The spacing rhythm is strictly based on a **4px baseline grid**. Components and layouts should always use multiples of 4px. 

**Layout Model:**
- **Desktop:** 12 columns / 24px gutter / 64px minimum side margins.
- **Tablet:** 8 columns / 24px gutter / 32px side margins.
- **Mobile:** 4 columns / 16px gutter / 16px side margins.

Containers should utilize `spacing.xl` (40px) or `spacing.xxl` (80px) for vertical section padding to maintain the "generous whitespace" aesthetic.

## Elevation & Depth

To maintain a "crisp" and "precise" feel, the system avoids heavy, muddy shadows. Depth is communicated through a combination of **Tonal Layers** and **Subtle Ambient Shadows**.

- **Level 0 (Base):** Pure White (#FFFFFF).
- **Level 1 (Cards/Surface):** White background with a 1px border (#E2E8F0) or a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)).
- **Level 2 (Dropdowns/Modals):** White background with a more defined but still subtle shadow (0px 10px 30px rgba(0,0,0,0.08)) and a #000000 1px border at 5% opacity.

**Interactive States:**
- **Hover:** Elements may slightly lift (move -2px on Y-axis) and the shadow intensity increases by 2%. 
- **Active:** Elements return to Level 1 or show a subtle inset border.

## Shapes

The shape language is **Soft yet Disciplined**. While the overall aesthetic is sharp and geometric, a subtle radius is applied to UI components to prevent the interface from feeling "hostile" or overly retro-brutalist.

- **Standard Radius:** 0.25rem (4px) for inputs and small buttons.
- **Large Radius (rounded-lg):** 0.5rem (8px) for cards and containers.
- **Extra Large Radius (rounded-xl):** 0.75rem (12px) for major sections or hero images.

Circular (pill) shapes are reserved exclusively for "Status Chips" or "Badges" to provide a clear visual contrast against the otherwise rectangular structure.

## Components

### Buttons
- **Primary:** Background #4F46E5, Text #FFFFFF, 4px radius. High-contrast, no gradient.
- **Secondary:** Background #000000, Text #FFFFFF. Used for secondary actions.
- **Ghost:** Transparent background, 1px border #000000 (10% opacity), Text #000000.

### Input Fields
- **Default:** 1px border #E2E8F0, Inter 16px text. 
- **Focus:** 1px border #4F46E5 with a 2px soft outer glow (Electric Indigo at 10% opacity).
- **Label:** Geist 14px, Bold, Uppercase, 5% letter spacing.

### Cards
- **Standard:** White background, 1px border #F1F5F9, 8px radius.
- **Elevation:** Use the Level 1 shadow defined in the Elevation section. Padding should be generous (`spacing.xl`).

### Chips & Tags
- **Status:** Pill-shaped, light grey background (#F1F5F9), Geist 12px Medium text.
- **Active Accent:** Pill-shaped, Electric Indigo background (#4F46E5), White text.

### Lists
- Clean 1px horizontal dividers (#F1F5F9). 
- Hover state: Background change to #F8FAFC.
- Iconography: Thin-stroke (1.5pt) monochrome icons only.

### Navigation
- Top Bar: Fixed, Pure White, 1px bottom border #F1F5F9.
- Links: Inter 14px, Medium. Active state indicated by an Electric Indigo 2px bottom underline.