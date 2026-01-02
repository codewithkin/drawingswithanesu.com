"use client";

import React from "react";

interface Props {
    text?: string;
}

export default function TextReveal({ text = "" }: Props) {
    return <span className="text-reveal">{text}</span>;
}
