import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[var(--ochre)]/30 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-[var(--charcoal)] text-[var(--cream)] hover:bg-[var(--charcoal)]/90",
        destructive:
          "bg-red-600 text-white hover:bg-red-600/90 focus-visible:ring-red-600/20",
        outline:
          "border-2 border-[var(--charcoal)] text-[var(--charcoal)] bg-transparent hover:bg-[var(--sand)]/30",
        secondary:
          "bg-[var(--sand)] text-[var(--charcoal)] hover:bg-[var(--sand)]/80",
        ghost:
          "hover:bg-[var(--sand)]/50 text-[var(--charcoal)]",
        link: "text-[var(--sienna)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-4",
        sm: "h-9 rounded-md gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-md px-8 has-[>svg]:px-6",
        icon: "size-10",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
