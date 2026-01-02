import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9f7" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drawingswithanesu.com"),

  title: {
    default: "Drawings With Anesu | Wildlife Art & Memory",
    template: "%s | Drawings With Anesu",
  },
  description:
    "Original wildlife artwork by Anesu Ndangariro — 'With us, Remembrance.' Animals drawn in pairs to reflect the mother-child bond, with deep focus on the eyes, the window to the soul where memory, emotion, and connection live.",

  keywords: [
    "Anesu Ndangariro",
    "wildlife art",
    "animal drawings",
    "African artist",
    "Zimbabwe artist",
    "Ubuntu art",
    "mother child bond",
    "memorial art",
    "wildlife conservation",
    "pencil drawings",
    "graphite art",
    "animal portraits",
    "emotional art",
    "healing through art",
    "paired animals",
    "animal eyes",
    "conservation artist",
  ],

  authors: [{ name: "Anesu Ndangariro", url: "https://drawingswithanesu.com" }],
  creator: "Anesu Ndangariro",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drawingswithanesu.com",
    siteName: "Drawings With Anesu",
    title: "Drawings With Anesu | Wildlife Art & Memory",
    description:
      "Art became the bridge between a son and his mother. Through wildlife drawings exploring Ubuntu and the mother-child bond, grief transforms into beauty and hope.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drawings With Anesu - Wildlife artwork featuring paired animals with soulful eyes by Anesu Ndangariro",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Drawings With Anesu | Wildlife Art & Memory",
    description:
      "Wildlife art exploring memory, Ubuntu, and the mother-child bond. Each drawing speaks to anyone who has lost someone too soon.",
    images: ["/og-image.jpg"],
    creator: "@drawingswithanesu",
  },

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

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  category: "art",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anesu Ndangariro",
  alternateName: "Drawings With Anesu",
  description:
    "Wildlife artist exploring themes of memory, Ubuntu, and the mother-child bond. Art became the bridge between a son and his mother.",
  url: "https://drawingswithanesu.com",
  image: "https://drawingswithanesu.com/anesu-portrait.jpg",
  sameAs: [
    "https://instagram.com/drawingswithanesu",
    "https://twitter.com/drawingswithanesu",
  ],
  jobTitle: "Wildlife Artist",
  knowsAbout: [
    "Wildlife Art",
    "Pencil Drawing",
    "Animal Portraits",
    "Conservation Art",
    "Ubuntu Philosophy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
