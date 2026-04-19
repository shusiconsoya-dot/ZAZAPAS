"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-headline font-bold tracking-tighter uppercase transition-all duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary-fixed hover:bg-primary-dim shadow-[0_8px_24px_rgba(255,145,89,0.25)] hover:shadow-[0_12px_32px_rgba(255,145,89,0.4)] hover:scale-[1.03]",
        glass:
          "glass-panel text-on-surface border border-outline-variant/30 hover:bg-surface-bright/30 hover:border-outline-variant/50 hover:scale-[1.02]",
        ghost:
          "hover:bg-zinc-800/50 text-on-surface",
        icon:
          "rounded-full hover:scale-105 hover:bg-zinc-800/50 text-primary",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-12 px-8 text-base rounded-full",
        lg: "px-10 py-5 text-lg rounded-full",
        icon: "w-10 h-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
