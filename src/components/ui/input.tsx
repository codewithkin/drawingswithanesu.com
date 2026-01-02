import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-[var(--charcoal)] placeholder:text-[var(--sienna)]/60 selection:bg-[var(--ochre)]/20 selection:text-[var(--charcoal)] h-10 w-full min-w-0 rounded-md border-0 border-b-2 border-[var(--sand)] bg-transparent px-0 py-2 text-base text-[var(--charcoal)] transition-colors outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-[var(--sienna)] focus:ring-0 focus-visible:ring-0 focus-visible:border-[var(--sienna)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
