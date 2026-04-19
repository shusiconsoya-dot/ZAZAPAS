import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "secondary" | "tertiary";

const variantClasses: Record<BadgeVariant, string> = {
  primary: "bg-primary/20 text-primary border-primary/30",
  secondary: "bg-secondary/20 text-secondary border-secondary/30",
  tertiary: "bg-tertiary/20 text-tertiary border-tertiary/30",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
