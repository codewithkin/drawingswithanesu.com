"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollAnimations";

/**
 * Hero section — introduces the site and artist
 */
export default function Hero() {
    const ref = useScrollReveal();
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: "var(--cream)" }}
            ref={ref}
        >
            {/* Background Image Placeholder */}
            <div
                className="hero-bg absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/hero-artwork.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.15,
                }}
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to bottom, transparent 0%, var(--cream) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
                {/* Artist Portrait */}
                <div className="hero-portrait mb-8 flex justify-center">
                    <div
                        className="relative w-44 h-44 rounded-full overflow-hidden shadow-art"
                        style={{ border: "3px solid var(--sand)" }}
                    >
                        <Image
                            src="/images/anesu.jpeg"
                            alt="Portrait of Anesu Ndangariro"
                            width={176}
                            height={176}
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <h1
                    className="hero-title text-display tracking-tight"
                    style={{ color: "var(--charcoal)" }}
                >
                    Drawings With Anesu
                </h1>

                <p
                    className="hero-subtitle mt-6 text-h3 font-light italic"
                    style={{ color: "var(--sienna)" }}
                >
                    "With us, Remembrance"
                </p>

                <p
                    className="mt-8 text-body-lg max-w-2xl mx-auto"
                    style={{ color: "var(--charcoal)", opacity: 0.8 }}
                >
                    Wildlife artwork exploring memory, Ubuntu, and the
                    mother-child bond, each drawing captures the soul through
                    the eyes.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <div
                    className="flex flex-col items-center gap-2 animate-bounce-gentle"
                    style={{ color: "var(--charcoal)", opacity: 0.5 }}
                >
                    <span className="text-caption">Scroll</span>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </div>
        </section>
    );
}
