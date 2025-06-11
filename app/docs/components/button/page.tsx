import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/glass/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "Glass Button",
  description: "Displays an glass button component.",
};

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Button</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/glass-button.json`}
          command={"pnpm dlx shadcn@canary add glass-button"}
        />
      </div>

      <p className="text-muted-foreground">
        Displays a glass button component.
      </p>

      <div className="relative flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:20px_20px] select-none -z-10",
            "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Glass button component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="glass-button" className="w-fit" />
          </div>
        </div>
        <div className="relative h-[400px]">
          <ScrollArea className="h-full w-full">
            <div className="flex flex-col gap-4 p-4">
              <div className="h-[400px]" />
              <Image
                src="/images/fractalize.png"
                alt="Alert"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
              <Image
                src="/images/background.jpg"
                alt="Alert"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
              <Image
                src="/images/silva.jpg"
                alt="Alert"
                width={1000}
                height={1000}
                className="rounded-lg"
              />
            </div>
          </ScrollArea>

          <Button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Button
          </Button>
        </div>
      </div>

      <h3 className="text-lg font-bold">Installation</h3>

      <Separator />

      <InstallationCommands
        packageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/r/glass-button.json`}
      />

      <h3 className="text-lg font-bold mt-10">Usage</h3>

      <Separator />

      <CodeSnippet>{`import { Button } from "@/components/ui/glass/button"`}</CodeSnippet>

      <CodeSnippet>{`<Button variant="outline">Button</Button>`}</CodeSnippet>
    </div>
  );
}
