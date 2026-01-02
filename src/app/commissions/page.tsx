"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import PackageGrid from "./components/PackageGrid";
import CommissionForm from "./components/CommissionForm";
import ProcessSection from "./components/ProcessSection";

const commissionPackages = [
    {
        id: "a3",
        size: "A3",
        dimensions: "42 × 30cm",
        price: 200,
        subjects: "Single animal",
    },
    {
        id: "a2",
        size: "A2",
        dimensions: "60 × 42cm",
        price: 400,
        subjects: "Single or paired",
    },
    {
        id: "a1",
        size: "A1",
        dimensions: "84 × 60cm",
        price: 800,
        subjects: "Paired animals",
    },
    {
        id: "a0",
        size: "A0",
        dimensions: "120 × 84cm",
        price: 1600,
        subjects: "Complex composition",
    },
    {
        id: "a-plus",
        size: "A+",
        dimensions: "168 × 120cm",
        price: 3200,
        subjects: "Large-scale masterpiece",
    },
];

const printOptions = [
    { id: "paper-a0", label: "Paper Print A0 (84cm × 120cm)", price: 80 },
    { id: "paper-a1", label: "Paper Print A1 (59cm × 84cm)", price: 100 },
    { id: "paper-a2", label: "Paper Print A2 (42cm × 59cm)", price: 70 },
    { id: "paper-a3", label: "Paper Print A3 (29cm × 42cm)", price: 30 },
    { id: "canvas-a0", label: "Canvas Print A0 (84cm × 120cm)", price: 240 },
    { id: "canvas-a1", label: "Canvas Print A1 (59cm × 84cm)", price: 200 },
    { id: "canvas-a2", label: "Canvas Print A2 (42cm × 59cm)", price: 160 },
    { id: "canvas-a3", label: "Canvas Print A3 (29cm × 42cm)", price: 90 },
];

export default function CommissionsPage() {
    const [selectedPackage, setSelectedPackage] = useState("");

    return (
        <main style={{ backgroundColor: "var(--cream)" }}>
            {/* Hero Section */}
            <section className="py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-body mb-12 transition-colors duration-300 hover:gap-3"
                        style={{ color: "var(--charcoal)" }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <div className="max-w-3xl">
                        <h1 className="text-h1 mb-6" style={{ color: "var(--charcoal)" }}>
                            Commission a Drawing
                        </h1>
                        <p className="text-body-lg" style={{ color: "var(--sienna)" }}>
                            Transform your memories into lasting art. Each piece is carefully drawn to capture the soul through the eyes — where emotion and connection live.
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-art" style={{ border: "2px solid var(--sand)" }}>
                                <Image src="/images/anesu.jpeg" alt="Anesu Ndangariro" fill className="object-cover" />
                            </div>
                            <div>
                                <p className="text-body font-medium" style={{ color: "var(--charcoal)" }}>Anesu Ndangariro</p>
                                <p className="text-small italic" style={{ color: "var(--sienna)" }}>
                                    "With us, Remembrance"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Package grid component */}
            <PackageGrid packages={commissionPackages} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />

            {/* Commission form component */}
            <CommissionForm selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} commissionPackages={commissionPackages} printOptions={printOptions} />

            {/* Process section component */}
            <ProcessSection />
        </main>
    );
}
    htmlFor="file-upload"
    className="cursor-pointer"
>
    <Upload
        className="w-8 h-8 mx-auto mb-2"
        style={{
            color: "var(--sienna)",
        }}
    />
    <p
        className="text-body"
        style={{
            color: "var(--charcoal)",
        }}
    >
        {formData.referenceImages
            ? formData.referenceImages
                .name
            : "Click to upload reference photos"}
    </p>
    <p
        className="text-small mt-1"
        style={{
            color: "var(--sienna)",
        }}
    >
        JPG, PNG, or PDF
    </p>
</label>
                                    </div >
                                </div >
                            </div >

    {/* Selected Package Display */ }
{
    selectedPackage && (
        <div
            className="p-4 rounded"
            style={{
                backgroundColor: "var(--warm-white)",
                border: "1px solid var(--sand)",
            }}
        >
            <p
                className="text-small mb-1"
                style={{ color: "var(--sienna)" }}
            >
                Selected Package:
            </p>
            <p
                className="text-body font-medium"
                style={{ color: "var(--charcoal)" }}
            >
                {
                    commissionPackages.find(
                        (p) => p.id === selectedPackage
                    )?.size
                }{" "}
                —{" "}
                {
                    commissionPackages.find(
                        (p) => p.id === selectedPackage
                    )?.price
                }
            </p>
        </div>
    )
}

{/* Error Message */ }
{
    error && (
        <div
            className="p-4 rounded text-center"
            style={{
                backgroundColor: "#fee2e2",
                border: "1px solid #fecaca",
            }}
        >
            <p style={{ color: "#991b1b" }}>{error}</p>
        </div>
    )
}

{/* Submit Button */ }
<div className="pt-6">
    <Button
        type="submit"
        disabled={!selectedPackage || loading}
        className="w-full px-8 py-6 text-body font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
            backgroundColor: selectedPackage
                ? "var(--charcoal)"
                : "var(--sand)",
            color: "var(--cream)",
        }}
    >
        {loading
            ? "Sending..."
            : "Submit Commission Request"}
    </Button>
    {!selectedPackage && (
        <p
            className="text-small text-center mt-2"
            style={{ color: "var(--sienna)" }}
        >
            Please select a package above
        </p>
    )}
</div>
                        </form >
                    )}
                </div >
            </section >

    {/* Process Section */ }
    < section
className = "py-24 lg:py-32 px-6"
style = {{ backgroundColor: "var(--charcoal)" }}
            >
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
            <p
                className="text-small font-semibold uppercase tracking-wide mb-4"
                style={{ color: "var(--ochre)" }}
            >
                How It Works
            </p>
            <h2
                className="text-h1 mb-6"
                style={{ color: "var(--cream)" }}
            >
                The Commission Process
            </h2>
            <p
                className="text-body-lg max-w-2xl mx-auto"
                style={{ color: "var(--sand)" }}
            >
                From your initial vision to the final framed masterpiece, here's how we bring your
                commission to life through collaboration and careful craftsmanship.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                {
                    step: "1",
                    title: "Consultation",
                    desc: "We discuss your vision, story, and preferences in detail. Share reference images, specific poses, backgrounds, or personal significance you'd like incorporated.",
                },
                {
                    step: "2",
                    title: "Sketch",
                    desc: "I create an initial concept sketch based on our conversation. You'll review and approve the composition before we proceed to the final drawing.",
                },
                {
                    step: "3",
                    title: "Creation",
                    desc: "The detailed drawing process begins. This typically takes 2-4 weeks depending on size and complexity. I use charcoal, pastel, and mixed media.",
                },
                {
                    step: "4",
                    title: "Delivery",
                    desc: "Your finished artwork is carefully framed and packaged. We arrange international shipping to your door with full insurance protection.",
                },
            ].map((item, index) => (
                <div
                    key={item.step}
                    className="group"
                    style={{
                        animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                    }}
                >
                    <div className="relative h-full">
                        {/* Step circle */}
                        <div
                            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                            style={{
                                backgroundColor: "var(--ochre)",
                                boxShadow: "0 8px 20px rgba(201, 163, 75, 0.3)",
                            }}
                        >
                            <span
                                className="text-h2 font-bold"
                                style={{ color: "var(--charcoal)" }}
                            >
                                {item.step}
                            </span>
                        </div>

                        {/* Content card */}
                        <div
                            className="text-center p-6 rounded-lg h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-art-hover"
                            style={{
                                backgroundColor: "var(--warm-white)",
                                borderTop: "3px solid var(--ochre)",
                            }}
                        >
                            <h3
                                className="text-h3 mb-3 font-semibold"
                                style={{ color: "var(--charcoal)" }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="text-body"
                                style={{ color: "var(--sienna)" }}
                            >
                                {item.desc}
                            </p>
                        </div>

                        {/* Connector line (hidden on mobile) */}
                        {index < 3 && (
                            <div
                                className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5"
                                style={{ backgroundColor: "var(--ochre)", opacity: 0.3 }}
                            ></div>
                        )}
                    </div>
                </div>
            ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
            <p
                className="text-body-lg mb-6"
                style={{ color: "var(--sand)" }}
            >
                Ready to start your commission journey?
            </p>
            <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="transition-all duration-300 hover:scale-105"
                style={{
                    backgroundColor: "var(--ochre)",
                    color: "var(--charcoal)",
                }}
            >
                Select Your Package
            </Button>
        </div>
    </div>
            </section >
        </main >
    );
}
