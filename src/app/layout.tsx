import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

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
    creator: "@anesumuungani7o",
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
    "https://www.instagram.com/drawings.with.anesu?igsh=MXI0bDc0c3E0aXp6dw==",
    "https://www.tiktok.com/@drawings.with.anesu?_r=1&_t=ZM-92je6qsoC0B",
    "https://x.com/anesumuungani7o",
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
        <meta name="apple-mobile-web-app-title" content="Drawing with Anesu" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased`}
      >
        <Navigation />
        <main style={{ paddingTop: "64px" }} className="lg:pt-20">
          {children}
        </main>
        <Footer />
        <Toaster richColors />
        <a
          href="https://wa.link/0jzzh2"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <img
            src="/icons/whatsapp.jpg"
            alt="WhatsApp"
            className="w-full h-full rounded-full"
          />
        </a>
      </body>
    </html>
  );
}
