"use client";

import React from "react";

interface Props {
    src?: string;
    alt?: string;
}

export default function ParallaxImage({ src, alt }: Props) {
    return (
        <div className="parallax-image">
            {/* Parallax image placeholder — image will be added later */}
            <img src={src} alt={alt} />
        </div>
    );
}
