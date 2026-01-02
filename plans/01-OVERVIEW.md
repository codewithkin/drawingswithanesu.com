# Drawings With Anesu - Project Overview

## About the Artist

**Anesu Ndangariro** — *"With us, Remembrance."*

My mother left when I was two, and I later discovered she also drew. My art became the bridge between us. I often draw animals in pairs to reflect the mother-child bond I longed for, and I focus deeply on the eyes, because they are the window to the soul — the place where memory, emotion, and connection live.

Through my work I merge animals, explore Ubuntu ("I am because we are"), and advocate for wildlife conservation. My drawings are not just about animals, but about memory, healing, and belonging. They speak to anyone who has lost someone too soon, reminding us that love continues, and that grief can transform into beauty and hope.

---

## Core Themes

| Theme | Expression |
|-------|------------|
| **Memory & Remembrance** | The name itself, the bridge to his mother |
| **Mother-Child Bond** | Animals drawn in pairs |
| **Eyes as Windows** | Deep focus on eyes in artwork |
| **Ubuntu Philosophy** | "I am because we are" — interconnectedness |
| **Wildlife Conservation** | Advocacy through art |
| **Healing & Hope** | Transforming grief into beauty |

---

## Project Goals

1. **Showcase Anesu's artwork** in a gallery that honors the emotional depth
2. **Tell his story** in a way that resonates with visitors
3. **Create an immersive experience** using thoughtful animations
4. **Enable commissions/sales** for his artwork
5. **Build community** around shared themes of memory and healing

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** GSAP (GreenSock) + ScrollTrigger
- **UI Components:** shadcn/ui
- **Linting:** Biome
- **Deployment:** Vercel

---

## File Structure (Planned)

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # Anesu's story
│   ├── gallery/
│   │   └── page.tsx        # Artwork gallery
│   ├── commissions/
│   │   └── page.tsx        # Commission information
│   └── contact/
│       └── page.tsx        # Contact form
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedWorks.tsx
│   │   ├── ArtistStatement.tsx
│   │   └── CallToAction.tsx
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   └── ArtworkModal.tsx
│   └── animations/
│       ├── ScrollReveal.tsx
│       ├── ParallaxImage.tsx
│       └── TextReveal.tsx
├── hooks/
│   ├── useGSAP.ts
│   └── useScrollTrigger.ts
└── lib/
    ├── utils.ts
    └── animations.ts
```

---

## Planning Documents

1. [01-OVERVIEW.md](./01-OVERVIEW.md) - This document
2. [02-SEO-METADATA.md](./02-SEO-METADATA.md) - SEO strategy for layout.tsx
3. [03-GSAP-ANIMATIONS.md](./03-GSAP-ANIMATIONS.md) - Animation implementation guide
4. [04-PAGE-STRUCTURE.md](./04-PAGE-STRUCTURE.md) - Detailed page layouts
5. [05-DESIGN-SYSTEM.md](./05-DESIGN-SYSTEM.md) - Colors, typography, spacing
