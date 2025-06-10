import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Button as ShadcnButton } from "@/components/ui/button";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "bg-foreground",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({ children, ...props }: BitButtonProps) {
  const { variant, size, className } = props;

  return (
    <ShadcnButton
      {...props}
      className={cn(
        "bg-primary/20 hover:bg-primary/30 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary dark:text-primary backdrop-blur-[1px] border border-primary/20",
        className
      )}
      size={size}
      variant={variant}
    >
      {children}
    </ShadcnButton>
  );
}

export { Button };
