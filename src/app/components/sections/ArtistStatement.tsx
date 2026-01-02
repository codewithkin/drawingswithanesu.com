import Image from "next/image";

/**
 * ArtistStatement — highlights the artist's motivation and style
 */
export default function ArtistStatement() {
    return (
        <section
            id="artist-statement"
            className="py-24 lg:py-32"
            style={{ backgroundColor: "var(--warm-white)" }}
        >
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
                {/* Main Statement */}
                <blockquote className="space-y-6">
                    <p
                        className="text-h2 leading-relaxed"
                        style={{ color: "var(--charcoal)" }}
                    >
                        I draw animals in pairs
                        <br />
                        <span className="italic">
                            to reflect the mother-child bond
                        </span>
                        <br />I longed for.
                    </p>

                    <p
                        className="text-h3 font-light"
                        style={{ color: "var(--sienna)" }}
                    >
                        I focus deeply on the eyes,
                        <br />
                        because they are the window to the soul.
                    </p>
                </blockquote>

                {/* Divider */}
                <div
                    className="w-24 h-px mx-auto my-12"
                    style={{ backgroundColor: "var(--sand)" }}
                />

                {/* Polarity Bears Portrait */}
                <div className="mt-12 flex justify-center">
                    <div
                        className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-art"
                        style={{ border: "3px solid var(--sand)" }}
                    >
                        <Image
                            src="/images/artworks/polarity-high-quality-bears-potrait.jpeg"
                            alt="Polarity - Two bears in conflict, representing yin and yang"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 256px, 320px"
                        />
                    </div>
                </div>

                {/* Artist Name */}
                <p
                    className="mt-6 text-h3"
                    style={{ color: "var(--charcoal)" }}
                >
                    Anesu Ndangariro
                </p>
                <p
                    className="text-small italic"
                    style={{ color: "var(--sienna)" }}
                >
                    "With us, Remembrance"
                </p>
            </div>
        </section>
    );
}
