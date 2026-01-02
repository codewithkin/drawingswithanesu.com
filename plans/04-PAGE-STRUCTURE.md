# Page Structure & Layout

## Global Layout

### Header/Navigation

Minimal, floating header that transforms on scroll.

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]           Gallery   About   Commissions   Contact   │
└─────────────────────────────────────────────────────────────┘
```

**Behavior:**
- Transparent at top of page
- Solid background + shadow on scroll
- Hamburger menu on mobile
- Smooth transition between states

### Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  DRAWINGS WITH ANESU                                        │
│                                                             │
│  "I am because we are" — Ubuntu                             │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  Gallery    About    Commissions    Contact                 │
│                                                             │
│  [Instagram]  [Twitter]  [Email]                            │
│                                                             │
│  © 2026 Anesu Ndangariro. All artworks protected.           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Homepage (page.tsx)

### Section 1: Hero

Full viewport, immersive introduction.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    [Full-bleed Background                   │
│                     Artwork Image]                          │
│                                                             │
│          DRAWINGS WITH ANESU                                │
│                                                             │
│          "With us, Remembrance"                             │
│                                                             │
│          [Scroll indicator ↓]                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Background image: fade in with subtle scale (1.1 → 1)
- Title: slide up with fade
- Subtitle: fade in after title
- Scroll indicator: gentle bounce loop

---

### Section 2: Artist Statement

Centered text, powerful introduction.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              I draw animals in pairs                        │
│         to reflect the mother-child bond                    │
│                  I longed for.                              │
│                                                             │
│           I focus deeply on the eyes,                       │
│       because they are the window to the soul.              │
│                                                             │
│                   [Portrait of Anesu]                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Text reveals word by word on scroll
- Portrait fades in with parallax

---

### Section 3: Featured Works

Curated selection of best pieces.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  FEATURED WORKS                                             │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                      │
│  │         │  │         │  │         │                      │
│  │ Artwork │  │ Artwork │  │ Artwork │                      │
│  │   1     │  │   2     │  │   3     │                      │
│  │         │  │         │  │         │                      │
│  └─────────┘  └─────────┘  └─────────┘                      │
│   "Title"      "Title"      "Title"                         │
│                                                             │
│              [View Full Gallery →]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:**
- Staggered reveal (left to right)
- Hover: subtle lift + shadow
- Click: opens modal with full details

---

### Section 4: Ubuntu Philosophy

Visual representation of interconnectedness.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ┌────────────────┐    "I AM BECAUSE WE ARE"                │
│  │                │                                         │
│  │   [Merged      │    Through my work I explore Ubuntu,    │
│  │    Animals     │    the philosophy of                    │
│  │    Artwork]    │    interconnectedness.                  │
│  │                │                                         │
│  └────────────────┘    My drawings speak to anyone who      │
│                        has lost someone too soon.           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Layout:** Two-column, image left, text right (stacked on mobile)
**Animation:** Parallax image, text slides in from right

---

### Section 5: Call to Action

Commission prompt.

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         Transform your memories into lasting art            │
│                                                             │
│             [Commission a Drawing]                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Animation:** Fade in on scroll, button has subtle hover glow

---

## Gallery Page

### Layout: Masonry Grid

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  GALLERY                                                    │
│                                                             │
│  [All] [Pairs] [Merged] [Portraits] [Conservation]          │
│                                                             │
│  ┌───────────┐  ┌─────┐  ┌────────┐                         │
│  │           │  │     │  │        │                         │
│  │           │  │     │  │        │                         │
│  │           │  └─────┘  │        │                         │
│  │           │  ┌─────┐  └────────┘                         │
│  └───────────┘  │     │  ┌────────────────┐                 │
│  ┌───────┐      │     │  │                │                 │
│  │       │      │     │  │                │                 │
│  │       │      └─────┘  └────────────────┘                 │
│  └───────┘                                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Features:**
- Filter by category/theme
- Infinite scroll or pagination
- Click opens detailed modal

### Artwork Modal

```
┌─────────────────────────────────────────────────────────────┐
│                                                   [×]       │
│                                                             │
│  ┌─────────────────────────┐  Title: "Mother & Child"       │
│  │                         │                                │
│  │                         │  Medium: Graphite on paper     │
│  │      [High-res          │  Size: 18" × 24"               │
│  │       Artwork]          │  Year: 2025                    │
│  │                         │                                │
│  │                         │  "This piece explores..."      │
│  │                         │                                │
│  └─────────────────────────┘  [Inquire About This Piece]    │
│                                                             │
│  ← Previous                              Next →             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## About Page

### Section 1: Hero

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ABOUT THE ARTIST                                           │
│                                                             │
│  ┌────────────────┐                                         │
│  │                │    Anesu Ndangariro                     │
│  │   [Portrait]   │    "With us, Remembrance"               │
│  │                │                                         │
│  └────────────────┘                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 2: Story

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  THE STORY                                                  │
│                                                             │
│  My mother left when I was two, and I later discovered      │
│  she also drew. My art became the bridge between us.        │
│                                                             │
│  [Artwork showing mother-child pair]                        │
│                                                             │
│  I often draw animals in pairs to reflect the               │
│  mother-child bond I longed for...                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Section 3: Philosophy

Ubuntu, conservation, healing themes.

### Section 4: Process

How Anesu creates his artwork (photos/video of process).

---

## Commissions Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  COMMISSION A DRAWING                                       │
│                                                             │
│  Transform your memories into lasting art                   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  PACKAGES:                                                  │
│                                                             │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐                │
│  │ PORTRAIT  │  │   PAIR    │  │  MERGED   │                │
│  │           │  │           │  │           │                │
│  │ Single    │  │ Two       │  │ Custom    │                │
│  │ animal    │  │ animals   │  │ merged    │                │
│  │           │  │           │  │ concept   │                │
│  │ From $XXX │  │ From $XXX │  │ From $XXX │                │
│  └───────────┘  └───────────┘  └───────────┘                │
│                                                             │
│  PROCESS:                                                   │
│  1. Consultation → 2. Sketch → 3. Creation → 4. Delivery    │
│                                                             │
│  [Request Commission Form]                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Contact Page

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  GET IN TOUCH                                               │
│                                                             │
│  ┌─────────────────────┐    CONNECT                         │
│  │                     │                                    │
│  │  Name: [________]   │    Email: hello@drawingswithanesu  │
│  │                     │                                    │
│  │  Email: [________]  │    Instagram: @drawingswithanesu   │
│  │                     │                                    │
│  │  Subject: [______]  │    Location: [City, Country]       │
│  │                     │                                    │
│  │  Message:           │                                    │
│  │  [_______________]  │                                    │
│  │  [_______________]  │                                    │
│  │                     │                                    │
│  │  [Send Message]     │                                    │
│  │                     │                                    │
│  └─────────────────────┘                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked sections |
| Tablet | 640px - 1024px | Two-column where appropriate |
| Desktop | 1024px - 1440px | Full layouts as designed |
| Large | > 1440px | Max-width container, centered |

---

## Accessibility Considerations

- All images have descriptive `alt` text
- Proper heading hierarchy (h1 → h2 → h3)
- Focus states on interactive elements
- Color contrast meets WCAG AA
- Reduced motion option for animations
- Skip navigation link
- ARIA labels where needed
