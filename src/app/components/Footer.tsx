"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram } from "lucide-react";
import { Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: "var(--charcoal)" }}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start space-y-4">
                        <Image
                            src="/logo.png"
                            alt="Drawings With Anesu"
                            width={48}
                            height={48}
                            className="w-12 h-12"
                        />
                        <p
                            className="text-body-lg font-semibold"
                            style={{ color: "var(--cream)" }}
                        >
                            Drawings With Anesu
                        </p>
                        <p
                            className="text-body italic"
                            style={{ color: "var(--sand)" }}
                        >
                            "With us, Remembrance"
                        </p>
                        <p
                            className="text-small max-w-xs"
                            style={{ color: "var(--sage)" }}
                        >
                            Wildlife artwork exploring memory, Ubuntu, and the
                            connections that bind us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h3
                            className="text-body font-semibold"
                            style={{ color: "var(--ochre)" }}
                        >
                            Quick Links
                        </h3>
                        <div className="space-y-3">
                            <Link
                                href="/"
                                className="text-body transition-colors duration-300 hover:text-[var(--ochre)]"
                                style={{ color: "var(--cream)" }}
                            >
                                Home
                            </Link>
                            <Link
                                href="/gallery"
                                className="block text-body transition-colors duration-300 hover:text-[var(--ochre)]"
                                style={{ color: "var(--cream)" }}
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/commissions"
                                className="block text-body transition-colors duration-300 hover:text-[var(--ochre)]"
                                style={{ color: "var(--cream)" }}
                            >
                                Commissions
                            </Link>
                        </div>
                    </div>

                    {/* Social & Contact */}
                    <div className="flex flex-col space-y-4">
                        <h3
                            className="text-body font-semibold"
                            style={{ color: "var(--ochre)" }}
                        >
                            Connect
                        </h3>
                        <div className="flex gap-4">
                            <a
                                href="mailto:drawingswithanesu@gmail.com"
                                className="p-3 rounded-full transition-colors duration-300 hover:bg-[var(--ochre)]"
                                style={{
                                    backgroundColor: "var(--sand)",
                                    color: "var(--charcoal)",
                                }}
                                aria-label="Email"
                                title="Send an email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/drawings.with.anesu?igsh=MXI0bDc0c3E0aXp6dw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-colors duration-300 hover:bg-[var(--ochre)]"
                                style={{
                                    backgroundColor: "var(--sand)",
                                    color: "var(--charcoal)",
                                }}
                                aria-label="Instagram"
                                title="Follow on Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@drawings.with.anesu?_r=1&_t=ZM-92je6qsoC0B"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-colors duration-300 hover:bg-[var(--ochre)]"
                                style={{
                                    backgroundColor: "var(--sand)",
                                    color: "var(--charcoal)",
                                }}
                                aria-label="TikTok"
                                title="Follow on TikTok"
                            >
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.86 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.44-.05z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/anesumuungani7o"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full transition-colors duration-300 hover:bg-[var(--ochre)]"
                                style={{
                                    backgroundColor: "var(--sand)",
                                    color: "var(--charcoal)",
                                }}
                                aria-label="X (Twitter)"
                                title="Follow on X"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                        <p
                            className="text-small"
                            style={{ color: "var(--sage)" }}
                        >
                            Get in touch to commission a piece or learn more
                            about the work.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="h-px my-8"
                    style={{ backgroundColor: "var(--sand)" }}
                />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p
                        className="text-small"
                        style={{ color: "var(--sage)" }}
                    >
                        © {currentYear} Drawings With Anesu. All rights reserved.
                    </p>
                    <p
                        className="text-small italic"
                        style={{ color: "var(--sage)" }}
                    >
                        Empowering wildlife conservation through art and memory.
                    </p>
                </div>
            </div>
        </footer>
    );
}
