"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { useScrollStagger } from "@/hooks/useScrollAnimations";

// Full artwork collection with Anesu's descriptions
const artworks = [
    {
        id: 1,
        title: "Mother & Child",
        subtitle: "The bond between the two",
        medium: "Charcoal and pastel",
        size: "64 × 45 cm",
        image: "/images/artworks/mother-and-child-zebra-potrait.jpeg",
        description: `As an artist, I'm always aiming to convey what I feel inside. My mother left me when I was 2, and I'm the only child. I grew up in an environment that was filled with women. I thought one day I could fill that hole, but it's still void.

On this drawing, I had time to research and see how zebras raise their offspring, and they always have one foal. Which really resembles me — the foal is nurtured how to walk, and everything that a mother would do and teach their foal growing up.

This drawing shows the journey of a foal yearning for their mother's love. It's a journey. But it saves a message to the ones who still have their Mothers alive — showering them with love, and appreciating them.`,
    },
    {
        id: 2,
        title: "His Majesty",
        subtitle: "The King within",
        medium: "Charcoal",
        size: "91 × 64 cm",
        image: "/images/artworks/lion-potraut-single-male.jpeg",
        description: `Lions are always symbols of majesty and power. This drawing was linked to my mother's totem for me to remind myself that there's a lion in me, the king in me, which I need to embrace.

I got so in tune with it that finishing it wasn't the core point and perfecting it — but to just enjoy the moment and know that you're always evolving every day. Kings always make it a core point that the castle or the empire they're ruling are evolving and growing. In this drawing, I symbolized the castle as myself. I rule and sharpen, which is always growing.

This drawing reminds us to go back to our castles and reign the power. You're the King of your Castle. Don't let anybody rule over you.`,
    },
    {
        id: 3,
        title: "Window to Your Soul",
        subtitle: "Eyes that tell stories",
        medium: "Charcoal and pastel",
        size: "91 × 64 cm",
        image: "/images/artworks/animal-eyes-potrait.jpeg",
        description: `As a wildlife artist, I got bored drawing still animals and let my subconscious mind take a ride on this one. I just merged different pictures from different photographers I've asked consent on before I used their pictures. There's joy in creating your own references.

In this drawing, I made different eyes and parts of the animals. Each eye resembled its story. I created this piece as a mirror for people to look within and realise the power inside them.

This was when I realised the power of the subconscious mind, and I was helped by reading the book "Drawing on the Right Side of the Brain."

Every day, you need to reflect on your inner thoughts, and I've created the mirror for you.`,
    },
    {
        id: 4,
        title: "Polarity",
        subtitle: "Yin and Yang",
        medium: "Charcoal",
        size: "91 × 64 cm",
        image: "/images/artworks/polarity-high-quality-bears-potrait.jpeg",
        description: `This was the most intricate and detailed drawing I've done. When I looked at the reference of this drawing I was astounded and overwhelmed at the same time. I started it on a small paper A3 size but my heart yearned for more and then I restarted it on an A1 paper.

I still remember moving from one place to another with my drawing. I started this drawing when I was in Harare and then I started school in Bulawayo but I did not leave my drawing behind. I still remember joining this youth club — the place which gave me space to draw.

This drawing was a battlefield between two poles: positive and negative, yin and yang, men and women. During this battlefield, I was strong and resilient until I finished it with hard struggle. There's this saying that "Diamond is not formed under low pressure but under excruciating pain creates beauty."

This piece holds a special place in my heart and I hope it holds one in your heart and home.`,
    },
    {
        id: 5,
        title: "Motherland",
        subtitle: "Africa in her glory",
        medium: "Charcoal and pastel",
        size: "60 × 61 cm",
        image: "/images/artworks/africa-in-the-shape-of-african-potraits.jpeg",
        description: `Africa isn't called Motherland for no reason. I had to dive deeper for starting this drawing. The inspiration was effortless because everything was right in front of me.

I had to go to Victoria Falls to witness one of the seven wonders and capture the flow of the water and then imprint it on the drawings. I'm always drawn by the sunset — here in Africa sunsets hit different because you're drawn to them, the orange hues and yellow dawn tones. You can always stare and let the soul be revitalised by these glares. Not forgetting the harmonious living in Nature — how they live perfectly with each other without commotion and destruction.

I advise on your bucket list: Add Africa, like the whole Africa, for a holiday. For you to experience Godly Nature Feelings — the feeling that lives inside us forever.

Hope this piece inspires you to travel more.`,
    },
    {
        id: 6,
        title: "Stability",
        subtitle: "Lazy Gaze",
        medium: "Charcoal and pastel",
        size: "60 × 61 cm",
        image: "/images/artworks/lazy-gaze-cheetah.jpeg",
        description: `Cheetah is known for its flexibility and speed when hunting, but it's not always when it has the energy to hunt. Sometimes it takes time to rest and gather momentum for the next hunt.

As I was drawing this piece, I realised it's not always when you have the energy. Resting is vital for progress — take a break from life's struggles and wait till you've gained the energy and momentum, when your mind has settled, and then you progress on.

It's okay to take a break. It's vital for progress.`,
    },
    {
        id: 7,
        title: "Light Within",
        subtitle: "The cunning spirit",
        medium: "Charcoal and pastel",
        size: "64 × 45 cm",
        image: "/images/artworks/wild-dog-with-deep-eyes.jpeg",
        description: `This piece was inspired by the light which shines within. Wild dogs are known for being cunning and whimsical animals in nature, and it's hard to soldier on in the jungle full of big animals wanting the same prey.

But wild dogs always have their way through — which is fascinating. Like the wild dog, we each carry a light within that guides us through life's jungle.`,
    },
    {
        id: 8,
        title: "Spotted Innocence",
        subtitle: "Hyena portrait",
        medium: "Charcoal and pastel",
        size: "64 × 45 cm",
        image: "/images/artworks/hyena-potrait.jpeg",
        description: `A portrait capturing the often-misunderstood hyena in a moment of quiet dignity. Beyond the reputation, there's a soulful presence in those eyes.`,
    },
    {
        id: 9,
        title: "Eland Portrait",
        subtitle: "Majestic presence",
        medium: "Charcoal",
        size: "91 × 64 cm",
        image: "/images/artworks/eland-potrait.jpeg",
        description: `The eland, Africa's largest antelope, stands with quiet dignity. This portrait captures the gentle giant's calm presence and soulful gaze.`,
    },
];

export default function GalleryPage() {
    const [selectedArtwork, setSelectedArtwork] = useState<
        (typeof artworks)[0] | null
    >(null);
    const ref = useScrollStagger();

    return (
        <main style={{ backgroundColor: "var(--cream)" }}>
            {/* Header */}
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

                    {/* Page Title */}
                    <div className="max-w-3xl">
                        <h1
                            className="text-h1 mb-6"
                            style={{ color: "var(--charcoal)" }}
                        >
                            Gallery
                        </h1>
                        <p
                            className="text-body-lg"
                            style={{ color: "var(--sienna)" }}
                        >
                            Each piece tells a story — of memory, connection,
                            and the soul revealed through the eyes. Click on any
                            artwork to discover the journey behind its creation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="pb-24 lg:pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" ref={ref}>
                        {artworks.map((artwork) => (
                            <article
                                key={artwork.id}
                                className="group cursor-pointer"
                                onClick={() => setSelectedArtwork(artwork)}
                                data-scroll-item
                            >
                                {/* Image Container */}
                                <div
                                    className="relative aspect-[4/5] overflow-hidden mb-4 shadow-art transition-all duration-500 group-hover:shadow-art-hover group-hover:-translate-y-1"
                                    style={{ backgroundColor: "var(--sand)" }}
                                >
                                    <Image
                                        src={artwork.image}
                                        alt={artwork.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />

                                    {/* Hover overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                                        style={{
                                            backgroundColor:
                                                "rgba(26, 26, 26, 0.6)",
                                        }}
                                    >
                                        <span
                                            className="text-body font-medium"
                                            style={{ color: "var(--cream)" }}
                                        >
                                            View Story
                                        </span>
                                    </div>
                                </div>

                                {/* Artwork Info */}
                                <h3
                                    className="text-h3"
                                    style={{ color: "var(--charcoal)" }}
                                >
                                    {artwork.title}
                                </h3>
                                <p
                                    className="text-small mt-1"
                                    style={{ color: "var(--sienna)" }}
                                >
                                    {artwork.medium} · {artwork.size}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Artwork Modal */}
            {selectedArtwork && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
                    style={{ backgroundColor: "rgba(26, 26, 26, 0.9)" }}
                    onClick={() => setSelectedArtwork(null)}
                >
                    <div
                        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
                        style={{ backgroundColor: "var(--cream)" }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedArtwork(null)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-300"
                            style={{ backgroundColor: "var(--sand)" }}
                        >
                            <X
                                className="w-6 h-6"
                                style={{ color: "var(--charcoal)" }}
                            />
                        </button>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image */}
                            <div
                                className="relative aspect-[4/5] lg:aspect-auto lg:h-full"
                                style={{ backgroundColor: "var(--sand)" }}
                            >
                                <Image
                                    src={selectedArtwork.image}
                                    alt={selectedArtwork.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12">
                                <p
                                    className="text-caption mb-2"
                                    style={{ color: "var(--sienna)" }}
                                >
                                    {selectedArtwork.subtitle}
                                </p>
                                <h2
                                    className="text-h1 mb-4"
                                    style={{ color: "var(--charcoal)" }}
                                >
                                    {selectedArtwork.title}
                                </h2>
                                <p
                                    className="text-small mb-6"
                                    style={{ color: "var(--sienna)" }}
                                >
                                    {selectedArtwork.medium} ·{" "}
                                    {selectedArtwork.size}
                                </p>

                                <div
                                    className="w-16 h-px mb-6"
                                    style={{ backgroundColor: "var(--sand)" }}
                                />

                                <div
                                    className="text-body leading-relaxed whitespace-pre-line"
                                    style={{ color: "var(--charcoal)" }}
                                >
                                    {selectedArtwork.description}
                                </div>

                                {/* Commission CTA */}
                                <div className="mt-8 pt-6 border-t border-sand">
                                    <p
                                        className="text-small mb-4"
                                        style={{ color: "var(--sienna)" }}
                                    >
                                        Interested in a custom piece?
                                    </p>
                                    <Link
                                        href="/commissions"
                                        className="inline-block px-6 py-3 font-medium transition-all duration-300 hover:scale-[1.02]"
                                        style={{
                                            backgroundColor: "var(--charcoal)",
                                            color: "var(--cream)",
                                        }}
                                    >
                                        Commission a Drawing
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
