import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Sample data for featured artworks (placeholders)
const featuredArtworks = [
    {
        id: 1,
        title: "Mother & Child",
        medium: "Graphite on paper",
        placeholder: true,
    },
    {
        id: 2,
        title: "Ubuntu",
        medium: "Charcoal on paper",
        placeholder: true,
    },
    {
        id: 3,
        title: "Remembrance",
        medium: "Graphite on paper",
        placeholder: true,
    },
];

export default function FeaturedWorks() {
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
                        className="text-caption mb-4"
                        style={{ color: "var(--sienna)" }}
                    >
                        Featured Works
                    </h2>
                    <p
                        className="text-h2"
                        style={{ color: "var(--charcoal)" }}
                    >
                        Selected Pieces
                    </p>
                </div>

                {/* Artwork Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredArtworks.map((artwork) => (
                        <article
                            key={artwork.id}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div
                                className="relative aspect-[4/5] overflow-hidden mb-4 shadow-art transition-all duration-500 group-hover:shadow-art-hover group-hover:-translate-y-1"
                                style={{ backgroundColor: "var(--sand)" }}
                            >
                                {/* Placeholder for artwork image */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{ color: "var(--sienna)" }}
                                >
                                    <span className="text-caption">
                                        Artwork
                                    </span>
                                </div>

                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                                    style={{
                                        backgroundColor:
                                            "rgba(26, 26, 26, 0.4)",
                                    }}
                                >
                                    <span
                                        className="text-caption"
                                        style={{ color: "var(--cream)" }}
                                    >
                                        View
                                    </span>
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
                                {artwork.medium}
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
