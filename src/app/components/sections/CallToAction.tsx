import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section
            id="call-to-action"
            className="py-24 lg:py-32"
            style={{ backgroundColor: "var(--warm-white)" }}
        >
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
                {/* Decorative Line */}
                <div
                    className="w-16 h-px mx-auto mb-12"
                    style={{ backgroundColor: "var(--ochre)" }}
                />

                {/* Heading */}
                <h2
                    className="text-h1"
                    style={{ color: "var(--charcoal)" }}
                >
                    Transform your memories
                    <br />
                    into lasting art
                </h2>

                {/* Description */}
                <p
                    className="mt-6 text-body-lg max-w-xl mx-auto"
                    style={{ color: "var(--sienna)" }}
                >
                    Commission a personalized wildlife drawing that captures
                    your story, your connection, your remembrance.
                </p>

                {/* CTA Button */}
                <div className="mt-10">
                    <Button
                        asChild
                        className="px-8 py-6 text-body font-medium tracking-wide transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "var(--charcoal)",
                            color: "var(--cream)",
                        }}
                    >
                        <Link href="/commissions">Commission a Drawing</Link>
                    </Button>
                </div>

                {/* Secondary Link */}
                <p
                    className="mt-6 text-small"
                    style={{ color: "var(--charcoal)", opacity: 0.6 }}
                >
                    Starting from $200 •{" "}
                    <Link
                        href="/commissions"
                        className="underline hover:no-underline"
                    >
                        View pricing
                    </Link>
                </p>

                {/* Decorative Line */}
                <div
                    className="w-16 h-px mx-auto mt-12"
                    style={{ backgroundColor: "var(--ochre)" }}
                />
            </div>
        </section>
    );
}
