# GSAP Animation Strategy

## Philosophy

The animations should feel **organic and natural** — like watching an animal move, or a memory slowly surfacing. Nothing jarring. Everything intentional. The scroll experience should feel like turning pages in a visual story.

---

## Dependencies

```bash
npm install gsap @gsap/react
```

---

## Core Setup

### GSAP Registration (lib/animations.ts)

```tsx
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

### Custom Hook (hooks/useGSAP.ts)

```tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations";

export function useGSAP(callback: (gsap: typeof gsap) => void, deps: any[] = []) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const ctx = gsap.context(() => {
      callback(gsap);
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, deps);
}
```

---

## Animation Patterns

### 1. Fade Up on Scroll (Most Common)

Natural, gentle reveal as content enters viewport.

```tsx
// components/animations/ScrollReveal.tsx
"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@/hooks/useGSAP";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 1,
  y = 60,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP((gsap) => {
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: "power3.out", // Smooth, natural deceleration
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%", // Triggers when top of element hits 85% of viewport
          toggleActions: "play none none none",
        },
      }
    );
  });

  return <div ref={ref}>{children}</div>;
}
```

### 2. Staggered Children

For galleries and lists — items appear one after another.

```tsx
// components/animations/StaggerReveal.tsx
"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@/hooks/useGSAP";

interface StaggerRevealProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
}

export function StaggerReveal({
  children,
  stagger = 0.1,
  className,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP((gsap) => {
    const items = ref.current?.children;
    if (!items) return;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
```

### 3. Parallax Image

Subtle depth effect — images move slower than scroll.

```tsx
// components/animations/ParallaxImage.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@/hooks/useGSAP";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0.5 = half speed, 1 = normal
}

export function ParallaxImage({ src, alt, speed = 0.5 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP((gsap) => {
    gsap.to(imageRef.current, {
      yPercent: -20 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true, // Smoothly ties animation to scroll
      },
    });
  });

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={imageRef} className="scale-110">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}
```

### 4. Text Reveal (Word by Word)

For impactful statements and quotes.

```tsx
// components/animations/TextReveal.tsx
"use client";

import { useRef } from "react";
import { useGSAP } from "@/hooks/useGSAP";

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({ text, className, tag: Tag = "p" }: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP((gsap) => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
        rotateX: 45,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  });

  const words = text.split(" ");

  return (
    <Tag ref={ref as any} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word inline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </Tag>
  );
}
```

### 5. Scroll-Linked Progress

For horizontal galleries or timeline effects.

```tsx
// components/animations/HorizontalScroll.tsx
"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@/hooks/useGSAP";

interface HorizontalScrollProps {
  children: ReactNode;
}

export function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP((gsap) => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const scrollWidth = track.scrollWidth - container.offsetWidth;

    gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1, // Smooth 1-second lag behind scroll
        pin: true,
        anticipatePin: 1,
      },
    });
  });

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex">
        {children}
      </div>
    </div>
  );
}
```

---

## Page-Specific Animations

### Homepage Hero

```tsx
// Layered entrance: background fades, then image scales, then text reveals
useGSAP((gsap) => {
  const tl = gsap.timeline();

  tl.fromTo(
    ".hero-bg",
    { scale: 1.1, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
  )
    .fromTo(
      ".hero-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5" // Overlap with previous
    )
    .fromTo(
      ".hero-subtitle",
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      "-=0.3"
    );
});
```

### Gallery Grid

```tsx
// Masonry-style reveal with random delays
gsap.fromTo(
  ".gallery-item",
  {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: {
      each: 0.1,
      from: "random", // Random order for organic feel
    },
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-grid",
      start: "top 70%",
    },
  }
);
```

### Eye Focus Effect

Special animation when hovering artwork — subtle zoom on eyes.

```tsx
// On artwork hover
const handleMouseEnter = () => {
  gsap.to(".artwork-eyes", {
    scale: 1.05,
    duration: 0.4,
    ease: "power2.out",
  });
};
```

---

## Scroll Smoothness Guidelines

### DO ✓

- Use `ease: "power2.out"` or `"power3.out"` for natural deceleration
- Set `scrub: true` or `scrub: 1` for scroll-linked animations
- Keep durations between 0.6 - 1.2 seconds
- Use `start: "top 80%"` to trigger before element is fully visible
- Add `will-change: transform` to animated elements in CSS

### DON'T ✗

- Avoid `ease: "linear"` (feels mechanical)
- Don't use `bounce` or `elastic` eases (too playful for this aesthetic)
- Don't animate too many properties at once (stick to opacity, transform)
- Avoid animations that fight against scroll direction
- Don't make animations too long (over 2 seconds feels sluggish)

---

## Performance Tips

1. **Use transforms only** — `x`, `y`, `scale`, `rotate` are GPU-accelerated
2. **Avoid animating `width`, `height`, `margin`, `padding`**
3. **Use `will-change` sparingly** — only on elements about to animate
4. **Clean up ScrollTriggers** on unmount
5. **Test on mobile** — reduce motion if needed

```tsx
// Respect user's motion preferences
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  // Disable or simplify animations
  gsap.set(".animated-element", { opacity: 1, y: 0 });
}
```
