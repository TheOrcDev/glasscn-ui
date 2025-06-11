import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "relative bg-card/30 backdrop-blur-[2px] text-card-foreground flex flex-col gap-6 rounded-xl border border-foreground/30 py-6 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-b before:from-white/40 before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)] after:opacity-80 after:pointer-events-none shadow-[0_0_20px_rgba(0,0,0,0.2),0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.3),0_0_35px_rgba(255,255,255,0.15)] transition-all duration-300 [&::before]:h-[30%] [&::before]:bg-gradient-to-b [&::before]:from-white/50 [&::before]:to-transparent [&::before]:rounded-t-xl [background-image:linear-gradient(to_bottom_right,rgba(255,255,255,0.15),transparent_50%)] [background-size:200%_200%] hover:[background-position:100%_100%]",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-semibold [text-shadow:0_0_10px_rgba(255,255,255,0.5)]",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-muted-foreground text-sm [text-shadow:0_0_10px_rgba(255,255,255,0.5)]",
        className
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
