"use client";

import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function ScrollReveal({ children }: Props) {
    return <div className="scroll-reveal">{children}</div>;
}
