import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-[var(--sienna)]/60 flex field-sizing-content min-h-24 w-full rounded-md border-2 border-[var(--sand)] bg-transparent px-4 py-3 text-base text-[var(--charcoal)] transition-colors outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus:border-[var(--sienna)] focus:ring-0 focus-visible:ring-0 focus-visible:border-[var(--sienna)]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
