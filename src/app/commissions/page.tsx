"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Upload, Check } from "lucide-react";

const commissionPackages = [
    {
        id: "a3",
        size: "A3",
        dimensions: "42 × 30cm",
        price: "$200",
        subjects: "Single animal",
    },
    {
        id: "a2",
        size: "A2",
        dimensions: "60 × 42cm",
        price: "$400",
        subjects: "Single or paired",
    },
    {
        id: "a1",
        size: "A1",
        dimensions: "84 × 60cm",
        price: "$800",
        subjects: "Paired animals",
    },
    {
        id: "a0",
        size: "A0",
        dimensions: "120 × 84cm",
        price: "$1,600",
        subjects: "Complex composition",
    },
    {
        id: "a-plus",
        size: "A+",
        dimensions: "168 × 120cm",
        price: "$3,200",
        subjects: "Large-scale masterpiece",
    },
];

export default function CommissionsPage() {
    const [selectedPackage, setSelectedPackage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        animalType: "",
        message: "",
        referenceImages: null as File | null,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // In production, this would send data to an API/email service
        console.log("Commission Request:", { selectedPackage, ...formData });
        setSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                animalType: "",
                message: "",
                referenceImages: null,
            });
            setSelectedPackage("");
        }, 3000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, referenceImages: e.target.files[0] });
        }
    };

    return (
        <main style={{ backgroundColor: "var(--cream)" }}>
            {/* Hero Section */}
            <section className="py-24 lg:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-body mb-12 transition-colors duration-300 hover:gap-3"
                        style={{ color: "var(--charcoal)" }}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="max-w-3xl">
                        <h1
                            className="text-h1 mb-6"
                            style={{ color: "var(--charcoal)" }}
                        >
                            Commission a Drawing
                        </h1>
                        <p
                            className="text-body-lg"
                            style={{ color: "var(--sienna)" }}
                        >
                            Transform your memories into lasting art. Each piece
                            is carefully drawn to capture the soul through the
                            eyes — where emotion and connection live.
                        </p>

                        {/* Artist Image */}
                        <div className="mt-8 flex items-center gap-4">
                            <div
                                className="relative w-16 h-16 rounded-full overflow-hidden shadow-art"
                                style={{ border: "2px solid var(--sand)" }}
                            >
                                <Image
                                    src="/images/anesu.jpeg"
                                    alt="Anesu Ndangariro"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p
                                    className="text-body font-medium"
                                    style={{ color: "var(--charcoal)" }}
                                >
                                    Anesu Ndangariro
                                </p>
                                <p
                                    className="text-small italic"
                                    style={{ color: "var(--sienna)" }}
                                >
                                    "With us, Remembrance"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section
                className="py-16 lg:py-24 px-6"
                style={{ backgroundColor: "var(--warm-white)" }}
            >
                <div className="max-w-7xl mx-auto">
                    <h2
                        className="text-h2 text-center mb-4"
                        style={{ color: "var(--charcoal)" }}
                    >
                        Select Your Package
                    </h2>
                    <p
                        className="text-body text-center mb-12 max-w-2xl mx-auto"
                        style={{ color: "var(--sienna)" }}
                    >
                        Prices include standard framing and international
                        delivery. Custom requests may adjust pricing.
                    </p>

                    {/* Package Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {commissionPackages.map((pkg) => (
                            <Card
                                key={pkg.id}
                                onClick={() => setSelectedPackage(pkg.id)}
                                className={`cursor-pointer transition-all duration-300 hover:shadow-art-hover hover:-translate-y-1 ${selectedPackage === pkg.id
                                        ? "ring-2 shadow-art-hover"
                                        : ""
                                    }`}
                                style={{
                                    borderColor:
                                        selectedPackage === pkg.id
                                            ? "var(--ochre)"
                                            : "var(--sand)",
                                    backgroundColor: "var(--cream)",
                                }}
                            >
                                <CardContent className="p-6 text-center">
                                    {selectedPackage === pkg.id && (
                                        <div
                                            className="w-6 h-6 rounded-full flex items-center justify-center mb-3 mx-auto"
                                            style={{
                                                backgroundColor: "var(--ochre)",
                                            }}
                                        >
                                            <Check
                                                className="w-4 h-4"
                                                style={{ color: "var(--cream)" }}
                                            />
                                        </div>
                                    )}
                                    <h3
                                        className="text-h3 mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        {pkg.size}
                                    </h3>
                                    <p
                                        className="text-small mb-2"
                                        style={{ color: "var(--sienna)" }}
                                    >
                                        {pkg.dimensions}
                                    </p>
                                    <p
                                        className="text-h2 mb-3"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        {pkg.price}
                                    </p>
                                    <p
                                        className="text-small"
                                        style={{
                                            color: "var(--charcoal)",
                                            opacity: 0.7,
                                        }}
                                    >
                                        {pkg.subjects}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commission Form */}
            <section className="py-16 lg:py-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2
                        className="text-h2 mb-8"
                        style={{ color: "var(--charcoal)" }}
                    >
                        Request Your Commission
                    </h2>

                    {submitted ? (
                        <div
                            className="p-8 rounded text-center"
                            style={{
                                backgroundColor: "var(--warm-white)",
                                border: "2px solid var(--ochre)",
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                style={{ backgroundColor: "var(--ochre)" }}
                            >
                                <Check
                                    className="w-8 h-8"
                                    style={{ color: "var(--cream)" }}
                                />
                            </div>
                            <h3
                                className="text-h3 mb-2"
                                style={{ color: "var(--charcoal)" }}
                            >
                                Request Submitted!
                            </h3>
                            <p
                                className="text-body"
                                style={{ color: "var(--sienna)" }}
                            >
                                Thank you for your interest. I'll be in touch
                                within 48 hours to discuss your commission.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <div>
                                    <label
                                        className="block text-body font-medium mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        Full Name *
                                    </label>
                                    <Input
                                        required
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                        className="bg-transparent border-0 border-b-2 rounded-none px-0 py-3 focus:ring-0 transition-colors duration-300"
                                        style={{
                                            borderColor: "var(--sand)",
                                            color: "var(--charcoal)",
                                        }}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-body font-medium mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        Email Address *
                                    </label>
                                    <Input
                                        required
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                        className="bg-transparent border-0 border-b-2 rounded-none px-0 py-3 focus:ring-0 transition-colors duration-300"
                                        style={{
                                            borderColor: "var(--sand)",
                                            color: "var(--charcoal)",
                                        }}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-body font-medium mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        Phone Number (optional)
                                    </label>
                                    <Input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                        className="bg-transparent border-0 border-b-2 rounded-none px-0 py-3 focus:ring-0 transition-colors duration-300"
                                        style={{
                                            borderColor: "var(--sand)",
                                            color: "var(--charcoal)",
                                        }}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            {/* Commission Details */}
                            <div className="space-y-4">
                                <div>
                                    <label
                                        className="block text-body font-medium mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        Animal/Subject *
                                    </label>
                                    <Input
                                        required
                                        type="text"
                                        value={formData.animalType}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                animalType: e.target.value,
                                            })
                                        }
                                        className="bg-transparent border-0 border-b-2 rounded-none px-0 py-3 focus:ring-0 transition-colors duration-300"
                                        style={{
                                            borderColor: "var(--sand)",
                                            color: "var(--charcoal)",
                                        }}
                                        placeholder="e.g., Lion and cub, Elephant pair, etc."
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-body font-medium mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        Message & Details *
                                    </label>
                                    <Textarea
                                        required
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }
                                        rows={6}
                                        className="bg-transparent border-2 rounded px-4 py-3 focus:ring-0 transition-colors duration-300"
                                        style={{
                                            borderColor: "var(--sand)",
                                            color: "var(--charcoal)",
                                        }}
                                        placeholder="Tell me about your vision for this piece. Include any personal significance, specific poses, backgrounds, or messages you'd like incorporated..."
                                    />
                                </div>

                                <div>
                                    <label
                                        className="block text-body font-medium mb-2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        Reference Images (optional)
                                    </label>
                                    <div
                                        className="border-2 border-dashed rounded p-8 text-center cursor-pointer transition-colors duration-300 hover:border-opacity-100"
                                        style={{
                                            borderColor: "var(--sand)",
                                            backgroundColor: "var(--warm-white)",
                                        }}
                                    >
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                            id="file-upload"
                                        />
                                        <label
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
                                    </div>
                                </div>
                            </div>

                            {/* Selected Package Display */}
                            {selectedPackage && (
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
                            )}

                            {/* Submit Button */}
                            <div className="pt-6">
                                <Button
                                    type="submit"
                                    disabled={!selectedPackage}
                                    className="w-full px-8 py-6 text-body font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{
                                        backgroundColor: selectedPackage
                                            ? "var(--charcoal)"
                                            : "var(--sand)",
                                        color: "var(--cream)",
                                    }}
                                >
                                    Submit Commission Request
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
                        </form>
                    )}
                </div>
            </section>

            {/* Process Section */}
            <section
                className="py-16 lg:py-24 px-6"
                style={{ backgroundColor: "var(--warm-white)" }}
            >
                <div className="max-w-5xl mx-auto">
                    <h2
                        className="text-h2 text-center mb-12"
                        style={{ color: "var(--charcoal)" }}
                    >
                        The Process
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Consultation",
                                desc: "We discuss your vision, story, and preferences",
                            },
                            {
                                step: "2",
                                title: "Sketch",
                                desc: "Initial concept sketch for your approval",
                            },
                            {
                                step: "3",
                                title: "Creation",
                                desc: "Detailed drawing process (2-4 weeks)",
                            },
                            {
                                step: "4",
                                title: "Delivery",
                                desc: "Framed artwork shipped to your door",
                            },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                    style={{
                                        backgroundColor: "var(--ochre)",
                                        opacity: 0.2,
                                    }}
                                >
                                    <span
                                        className="text-h2"
                                        style={{ color: "var(--charcoal)" }}
                                    >
                                        {item.step}
                                    </span>
                                </div>
                                <h3
                                    className="text-h3 mb-2"
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
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
