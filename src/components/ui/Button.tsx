import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg font-sans font-bold uppercase tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary — yellow marker pill with black text
        yellow:
          "bg-brand-yellow text-brand-black hover:bg-brand-yellowDark focus-visible:ring-brand-yellow",
        blue:
          "bg-brand-blue text-white hover:bg-brand-blueLight focus-visible:ring-brand-blue",
        dark:
          "bg-brand-black text-white hover:bg-brand-ink focus-visible:ring-brand-black",
        outline:
          "border-2 border-brand-ink/15 bg-transparent text-brand-ink hover:border-brand-ink/40 hover:bg-brand-ink/5",
        outlineLight:
          "border-2 border-white/25 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
        ghost:
          "bg-transparent text-brand-ink hover:bg-brand-grayLight",
        // Legacy aliases so any copied components still work
        red:
          "bg-brand-yellow text-brand-black hover:bg-brand-yellowDark focus-visible:ring-brand-yellow",
      },
      size: {
        sm: "h-9 px-5 text-[11px]",
        md: "h-11 px-6 text-xs",
        lg: "h-14 px-8 text-sm",
      },
    },
    defaultVariants: { variant: "yellow", size: "md" },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
