import Image from "next/image";

export default function Loading() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center"
            style={{ backgroundColor: "var(--cream)" }}
        >
            {/* Animated Logo */}
            <div className="relative">
                <Image
                    src="/logo.png"
                    alt="Loading"
                    width={120}
                    height={120}
                    className="animate-pulse rounded-full"
                    style={{ animationDuration: "2s" }}
                    priority
                />

                {/* Circular loading indicator */}
                <div className="absolute -inset-4">
                    <svg
                        className="animate-spin"
                        style={{ animationDuration: "3s" }}
                        width="152"
                        height="152"
                        viewBox="0 0 152 152"
                        fill="none"
                    >
                        <circle
                            cx="76"
                            cy="76"
                            r="72"
                            stroke="var(--sand)"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            opacity="0.3"
                        />
                        <circle
                            cx="76"
                            cy="76"
                            r="72"
                            stroke="var(--ochre)"
                            strokeWidth="2"
                            strokeDasharray="60 400"
                            strokeLinecap="round"
                            opacity="0.6"
                        />
                    </svg>
                </div>
            </div>

            {/* Loading Text */}
            <p
                className="mt-12 text-body italic"
                style={{ color: "var(--sienna)" }}
            >
                Loading...
            </p>

            {/* Animated dots */}
            <div className="flex gap-2 mt-4">
                <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                        backgroundColor: "var(--ochre)",
                        animationDelay: "0ms",
                    }}
                />
                <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                        backgroundColor: "var(--ochre)",
                        animationDelay: "150ms",
                    }}
                />
                <span
                    className="w-2 h-2 rounded-full animate-bounce"
                    style={{
                        backgroundColor: "var(--ochre)",
                        animationDelay: "300ms",
                    }}
                />
            </div>

            {/* Quote */}
            <p
                className="mt-12 text-small text-center max-w-xs"
                style={{ color: "var(--charcoal)", opacity: 0.5 }}
            >
                "With us, Remembrance"
            </p>
        </div>
    );
}
