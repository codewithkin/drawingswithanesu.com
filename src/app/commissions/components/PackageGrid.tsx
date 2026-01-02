"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useScrollStagger } from "@/hooks/useScrollAnimations";

type Package = {
    id: string;
    size: string;
    dimensions: string;
    price: number;
};

export default function PackageGrid({
    packages,
    selectedPackage,
    setSelectedPackage,
}: {
    packages: Package[];
    selectedPackage: string;
    setSelectedPackage: (id: string) => void;
}) {
    const ref = useScrollStagger();

    return (
        <section className="py-16 lg:py-24 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-h2 text-center mb-4" style={{ color: "var(--charcoal)" }}>
                    Select Your Package
                </h2>
                <p className="text-body text-center mb-2 max-w-2xl mx-auto" style={{ color: "var(--sienna)" }}>
                    For international orders, shipping costs will be calculated separately.
                </p>
                <p className="text-small text-center mb-12 text-black">
                    Local delivery proces may vary based on location
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6" ref={ref}>
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.id}
                            onClick={() => setSelectedPackage(pkg.id)}
                            className={`cursor-pointer transition-all duration-300 hover:shadow-art-hover hover:-translate-y-1 ${selectedPackage === pkg.id ? "ring-2 shadow-art-hover" : ""
                                }`}
                            style={{
                                borderColor: selectedPackage === pkg.id ? "var(--ochre)" : "var(--sand)",
                                backgroundColor: "var(--cream)",
                            }}
                            data-scroll-item
                        >
                            <CardContent className="p-6 text-center">
                                {selectedPackage === pkg.id && (
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center mb-3 mx-auto" style={{ backgroundColor: "var(--ochre)" }}>
                                        <Check className="w-4 h-4" style={{ color: "var(--cream)" }} />
                                    </div>
                                )}
                                <h3 className="text-h3 mb-2" style={{ color: "var(--charcoal)" }}>
                                    {pkg.size}
                                </h3>
                                <p className="text-small mb-2" style={{ color: "var(--sienna)" }}>
                                    {pkg.dimensions}
                                </p>
                                <p className="text-h2 mb-3" style={{ color: "var(--charcoal)" }}>
                                    ${pkg.price}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
