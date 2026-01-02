"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
    return (
        <section className="py-24 lg:py-32 px-6" style={{ backgroundColor: "var(--charcoal)" }}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <p className="text-small font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--ochre)" }}>
                        How It Works
                    </p>
                    <h2 className="text-h1 mb-6" style={{ color: "var(--cream)" }}>
                        The Commission Process
                    </h2>
                    <p className="text-body-lg max-w-2xl mx-auto" style={{ color: "var(--sand)" }}>
                        From your initial vision to the final framed masterpiece, here's how we bring your commission to life through collaboration and careful craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: "1", title: "Consultation", desc: "We discuss your vision, story, and preferences in detail. Share reference images, specific poses, backgrounds, or personal significance you'd like incorporated." },
                        { step: "2", title: "Sketch", desc: "I create an initial concept sketch based on our conversation. You'll review and approve the composition before we proceed to the final drawing." },
                        { step: "3", title: "Creation", desc: "The detailed drawing process begins. This typically takes 2-4 weeks depending on size and complexity. I use charcoal, pastel, and mixed media." },
                        { step: "4", title: "Delivery", desc: "Your finished artwork is carefully framed and packaged. We arrange international shipping to your door with full insurance protection." },
                    ].map((item, index) => (
                        <div key={item.step} className="group" style={{ animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both` }}>
                            <div className="relative h-full">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: "var(--ochre)", boxShadow: "0 8px 20px rgba(201, 163, 75, 0.3)" }}>
                                    <span className="text-h2 font-bold" style={{ color: "var(--charcoal)" }}>{item.step}</span>
                                </div>

                                <div className="text-center p-6 rounded-lg h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-art-hover" style={{ backgroundColor: "var(--warm-white)", borderTop: "3px solid var(--ochre)" }}>
                                    <h3 className="text-h3 mb-3 font-semibold" style={{ color: "var(--charcoal)" }}>{item.title}</h3>
                                    <p className="text-body" style={{ color: "var(--sienna)" }}>{item.desc}</p>
                                </div>

                                {index < 3 && <div className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5" style={{ backgroundColor: "var(--ochre)", opacity: 0.3 }}></div>}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-body-lg mb-6" style={{ color: "var(--sand)" }}>Ready to start your commission journey?</p>
                    <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="transition-all duration-300 hover:scale-105" style={{ backgroundColor: "var(--ochre)", color: "var(--charcoal)" }}>Select Your Package</Button>
                </div>
            </div>
        </section>
    );
}
