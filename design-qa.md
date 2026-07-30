# Design QA — standalone IMR wordmark

## Comparison target

- Source visual truth: `C:\Users\clerc\AppData\Local\Temp\ibm-header-source.png`
- Source reference: IBM Spanish homepage header, captured in Microsoft Edge from `https://www.ibm.com/es-es`
- Implementation screenshot: `C:\Users\clerc\AppData\Local\Temp\imr-logo-desktop-dark.png`
- Focused comparison: `C:\Users\clerc\AppData\Local\Temp\imr-ibm-header-comparison.png`
- Implementation route: `http://127.0.0.1:4175/es/`
- State: light theme, desktop header visible

## Viewport and normalization

- Source capture: 1280 × 800 px, 1280 × 800 CSS px, device scale factor 1
- Implementation capture: 1280 × 900 px, 1280 × 900 CSS px, device scale factor 1
- Focused comparison: both headers cropped to 1280 × 150 px and stacked without scaling
- Mobile verification: 390 × 844 CSS px, device scale factor 1

## Full-view comparison evidence

The full captures confirm that each site retains its own layout and visual system. The requested comparison is intentionally scoped to the brand treatment: a single striped wordmark anchors the left side of the navigation with no duplicated company name beside it.

## Focused region comparison evidence

The focused header comparison shows the IBM and IMR treatments at the same pixel width. The IMR wordmark is slightly larger by design, making the brand the primary header element while preserving the site's existing 76 px navigation height and spacing.

## Required fidelity surfaces

- Fonts and typography: the redundant HTML brand text has been removed; the supplied striped letterforms are now the only visible brand typography.
- Spacing and layout rhythm: the wordmark remains vertically centered, does not crowd navigation, and scales from 100 × 41 px on desktop to 92 × 38 px on mobile.
- Colors and visual tokens: the source-black wordmark renders black in light mode and uses a CSS inversion to render white in dark mode and the dark footer.
- Image quality and asset fidelity: the horizontal transparent PNG is derived directly from `public/images/logo v1.jpg`, preserving all three striped letters without stretching or replacing them with code-generated artwork.
- Copy and content: no page copy was changed as part of this brand treatment.

## Responsive and interaction verification

- Desktop light and dark themes both maintain clear logo contrast.
- Mobile header has no horizontal overflow and the logo remains fully visible.
- Mobile menu opens with `aria-expanded="true"`.
- Footer wordmark loads at 104 × 42 px and remains fully visible.
- Production-style preview reported no console warnings or errors.

## Findings

No actionable P0, P1, or P2 differences remain for the requested brand treatment.

## Comparison history

1. Earlier implementation used a square IMR icon followed by the text “IMR Tech,” creating a redundant lockup.
2. The header and footer now use one horizontal IMR wordmark derived from the supplied logo.
3. Post-fix comparison confirms the IBM-like standalone wordmark hierarchy at desktop and mobile sizes, with correct theme contrast and no overflow.

## Follow-up polish

No blocking polish items remain. Header height and navigation typography intentionally remain part of IMR Tech's existing design system rather than cloning IBM's full navigation.

final result: passed
