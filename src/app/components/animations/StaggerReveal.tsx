"use client";

import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function StaggerReveal({ children }: Props) {
    return <div className="stagger-reveal">{children}</div>;
}
