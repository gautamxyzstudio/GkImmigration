---
name: Premium Indian Travel Identity
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#434651'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747782'
  outline-variant: '#c4c6d3'
  surface-tint: '#375ca8'
  primary: '#002155'
  on-primary: '#ffffff'
  primary-container: '#003580'
  on-primary-container: '#7fa1f2'
  inverse-primary: '#b0c6ff'
  secondary: '#b02f00'
  on-secondary: '#ffffff'
  secondary-container: '#ff5722'
  on-secondary-container: '#541100'
  tertiary: '#451200'
  on-tertiary: '#ffffff'
  tertiary-container: '#692101'
  on-tertiary-container: '#ef875e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e2ff'
  primary-fixed-dim: '#b0c6ff'
  on-primary-fixed: '#001945'
  on-primary-fixed-variant: '#1a438e'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59a'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#7b2e0d'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is rooted in the "Corporate Modern" aesthetic, blending the reliability of established global travel platforms with the vibrant energy of Indian hospitality. The brand personality is professional yet welcoming, prioritizing clarity to reduce the cognitive load associated with travel planning.

The visual style leverages high-quality whitespace, a refined color palette, and subtle elevation to create a sense of premium service. It avoids unnecessary decorative elements, favoring a "content-first" approach where photography and typography drive the user experience. The result is a UI that feels authoritative and trustworthy, yet accessible and energetic through its strategic use of accent colors.

## Colors

The palette is designed to balance authority with action. 

- **Primary (Deep Blue):** Used for navigation, headers, and primary branding elements to establish immediate trust and professional stability.
- **Secondary/CTA (Vibrant Orange):** Reserved exclusively for conversion points and high-priority alerts to ensure they stand out against the blue and white backdrop.
- **Neutral Palette:** Utilizes a pure White for the primary surfaces to maintain a clean "Airbnb-style" aesthetic, while Light Grey provides subtle differentiation for background sections and input containers.
- **Semantic Colors:** Success (Green), Warning (Amber), and Error (Red) should be used sparingly, maintaining a desaturated tone to avoid breaking the premium feel.

## Typography

This design system utilizes a dual-font approach to balance personality and readability. **Plus Jakarta Sans** is used for headings to provide a friendly, modern, and slightly rounded character that feels welcoming. **Inter** is used for all body text and UI labels due to its exceptional legibility at small sizes and its neutral, systematic feel.

Headings are consistently semi-bold or bold to create a clear visual anchor, while body text remains regular weight to ensure a clean, uncluttered reading experience. Line heights are generous to promote a sense of "breathability" within the content.

## Layout & Spacing

The system follows a strict **8px grid system**, ensuring all dimensions, margins, and paddings are multiples of 8. This creates a predictable visual rhythm and simplifies the handoff between design and engineering.

The layout utilizes a **fixed grid** for desktop environments (12 columns, 1280px max-width) to maintain the premium feel found on high-end travel sites. On mobile, the layout shifts to a fluid 4-column structure with 16px side margins. Large vertical spacing (xxl) is encouraged between major sections to emphasize the minimalist aesthetic.

## Elevation & Depth

Visual hierarchy is managed through **ambient shadows** and tonal layering. 

- **Surface Levels:** The primary background is White (#FFFFFF). Secondary content areas (like search bars or sidebars) use Light Grey (#F5F5F5) without borders to create depth.
- **Shadow Character:** Shadows are extremely soft and diffused, using a low-opacity Deep Blue tint (e.g., `rgba(0, 53, 128, 0.08)`) rather than pure black. This maintains the "clean" look while providing enough lift for cards and modals.
- **Interactions:** On hover, cards should transition from a subtle shadow to a slightly more pronounced one to provide tactile feedback.

## Shapes

The shape language is "Rounded," striking a balance between the sharp corners of traditional corporate design and the overly bubbly nature of social apps. 

- **Standard Radius (8px):** Applied to buttons, input fields, and small cards. 
- **Large Radius (16px):** Applied to major surface containers and feature cards.
- **Pill (100px):** Used exclusively for category tags or search pills to differentiate them from actionable buttons.

## Components

- **Buttons:** Primary buttons use the Vibrant Orange (#FF5722) with white text and 8px corners. Secondary buttons use a Deep Blue outline or a ghost style with blue text.
- **Cards:** Clean structures with a 1px Light Grey border or a very soft ambient shadow. Images within cards should have a top-only 16px radius to match the container.
- **Input Fields:** Minimalist design with a 1px #E0E0E0 border. On focus, the border transitions to Deep Blue (#003580) with a subtle 2px outer glow.
- **Chips/Filters:** Pill-shaped with a light grey background and dark grey text. The active state flips to Deep Blue with white text.
- **Search Bar:** A prominent component featuring a "floating" container style with a more pronounced shadow to signify its importance as the primary entry point.
- **Travel Specifics:** Custom components include "Price Tags" with bold typography, "Rating Badges" with a star icon, and "Progress Indicators" for multi-step booking flows.