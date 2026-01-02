# SEO & Metadata Strategy

## Root Layout Metadata (layout.tsx)

The `layout.tsx` file is crucial for SEO. Here's the complete metadata configuration:

```tsx
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  // Base URL for resolving relative URLs
  metadataBase: new URL("https://drawingswithanesu.com"),

  // Primary metadata
  title: {
    default: "Drawings With Anesu | Wildlife Art & Memory",
    template: "%s | Drawings With Anesu",
  },
  description:
    "Original wildlife artwork by Anesu Ndangariro exploring themes of memory, Ubuntu, and the mother-child bond. Each drawing captures the soul through the eyes — where emotion and connection live.",

  // Keywords (still useful for some search engines)
  keywords: [
    "Anesu Ndangariro",
    "wildlife art",
    "animal drawings",
    "African artist",
    "Ubuntu art",
    "mother child bond",
    "memorial art",
    "wildlife conservation",
    "pencil drawings",
    "animal portraits",
    "emotional art",
    "healing through art",
  ],

  // Author information
  authors: [{ name: "Anesu Ndangariro", url: "https://drawingswithanesu.com" }],
  creator: "Anesu Ndangariro",

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drawingswithanesu.com",
    siteName: "Drawings With Anesu",
    title: "Drawings With Anesu | Wildlife Art & Memory",
    description:
      "Original wildlife artwork exploring memory, Ubuntu, and connection. Art that speaks to anyone who has lost someone, reminding us that love continues.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drawings With Anesu - Wildlife artwork featuring paired animals with soulful eyes",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Drawings With Anesu | Wildlife Art & Memory",
    description:
      "Original wildlife artwork by Anesu Ndangariro. Art about memory, healing, and belonging.",
    images: ["/og-image.jpg"],
    creator: "@drawingswithanesu", // Update with actual handle
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Verification (add actual values when available)
  verification: {
    google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },

  // Category
  category: "art",
};
```

---

## Page-Specific Metadata

### Homepage (page.tsx)
```tsx
// Uses default from layout - no override needed
```

### About Page
```tsx
export const metadata: Metadata = {
  title: "About Anesu",
  description:
    "Learn about Anesu Ndangariro — 'With us, Remembrance.' Discover how art became the bridge between a son and his mother, and how grief transforms into beauty and hope.",
  openGraph: {
    title: "About Anesu Ndangariro",
    description: "The story behind the art. Memory, healing, and belonging.",
  },
};
```

### Gallery Page
```tsx
export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Anesu's wildlife artwork collection. Animals in pairs reflecting the mother-child bond, with deep focus on eyes — windows to the soul.",
  openGraph: {
    title: "Art Gallery | Drawings With Anesu",
    description: "Original wildlife drawings exploring memory and connection.",
  },
};
```

### Commissions Page
```tsx
export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Commission a custom wildlife drawing from Anesu Ndangariro. Personalized artwork that captures the soul and creates lasting memories.",
  openGraph: {
    title: "Commission Artwork | Drawings With Anesu",
    description: "Request a custom wildlife drawing that tells your story.",
  },
};
```

### Contact Page
```tsx
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anesu Ndangariro for commissions, exhibitions, or collaborations. Let's create something meaningful together.",
};
```

---

## Structured Data (JSON-LD)

Add to `layout.tsx` or create a separate component:

```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anesu Ndangariro",
  alternateName: "Drawings With Anesu",
  description: "Wildlife artist exploring themes of memory, Ubuntu, and the mother-child bond",
  url: "https://drawingswithanesu.com",
  image: "https://drawingswithanesu.com/anesu-portrait.jpg",
  sameAs: [
    "https://instagram.com/drawingswithanesu",
    "https://twitter.com/drawingswithanesu",
    // Add other social profiles
  ],
  jobTitle: "Wildlife Artist",
  knowsAbout: ["Wildlife Art", "Pencil Drawing", "Animal Portraits", "Conservation Art"],
};

// In layout.tsx body:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

---

## Required Assets Checklist

- [ ] `/public/og-image.jpg` (1200x630px) - Primary social share image
- [ ] `/public/favicon.ico` - Standard favicon
- [ ] `/public/icon.svg` - Scalable icon
- [ ] `/public/apple-touch-icon.png` (180x180px) - iOS icon
- [ ] `/public/manifest.json` - PWA manifest
- [ ] `/public/anesu-portrait.jpg` - For structured data

---

## Performance Considerations

1. **Image Optimization** - Use Next.js `<Image>` component
2. **Font Loading** - Use `next/font` for optimal loading
3. **Core Web Vitals** - Monitor LCP, FID, CLS
4. **Preconnect** - Add for external resources (fonts, analytics)
