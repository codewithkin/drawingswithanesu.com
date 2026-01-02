"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function ProcessSection() {
    return (
        <section className="py-16 lg:py-20 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-h2 mb-3" style={{ color: "var(--charcoal)" }}>
                        The Process
                    </h2>
                    <p className="text-body max-w-2xl mx-auto" style={{ color: "var(--sienna)" }}>
                        From consultation to delivery, here's how we bring your vision to life
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: "1", title: "Consultation", desc: "Discuss your vision and share reference images." },
                        { step: "2", title: "Sketch", desc: "Review and approve the initial concept." },
                        { step: "3", title: "Creation", desc: "Detailed drawing process (2-4 weeks)." },
                        { step: "4", title: "Delivery", desc: "Framed and shipped to your door." },
                    ].map((item, index) => (
                        <div key={item.step} className="text-center">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "var(--ochre)" }}>
                                <span className="text-h3 font-bold" style={{ color: "var(--charcoal)" }}>{item.step}</span>
                            </div>
                            <h3 className="text-body font-semibold mb-2" style={{ color: "var(--charcoal)" }}>{item.title}</h3>
                            <p className="text-small" style={{ color: "var(--sienna)" }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
