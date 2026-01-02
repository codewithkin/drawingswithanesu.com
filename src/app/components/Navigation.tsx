"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/#artist-statement", label: "About" },
        { href: "/#featured-works", label: "Works" },
        { href: "/gallery", label: "Gallery" },
        { href: "/commissions", label: "Commissions" },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: "var(--cream)",
                borderBottom: "1px solid var(--sand)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
                        <Image
                            src="/logo.png"
                            alt="Drawings With Anesu"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-3 lg:px-4 py-2 text-body font-medium transition-colors duration-300 rounded-md hover:bg-[var(--sand)]/30"
                                style={{ color: "var(--charcoal)" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            backgroundColor: isOpen ? "var(--sand)" : "transparent",
                            color: "var(--charcoal)",
                        }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div
                        className="md:hidden border-t"
                        style={{ borderColor: "var(--sand)" }}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-body font-medium transition-colors duration-300"
                                    style={{
                                        color: "var(--charcoal)",
                                    }}
                                    onClick={() => setIsOpen(false)}
                                    onTouchEnd={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
