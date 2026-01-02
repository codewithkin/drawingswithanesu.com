"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect, useRef } from "react";

export default function NotFound() {
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Simple fade-in animation on mount
        if (imageRef.current) {
            imageRef.current.style.opacity = "0";
            imageRef.current.style.transform = "scale(0.95)";
            setTimeout(() => {
                if (imageRef.current) {
                    imageRef.current.style.transition =
                        "opacity 800ms ease-out, transform 800ms ease-out";
                    imageRef.current.style.opacity = "1";
                    imageRef.current.style.transform = "scale(1)";
                }
            }, 100);
        }

        if (textRef.current) {
            textRef.current.style.opacity = "0";
            textRef.current.style.transform = "translateY(20px)";
            setTimeout(() => {
                if (textRef.current) {
                    textRef.current.style.transition =
                        "opacity 600ms ease-out 300ms, transform 600ms ease-out 300ms";
                    textRef.current.style.opacity = "1";
                    textRef.current.style.transform = "translateY(0)";
                }
            }, 100);
        }
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
            style={{ backgroundColor: "var(--cream)" }}
        >
            {/* Logo */}
            <div ref={imageRef} className="mb-12">
                <Image
                    src="/logo.png"
                    alt="Drawings With Anesu"
                    width={120}
                    height={120}
                    className="opacity-60"
                    priority
                />
            </div>

            {/* Content */}
            <div
                ref={textRef}
                className="text-center max-w-2xl mx-auto space-y-6"
            >
                <h1
                    className="text-display"
                    style={{ color: "var(--charcoal)" }}
                >
                    404
                </h1>

                <h2 className="text-h2" style={{ color: "var(--sienna)" }}>
                    Page Not Found
                </h2>

                <p
                    className="text-body-lg max-w-md mx-auto"
                    style={{ color: "var(--charcoal)", opacity: 0.7 }}
                >
                    This path seems to have wandered off. Like a memory waiting
                    to be found, let's guide you back home.
                </p>

                {/* Divider */}
                <div
                    className="w-24 h-px mx-auto my-8"
                    style={{ backgroundColor: "var(--sand)" }}
                />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        asChild
                        className="px-6 py-5 font-medium transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "var(--charcoal)",
                            color: "var(--cream)",
                        }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        className="px-6 py-5 font-medium border-2 transition-all duration-300"
                        style={{
                            borderColor: "var(--charcoal)",
                            color: "var(--charcoal)",
                        }}
                    >
                        <Link
                            href="/gallery"
                            className="flex items-center gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Browse Gallery
                        </Link>
                    </Button>
                </div>

                {/* Artist Image - subtle */}
                <div className="mt-16 flex justify-center">
                    <div
                        className="relative w-32 h-32 rounded-full overflow-hidden opacity-20"
                        style={{ border: "2px solid var(--sand)" }}
                    >
                        <Image
                            src="/images/anesu.jpeg"
                            alt="Anesu Ndangariro"
                            fill
                            className="object-cover grayscale"
                        />
                    </div>
                </div>

                <p
                    className="text-small italic mt-4"
                    style={{ color: "var(--sienna)" }}
                >
                    "With us, Remembrance"
                </p>
            </div>
        </div>
    );
}
