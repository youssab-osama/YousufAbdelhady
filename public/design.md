---
name: Cyber-Minimalist Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#bccabb'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#869486'
  outline-variant: '#3d4a3e'
  surface-tint: '#4de082'
  primary: '#6bfb9a'
  on-primary: '#003919'
  primary-container: '#4ade80'
  on-primary-container: '#005e2d'
  inverse-primary: '#006d36'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffd8c6'
  on-tertiary: '#552100'
  tertiary-container: '#ffb38b'
  on-tertiary-container: '#883900'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6dfe9c'
  primary-fixed-dim: '#4de082'
  on-primary-fixed: '#00210c'
  on-primary-fixed-variant: '#005227'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 120px
    fontWeight: '700'
    lineHeight: 110%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '600'
    lineHeight: 115%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 120%
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 160%
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 4rem
  grid-gutter: 1.5rem
  unit: 4px
  section-gap: 10rem
---

## Brand & Style

This design system is engineered for a high-performance software engineer who balances technical rigor with creative problem-solving. The aesthetic is a fusion of **Minimalism** and **High-Contrast Bold**, utilizing a strict structural grid to communicate precision, while injecting "glitch-inspired" vibrancy to showcase personality. 

The visual narrative focuses on "The Ghost in the Machine"—a sophisticated dark environment where code and logic are elevated to art. It evokes a sense of expertise, innovation, and futuristic thinking. Every element is intentional; whitespace is used not just as a separator, but as a spotlight for high-impact typography and vibrant technical showcases.

## Colors

The palette is anchored by a sophisticated, deep black (`#000000`) background, providing a canvas for high-energy accents. 

- **Primary (Electric Green):** Derived from the source style guide, this color represents execution and "system-go" status. It is used for primary actions and success states.
- **Secondary (Neon Purple):** Adds a layer of creative depth and tech-forward energy. Used for secondary highlights and data visualization.
- **Tertiary (Sunset Orange):** A high-impact contrast color for warnings, critical calls-to-action, or specific technical highlights.
- **Neutral (Slate/White):** Grays are used for secondary text to maintain hierarchy, while pure white is reserved for maximum legibility in body copy.

## Typography

The typography system relies on extreme scale to create impact. **Space Grotesk** serves as the primary headline and label font, offering a geometric, technical feel that mirrors monospaced fonts while maintaining superior readability and personality. 

**Inter** is utilized for body copy to provide a neutral, highly legible contrast to the expressive headlines. Hierarchy is established through massive size differentials—headlines should dominate the layout, often breaking conventional margins to create a dynamic, editorial feel. Use "Label-mono" in all caps for metadata, categories, and technical tags.

## Layout & Spacing

The design system employs a **Fixed 12-Column Grid** for desktop, prioritizing horizontal alignment and rigorous structural integrity. 

- **The Power of the Void:** Large vertical gaps (`section-gap`) separate content blocks to allow the user to focus on one project or concept at a time.
- **Modular Blocks:** Content is housed in grid-aligned containers. Gutters are kept tight to emphasize the "monolithic" nature of the tech stack.
- **Asymmetry:** While the grid is fixed, content should be placed asymmetrically—for example, a headline spanning columns 1-8 while the supporting text occupies columns 9-12.

## Elevation & Depth

In this system, depth is conveyed through **Tonal Layers** and **Luminous Borders** rather than traditional shadows.

- **Surface Tiers:** The base background is `#000000`. Elevated cards or sections use a slightly lighter `#111111` or `#1A1A1A`.
- **The "Glow" Effect:** Instead of drop shadows, use low-opacity outer glows in the primary or secondary color to indicate focus or interactivity.
- **Glassmorphism:** Use semi-transparent overlays (10-15% opacity) with a high backdrop blur (20px+) for navigation bars and floating modals to maintain a sense of space and technical sophistication.

## Shapes

The shape language is primarily **Soft (0.25rem)**. This provides a subtle nod to modern hardware aesthetics—where precision engineering meets ergonomic design. 

Large containers (like project cards) should use `rounded-lg` (0.5rem), while buttons and smaller UI components stay at the base `rounded` level. Avoid fully circular "pill" shapes unless used for specialized status indicators; the goal is to maintain a "structured" rather than "bubbly" feel.

## Components

### Buttons
- **Primary:** Solid `#4ADE80` background with `#000000` text. Sharp corners. On hover, apply a 4px offset "ghost" border in the same color.
- **Ghost:** Transparent background with a 1px white border. High-speed transition to a full secondary color fill on hover.

### Cards
- Use a "Technical Spec" style. Thin borders (`#333333`) and a top-right corner label in `label-mono` style. Backgrounds should be a dark gray with a very subtle noise texture to prevent banding.

### Input Fields
- Underline-only or subtle outlined boxes. Focus states should trigger a neon primary color border and a subtle background glow.

### Chips/Tags
- Small, uppercase, monospaced text. Use secondary and tertiary colors for "Skill" tags (e.g., "React" in Purple, "Rust" in Orange) to create a vibrant, categorized look.

### Navigation
- A minimal, fixed top bar. Use a backdrop blur effect so content scrolls "under" the navigation, maintaining the glassmorphic depth.