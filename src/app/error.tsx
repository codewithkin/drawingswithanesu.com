"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Log error to console
        console.error("Error:", error);

        // Fade in animation
        if (containerRef.current) {
            containerRef.current.style.opacity = "0";
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.style.transition =
                        "opacity 600ms ease-out";
                    containerRef.current.style.opacity = "1";
                }
            }, 50);
        }
    }, [error]);

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center px-6 py-24"
            style={{ backgroundColor: "var(--warm-white)" }}
        >
            {/* Logo with subtle animation */}
            <div className="mb-12">
                <Image
                    src="/logo.png"
                    alt="Drawings With Anesu"
                    width={100}
                    height={100}
                    className="opacity-50 animate-pulse"
                    style={{ animationDuration: "3s" }}
                    priority
                />
            </div>

            {/* Content */}
            <div className="text-center max-w-2xl mx-auto space-y-6">
                <h1 className="text-h1" style={{ color: "var(--charcoal)" }}>
                    Something went wrong
                </h1>

                <p
                    className="text-body-lg max-w-md mx-auto"
                    style={{ color: "var(--sienna)" }}
                >
                    Even the most carefully drawn lines sometimes need a second
                    attempt. Let's try again.
                </p>

                {/* Error details (optional, for dev) */}
                {process.env.NODE_ENV === "development" && (
                    <details className="mt-8 p-4 rounded text-left bg-gray-100">
                        <summary
                            className="cursor-pointer text-small font-medium"
                            style={{ color: "var(--charcoal)" }}
                        >
                            Error Details
                        </summary>
                        <pre
                            className="mt-2 text-xs overflow-auto"
                            style={{ color: "var(--charcoal)" }}
                        >
                            {error.message}
                        </pre>
                    </details>
                )}

                {/* Divider */}
                <div
                    className="w-24 h-px mx-auto my-8"
                    style={{ backgroundColor: "var(--sand)" }}
                />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        onClick={reset}
                        className="px-6 py-5 font-medium transition-all duration-300 hover:scale-[1.02]"
                        style={{
                            backgroundColor: "var(--charcoal)",
                            color: "var(--cream)",
                        }}
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Try Again
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
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Return Home
                        </Link>
                    </Button>
                </div>

                {/* Artist Portrait */}
                <div className="mt-16 flex justify-center">
                    <div
                        className="relative w-32 h-32 rounded-full overflow-hidden opacity-50 shadow-art"
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
            </div>
        </div>
    );
}
