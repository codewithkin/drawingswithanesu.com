# Design System

## Philosophy

The design should feel like Anesu's artwork itself — **soulful, warm, and intimate**. Clean but not sterile. Modern but not cold. Every element should support the emotional weight of the work.

---

## Color Palette

### Primary Colors

```css
:root {
  /* Warm neutrals - like aged paper */
  --cream: #faf9f7;
  --warm-white: #f5f3ef;
  --sand: #e8e4dc;
  
  /* Rich darks - like graphite and charcoal */
  --charcoal: #2a2a2a;
  --graphite: #1a1a1a;
  --soft-black: #0d0d0d;
  
  /* Accent - subtle earth tones */
  --sienna: #8b5a3c;
  --ochre: #c9a959;
  --sage: #7d8471;
  
  /* Functional */
  --error: #c44536;
  --success: #4a7c59;
}
```

### Tailwind Config Addition

```js
// tailwind.config.ts
colors: {
  cream: '#faf9f7',
  sand: '#e8e4dc',
  charcoal: '#2a2a2a',
  graphite: '#1a1a1a',
  sienna: '#8b5a3c',
  ochre: '#c9a959',
  sage: '#7d8471',
}
```

### Usage Guidelines

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | cream | graphite |
| Text Primary | charcoal | cream |
| Text Secondary | sienna | sand |
| Accents | ochre | ochre |
| Borders | sand | charcoal |

---

## Typography

### Font Stack

```tsx
// app/layout.tsx
import { Cormorant_Garamond, Inter } from "next/font/google";

// Elegant serif for headings - evokes classical art
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

// Clean sans for body - readable, modern
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### Type Scale

```css
/* Tailwind classes with custom fonts */

/* Display - Hero titles */
.text-display {
  font-family: var(--font-cormorant);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Heading 1 */
.text-h1 {
  font-family: var(--font-cormorant);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 400;
  line-height: 1.2;
}

/* Heading 2 */
.text-h2 {
  font-family: var(--font-cormorant);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.3;
}

/* Heading 3 */
.text-h3 {
  font-family: var(--font-cormorant);
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 500;
  line-height: 1.4;
}

/* Body Large */
.text-body-lg {
  font-family: var(--font-inter);
  font-size: 1.125rem;
  line-height: 1.7;
}

/* Body */
.text-body {
  font-family: var(--font-inter);
  font-size: 1rem;
  line-height: 1.6;
}

/* Small */
.text-small {
  font-family: var(--font-inter);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Caption */
.text-caption {
  font-family: var(--font-inter);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
```

---

## Spacing System

Based on 8px grid for consistency.

```js
// tailwind.config.ts
spacing: {
  '18': '4.5rem',   // 72px
  '22': '5.5rem',   // 88px
  '30': '7.5rem',   // 120px
  '34': '8.5rem',   // 136px
}
```

### Section Spacing

| Element | Mobile | Desktop |
|---------|--------|---------|
| Section padding (vertical) | 64px | 120px |
| Section padding (horizontal) | 24px | 80px |
| Between heading and content | 32px | 48px |
| Between paragraphs | 24px | 32px |
| Grid gap | 16px | 32px |

---

## Components

### Buttons

```tsx
// Primary Button
<Button className="
  bg-charcoal text-cream 
  px-8 py-4 
  font-medium tracking-wide
  transition-all duration-300
  hover:bg-graphite hover:scale-[1.02]
  focus:ring-2 focus:ring-ochre focus:ring-offset-2
">
  Commission a Drawing
</Button>

// Secondary Button
<Button variant="outline" className="
  border-2 border-charcoal text-charcoal
  px-8 py-4
  font-medium tracking-wide
  transition-all duration-300
  hover:bg-charcoal hover:text-cream
">
  View Gallery
</Button>

// Ghost Button (for navigation)
<Button variant="ghost" className="
  text-charcoal
  font-medium
  transition-colors duration-200
  hover:text-sienna
">
  About
</Button>
```

### Cards (for artwork)

```tsx
<Card className="
  group
  bg-cream border-none
  overflow-hidden
  transition-all duration-500
  hover:shadow-2xl hover:-translate-y-1
">
  <div className="relative aspect-[4/5] overflow-hidden">
    <Image
      src={artwork.src}
      alt={artwork.alt}
      fill
      className="
        object-cover
        transition-transform duration-700
        group-hover:scale-105
      "
    />
  </div>
  <CardContent className="p-6">
    <h3 className="font-cormorant text-xl">{artwork.title}</h3>
    <p className="text-sienna text-sm mt-1">{artwork.medium}</p>
  </CardContent>
</Card>
```

### Input Fields

```tsx
<Input className="
  bg-transparent
  border-0 border-b-2 border-sand
  rounded-none
  px-0 py-3
  text-charcoal
  placeholder:text-sand
  focus:border-charcoal focus:ring-0
  transition-colors duration-300
" />
```

---

## Effects & Shadows

```css
/* Subtle shadow for cards */
.shadow-art {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

/* Elevated shadow on hover */
.shadow-art-hover {
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Soft glow for CTAs */
.glow-ochre {
  box-shadow: 0 0 40px rgba(201, 169, 89, 0.3);
}
```

---

## Images

### Treatment

- **Artwork images:** Full color, high resolution, subtle shadow frame
- **Background images:** Slightly desaturated, lower contrast
- **Portraits:** Warm tones, natural lighting feel

### Aspect Ratios

| Use Case | Ratio | Class |
|----------|-------|-------|
| Gallery thumbnails | 4:5 | `aspect-[4/5]` |
| Featured works | 3:4 | `aspect-[3/4]` |
| Hero background | 16:9 | `aspect-video` |
| Square thumbnails | 1:1 | `aspect-square` |

---

## Motion Tokens

Consistent animation values across the site.

```css
:root {
  /* Durations */
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
  
  /* Easings */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

---

## Iconography

Use simple, line-based icons that complement the artwork aesthetic.

**Recommended:** Lucide Icons (already works well with shadcn/ui)

```tsx
import { ArrowRight, Menu, X, Instagram, Mail } from "lucide-react";

// Style guidelines
<ArrowRight className="w-5 h-5 stroke-[1.5]" />
```

---

## Grid System

### Container

```tsx
<div className="
  max-w-7xl mx-auto
  px-6 sm:px-8 lg:px-16
">
  {/* Content */}
</div>
```

### Gallery Grid

```tsx
<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-3 
  gap-6 lg:gap-8
">
  {/* Gallery items */}
</div>
```

### Two-Column Layout

```tsx
<div className="
  grid 
  grid-cols-1 lg:grid-cols-2 
  gap-12 lg:gap-20
  items-center
">
  {/* Left: Image */}
  {/* Right: Text */}
</div>
```

---

## Dark Mode (Optional)

If implementing dark mode:

```css
.dark {
  --background: var(--graphite);
  --foreground: var(--cream);
  --muted: var(--charcoal);
  --accent: var(--ochre);
}
```

Toggle with system preference or manual switch.

---

## CSS Variables Summary

```css
/* Add to globals.css */
@layer base {
  :root {
    /* Colors */
    --color-cream: 250 249 247;
    --color-charcoal: 42 42 42;
    --color-graphite: 26 26 26;
    --color-sienna: 139 90 60;
    --color-ochre: 201 169 89;
    --color-sand: 232 228 220;
    
    /* Typography */
    --font-display: var(--font-cormorant);
    --font-body: var(--font-inter);
    
    /* Spacing */
    --section-padding-y: clamp(4rem, 10vw, 7.5rem);
    --section-padding-x: clamp(1.5rem, 5vw, 5rem);
    
    /* Motion */
    --transition-default: 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
}
```
