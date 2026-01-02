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

                {/* Portrait Placeholder */}
                <div className="mt-12 flex justify-center">
                    <div
                        className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-art"
                        style={{ backgroundColor: "var(--sand)" }}
                    >
                        {/* Portrait image will go here */}
                        <div
                            className="absolute inset-0 flex items-center justify-center text-caption"
                            style={{ color: "var(--sienna)" }}
                        >
                            Portrait
                        </div>
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
