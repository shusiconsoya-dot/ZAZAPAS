import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border",
  {
    variants: {
      color: {
        primary: "bg-primary/20 text-primary border-primary/30",
        secondary: "bg-secondary/20 text-secondary border-secondary/30",
        tertiary: "bg-tertiary/20 text-tertiary border-tertiary/30",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, color, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ color }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
