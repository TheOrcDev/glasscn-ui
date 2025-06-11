import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/30 before:to-transparent before:opacity-50 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)] after:opacity-70 after:pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 [&::before]:h-[30%] [&::before]:bg-gradient-to-b [&::before]:from-white/40 [&::before]:to-transparent [&::before]:rounded-t-lg",
  {
    variants: {
      variant: {
        default:
          "bg-card/20 backdrop-blur-[1px] text-card-foreground border border-foreground/20 [background-image:linear-gradient(to_bottom_right,rgba(255,255,255,0.1),transparent_50%)] [background-size:200%_200%] hover:[background-position:100%_100%]",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90 [background-image:linear-gradient(to_bottom_right,rgba(255,255,255,0.1),transparent_50%)] [background-size:200%_200%] hover:[background-position:100%_100%]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
