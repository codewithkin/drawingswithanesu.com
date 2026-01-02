"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Check } from "lucide-react";
import { toast } from "sonner";

type Package = { id: string; size: string; dimensions: string; price: number };
type PrintOption = { id: string; label: string; price: number };

export default function CommissionForm({
    selectedPackage,
    setSelectedPackage,
    commissionPackages,
    printOptions,
}: {
    selectedPackage: string;
    setSelectedPackage: (id: string) => void;
    commissionPackages: Package[];
    printOptions: PrintOption[];
}) {
    const [selectedPrint, setSelectedPrint] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        animalType: "",
        message: "",
        referenceImages: null as File | null,
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, referenceImages: e.target.files[0] });
        }
    };

    const calculateTotalPrice = () => {
        const base = commissionPackages.find((p) => p.id === selectedPackage);
        const addon = printOptions.find((p) => p.id === selectedPrint);
        let total = base?.price || 0;
        if (addon) total += addon.price;
        return total;
    };

    const totalPrice = calculateTotalPrice();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedPackage) {
            setError("Please select a package above before submitting.");
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        if (!selectedPrint) {
            setError("Please select a print type before submitting.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const pkg = commissionPackages.find((p) => p.id === selectedPackage);
            const packageDetails = pkg ? `${pkg.size} (${pkg.dimensions}) - ${pkg.price}` : selectedPackage;
            const printLabel = selectedPrint ? printOptions.find((p) => p.id === selectedPrint)?.label || selectedPrint : "Not selected";

            const response = await fetch("/api/commission", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, selectedPackage: packageDetails, selectedPrint: printLabel, totalPrice }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to send request");
            }

            setSubmitted(true);
            toast.success("Order request sent successfully!", {
                description: "I'll be in touch within 48 hours to discuss your order.",
                duration: 5000,
            });

            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", phone: "", animalType: "", message: "", referenceImages: null });
                setSelectedPackage("");
                setSelectedPrint("");
            }, 5000);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
            toast.error("Failed to send order request", {
                description: err instanceof Error ? err.message : "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-16 lg:py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-h2 mb-8" style={{ color: "var(--charcoal)" }}>
                    Request Your Order
                </h2>

                {selectedPackage && (
                    <div className="mb-8 p-6 rounded" style={{ backgroundColor: "var(--warm-white)", borderLeft: "4px solid var(--ochre)" }}>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-small" style={{ color: "var(--sienna)" }}>Package Price:</p>
                                <p className="text-h3" style={{ color: "var(--charcoal)" }}>${commissionPackages.find((p) => p.id === selectedPackage)?.price || 0}</p>
                            </div>
                            {selectedPrint && (
                                <>
                                    <div className="w-px h-12" style={{ backgroundColor: "var(--sand)" }}></div>
                                    <div>
                                        <p className="text-small" style={{ color: "var(--sienna)" }}>Print Addon:</p>
                                        <p className="text-h3" style={{ color: "var(--ochre)" }}>+${printOptions.find((p) => p.id === selectedPrint)?.price || 0}</p>
                                    </div>
                                </>
                            )}
                            <div className="w-px h-12" style={{ backgroundColor: "var(--sand)" }}></div>
                            <div>
                                <p className="text-small" style={{ color: "var(--sienna)" }}>Total:</p>
                                <p className="text-h2 font-bold" style={{ color: "var(--charcoal)" }}>${totalPrice}</p>
                            </div>
                        </div>
                    </div>
                )}

                {submitted ? (
                    <div className="p-8 rounded text-center" style={{ backgroundColor: "var(--warm-white)", border: "2px solid var(--ochre)" }}>
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "var(--ochre)" }}>
                            <Check className="w-8 h-8" style={{ color: "var(--cream)" }} />
                        </div>
                        <h3 className="text-h3 mb-2" style={{ color: "var(--charcoal)" }}>Request Submitted!</h3>
                        <p className="text-body" style={{ color: "var(--sienna)" }}>Thank you for your interest. I'll be in touch within 48 hours to discuss your order.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Full Name *</label>
                                <Input required type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="!border-0 !border-b-2 !rounded-none !shadow-none !ring-0 focus:!ring-0 focus:!border-b-2 focus-visible:!ring-0" style={{ borderColor: "var(--sand)", color: "var(--charcoal)" }} placeholder="Your name" />
                            </div>

                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Email Address *</label>
                                <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="!border-0 !border-b-2 !rounded-none !shadow-none !ring-0 focus:!ring-0 focus:!border-b-2 focus-visible:!ring-0" style={{ borderColor: "var(--sand)", color: "var(--charcoal)" }} placeholder="your.email@example.com" />
                            </div>

                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Phone Number *</label>
                                <Input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="!border-0 !border-b-2 !rounded-none !shadow-none !ring-0 focus:!ring-0 focus:!border-b-2 focus-visible:!ring-0" style={{ borderColor: "var(--sand)", color: "var(--charcoal)" }} placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Animal/Subject *</label>
                                <Input required type="text" value={formData.animalType} onChange={(e) => setFormData({ ...formData, animalType: e.target.value })} className="!border-0 !border-b-2 !rounded-none !shadow-none !ring-0 focus:!ring-0 focus:!border-b-2 focus-visible:!ring-0" style={{ borderColor: "var(--sand)", color: "var(--charcoal)" }} placeholder="e.g., Lion and cub, Elephant pair, etc." />
                            </div>

                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Print Type *</label>
                                <Select required value={selectedPrint} onValueChange={setSelectedPrint}>
                                    <SelectTrigger className="!border-0 !border-b-2 !rounded-none !shadow-none !ring-0 focus:!ring-0 focus:!border-b-2 focus-visible:!ring-0" style={{ borderColor: "var(--sand)", color: "var(--charcoal)" }}>
                                        <SelectValue placeholder="Choose a print option..." />
                                    </SelectTrigger>
                                    <SelectContent style={{ backgroundColor: "var(--cream)", borderColor: "var(--sand)" }}>
                                        {printOptions.map((option) => (
                                            <SelectItem key={option.id} value={option.id} style={{ color: "var(--charcoal)" }}>{option.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Message & Details *</label>
                                <Textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6} className="!shadow-none !ring-0 focus:!ring-0 focus-visible:!ring-0" style={{ borderColor: "var(--sand)", color: "var(--charcoal)" }} placeholder="Tell me about your vision for this piece. Include any personal significance, specific poses, backgrounds, or messages you'd like incorporated..." />
                            </div>

                            <div>
                                <label className="block text-body font-medium mb-2" style={{ color: "var(--charcoal)" }}>Reference Images (optional)</label>
                                <div className="border-2 border-dashed rounded p-8 text-center cursor-pointer transition-colors duration-300 hover:border-opacity-100" style={{ borderColor: "var(--sand)", backgroundColor: "var(--warm-white)" }}>
                                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="file-upload" />
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                        <Upload className="w-8 h-8 mx-auto mb-2" style={{ color: "var(--sienna)" }} />
                                        <p className="text-body" style={{ color: "var(--charcoal)" }}>{formData.referenceImages ? formData.referenceImages.name : "Click to upload reference photos"}</p>
                                        <p className="text-small mt-1" style={{ color: "var(--sienna)" }}>JPG, PNG, or PDF</p>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {selectedPackage && (
                            <div className="p-4 rounded" style={{ backgroundColor: "var(--warm-white)", border: "1px solid var(--sand)" }}>
                                <p className="text-small mb-1" style={{ color: "var(--sienna)" }}>Selected Package:</p>
                                <p className="text-body font-medium" style={{ color: "var(--charcoal)" }}>{commissionPackages.find((p) => p.id === selectedPackage)?.size} ${commissionPackages.find((p) => p.id === selectedPackage)?.price}</p>
                            </div>
                        )}

                        {error && (
                            <div className="p-4 rounded text-center" style={{ backgroundColor: "#fee2e2", border: "1px solid #fecaca" }}>
                                <p style={{ color: "#991b1b" }}>{error}</p>
                            </div>
                        )}

                        <div className="pt-6">
                            <Button type="submit" disabled={!selectedPackage || loading} className="w-full px-8 py-6 text-body font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: selectedPackage ? "var(--charcoal)" : "var(--sand)", color: "var(--cream)" }}>
                                {loading ? "Sending..." : "Submit Order Request"}
                            </Button>
                            {!selectedPackage && <p className="text-small text-center mt-2" style={{ color: "var(--sienna)" }}>Please select a package above</p>}
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
