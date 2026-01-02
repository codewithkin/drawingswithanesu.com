"use client";

import React from "react";

interface Props {
    children?: React.ReactNode;
}

export default function HorizontalScroll({ children }: Props) {
    return <div className="horizontal-scroll">{children}</div>;
}
