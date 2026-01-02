// UbuntuSection: explains the philosophical context behind the work
export default function UbuntuSection() {
    return (
        <section
            id="ubuntu"
            className="py-24 lg:py-32"
            style={{ backgroundColor: "var(--graphite)" }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="order-2 lg:order-1">
                        <div
                            className="relative aspect-[3/4] overflow-hidden shadow-art"
                            style={{ backgroundColor: "var(--charcoal)" }}
                        >
                            {/* Merged animals artwork placeholder */}
                            <div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ color: "var(--sand)" }}
                            >
                                <span className="text-caption">
                                    Merged Animals Artwork
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <h2
                            className="text-caption"
                            style={{ color: "var(--ochre)" }}
                        >
                            Philosophy
                        </h2>

                        <blockquote>
                            <p
                                className="text-h1 leading-tight"
                                style={{ color: "var(--cream)" }}
                            >
                                "I am because
                                <br />
                                we are"
                            </p>
                            <footer
                                className="mt-4 text-body italic"
                                style={{ color: "var(--ochre)" }}
                            >
                                — Ubuntu
                            </footer>
                        </blockquote>

                        <div className="space-y-6">
                            <p
                                className="text-body-lg"
                                style={{ color: "var(--sand)" }}
                            >
                                Through my work I explore Ubuntu, the philosophy
                                of interconnectedness. I merge animals to show
                                how we are all connected — to each other, to
                                nature, to those we have lost.
                            </p>

                            <p
                                className="text-body-lg"
                                style={{ color: "var(--sand)" }}
                            >
                                My drawings speak to anyone who has lost someone
                                too soon, reminding us that love continues, and
                                that grief can transform into beauty and hope.
                            </p>
                        </div>

                        {/* Divider */}
                        <div
                            className="w-24 h-px"
                            style={{ backgroundColor: "var(--charcoal)" }}
                        />

                        <p
                            className="text-small"
                            style={{ color: "var(--sage)" }}
                        >
                            Wildlife conservation through art
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
