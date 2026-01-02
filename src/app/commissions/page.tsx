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

            {/* Commission form component */}
            <CommissionForm selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} commissionPackages={commissionPackages} printOptions={printOptions} />

            {/* Package grid component */}
            <PackageGrid packages={commissionPackages} selectedPackage={selectedPackage} setSelectedPackage={setSelectedPackage} />

            {/* Process section component */}
            <ProcessSection />
        </main>
    );
}
