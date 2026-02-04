# Landon Coddington - Portfolio

A responsive portfolio website featuring an adaptive theme system with Light, Dark, and Auto modes. Built for DESN378 at Eastern Washington University.

## 🎨 Design Token System

### Color Tokens
This project uses a semantic color system that adapts between light and dark modes:

**Brand Colors:**
- `--brand-primary-20`: #a62526 (Red - primary brand color)
- `--brand-accent-50`: #255f7e (Blue - accent color)
- `--brand-secondary-50`: #bfff00 (Yellow-green - pop color)

**Neutral Scale:**
- Light mode: Mid-gray backgrounds (#9a9a9a) with dark text (#000000)
- Dark mode: Dark backgrounds (#1e1e1e) with white text (#ffffff)

**Semantic Tokens:**
- `--bg`: Main background color (adapts per theme)
- `--bg-card`: Card/section background (adapts per theme)
- `--text`: Primary text color (adapts per theme)
- `--text-muted`: Secondary text for body copy
- `--accent`: Interactive elements (consistent across themes)
- `--pop`: Highlights and CTAs (consistent across themes)

### Typography Scale
- **Display Font**: Bebas Neue (headers, large text)
- **Body Font**: Raleway (paragraphs, UI elements)
- **Sizes**: 16px (S), 24px (M), 32px (L), 40px (XL)

### Spacing Scale
Consistent spacing using a modular scale:
- `--space-xs`: 0.5rem (8px)
- `--space-s`: 1rem (16px)
- `--space-m`: 2rem (32px)
- `--space-l`: 4rem (64px)
- `--space-xl`: 8rem (128px)

## 🌓 Theme System

### Features
- **Three modes**: Light, Dark, and Auto (follows system preference)
- **Persistence**: User choice saved to localStorage
- **System detection**: First-time visitors see their OS preference
- **Live updates**: Auto mode responds to system theme changes in real-time
- **Accessibility**: Keyboard navigation + reduced motion support

### How It Works
1. On page load, checks localStorage for saved preference
2. If no saved preference, detects system theme using `prefers-color-scheme`
3. Theme changes are immediate (no page flash)
4. "Auto" mode dynamically follows OS theme changes
5. Manual theme selection (Light/Dark) overrides system preference

## ♿ Accessibility

### Reduced Motion
Users with `prefers-reduced-motion` enabled will see:
- Transitions disabled on decorative animations
- Functional motion (focus states) preserved
- Smooth experience without motion sickness triggers

### Keyboard Navigation
- All theme buttons are Tab-accessible
- Enter/Space keys activate theme changes
- Visual focus indicators present on all interactive elements

## 🎯 Design Decisions

### Design Token Strategy
- **Semantic naming**: Used `--bg` and `--text` instead of `--color-light` so tokens describe purpose, not appearance
- **Brand consistency**: Kept accent colors (`--brand-primary-20`, `--pop`) consistent across both themes for brand recognition


### Theme Switcher Visual Design
- **Subtle backdrop**: `rgba(255, 255, 255, 0.1)` provides just enough contrast against the dark nav without competing for attention
- **Active state highlight**: Uses my brand accent color (yellow-green) to make the selected mode unmistakable
- **Minimalist buttons**: Transparent backgrounds keep focus on content until interaction



## 📚 Resources & Citations

### Fonts
- [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue) - Google Fonts
- [Raleway](https://fonts.google.com/specimen/Raleway) - Google Fonts

### Learning Resources
- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN: Window.matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Web.dev: prefers-color-scheme](https://web.dev/prefers-color-scheme/)
- ([claude.ai](https://claude.ai/)) for theme button styling and debugging as well as a checklist to make sure I was following along correctly.

### Design Inspiration
- Course materials: DESN368 Week 3 - The Inheritance & The Preference
- Personal design decisions for color palette and layout

## 🚀 Deployment

Live site: [Your GitHub Pages URL here]

Repository: [(https://github.com/landoncoddington/DESN-378-code-design-2)]

## 📄 License

Created for educational purposes as part of DESN378 coursework at Eastern Washington University.

---

**Built by Landon Coddington | Co-created with Claude AI**
