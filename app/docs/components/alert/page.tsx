import { Metadata } from "next";

import { cn } from "@/lib/utils";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/glass/alert";
import { Separator } from "@/components/ui/separator";

import ImageShowcaseScroll from "@/components/image-showcase-scroll";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "Glass Alert",
  description: "Displays an glass alert component.",
};

export default function AlertPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Alert</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/glass-alert.json`}
          command={"pnpm dlx shadcn@canary add glass-alert"}
        />
      </div>

      <p className="text-muted-foreground">Displays a glass alert component.</p>

      <div className="relative flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:20px_20px] select-none -z-10",
            "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Glass alert component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="glass-alert" className="w-fit" />
          </div>
        </div>
        <div className="relative h-[400px]">
          <ImageShowcaseScroll />

          <Alert className="w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add glass components to your app using the cli.
            </AlertDescription>
          </Alert>
        </div>

        <p className="hidden md:block text-sm text-muted-foreground">
          Scroll down to see the alert on different backgrounds.
        </p>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/glass-alert.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/glass/alert"`}</CodeSnippet>

      <CodeSnippet>{`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add glass components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}</CodeSnippet>
    </div>
  );
}
