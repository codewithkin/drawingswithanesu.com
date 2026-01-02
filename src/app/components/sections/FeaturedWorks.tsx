"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useScrollStagger } from "@/hooks/useScrollAnimations";

// Real artwork data from Anesu's portfolio
const featuredArtworks = [
    {
        id: 1,
        title: "Mother & Child",
        subtitle: "The bond between the two",
        medium: "Charcoal and pastel",
        size: "64 × 45 cm",
        image: "/images/artworks/mother-and-child-zebra-potrait.jpeg",
        description:
            "A zebra mother and foal representing the journey of yearning for a mother's love.",
    },
    {
        id: 2,
        title: "His Majesty",
        subtitle: "The King within",
        medium: "Charcoal",
        size: "91 × 64 cm",
        image: "/images/artworks/lion-potraut-single-male.jpeg",
        description:
            "A symbol of majesty and power. A reminder that you are the King of your Castle.",
    },
    {
        id: 3,
        title: "Window to Your Soul",
        subtitle: "Eyes that tell stories",
        medium: "Charcoal and pastel",
        size: "91 × 64 cm",
        image: "/images/artworks/animal-eyes-potrait.jpeg",
        description:
            "A mirror for people to look within and realise the power inside them.",
    },
    {
        id: 4,
        title: "Polarity",
        subtitle: "Yin and Yang",
        medium: "Charcoal",
        size: "91 × 64 cm",
        image: "/images/artworks/polarity-high-quality-bears-potrait.jpeg",
        description:
            "The most intricate drawing. A battlefield between two poles, positive and negative.",
    },
    {
        id: 5,
        title: "Motherland",
        subtitle: "Africa in her glory",
        medium: "Charcoal and pastel",
        size: "60 × 61 cm",
        image: "/images/artworks/africa-in-the-shape-of-african-potraits.jpeg",
        description:
            "Africa shaped by her wildlife. Victoria Falls, sunsets and harmonious nature.",
    },
    {
        id: 6,
        title: "Stability",
        subtitle: "Lazy Gaze",
        medium: "Charcoal and pastel",
        size: "60 × 61 cm",
        image: "/images/artworks/lazy-gaze-cheetah.jpeg",
        description:
            "A cheetah at rest — a reminder that taking a break is vital for progress.",
    },
];

export default function FeaturedWorks() {
    const ref = useScrollStagger();

    return (
        <section
            id="featured-works"
            className="py-24 lg:py-32"
            style={{ backgroundColor: "var(--cream)" }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-h2"
                        style={{ color: "var(--charcoal)" }}
                    >
                        Gallery
                    </h2>
                </div>

                {/* Artwork Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" ref={ref}>
                    {featuredArtworks.map((artwork) => (
                        <article
                            key={artwork.id}
                            className="group cursor-pointer"
                            data-scroll-item
                        >
                            {/* Image Container */}
                            <div
                                className="relative aspect-[4/5] overflow-hidden mb-4 shadow-art transition-all duration-500 group-hover:shadow-art-hover group-hover:-translate-y-1"
                                style={{ backgroundColor: "var(--sand)" }}
                            >
                                <Image
                                    src={artwork.image}
                                    alt={artwork.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />

                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center"
                                    style={{
                                        backgroundColor:
                                            "rgba(26, 26, 26, 0.75)",
                                    }}
                                >
                                    <p
                                        className="text-small mb-2"
                                        style={{ color: "var(--sand)" }}
                                    >
                                        {artwork.subtitle}
                                    </p>
                                    <p
                                        className="text-body leading-relaxed"
                                        style={{ color: "var(--cream)" }}
                                    >
                                        {artwork.description}
                                    </p>
                                </div>
                            </div>

                            {/* Artwork Info */}
                            <h3
                                className="text-h3"
                                style={{ color: "var(--charcoal)" }}
                            >
                                {artwork.title}
                            </h3>
                            <p
                                className="text-small mt-1"
                                style={{ color: "var(--sienna)" }}
                            >
                                {artwork.medium} · {artwork.size}
                            </p>
                        </article>
                    ))}
                </div>

                {/* View Gallery Link */}
                <div className="text-center mt-16">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center gap-2 text-body font-medium transition-colors duration-300 hover:gap-3"
                        style={{ color: "var(--charcoal)" }}
                    >
                        View Full Gallery
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
