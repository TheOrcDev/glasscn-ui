import { Metadata } from "next";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/glass/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/glass/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import ImageShowcaseScroll from "@/components/image-showcase-scroll";

import CodeSnippet from "../code-snippet";
import CopyCommandButton from "../copy-command-button";
import InstallationCommands from "../installation-commands";
import { OpenInV0Button } from "../open-in-v0-button";

export const metadata: Metadata = {
  title: "Glass Card",
  description: "Displays an glass card component.",
};

export default function CardPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <h1 className="text-3xl font-bold">Card</h1>
        <CopyCommandButton
          copyCommand={`pnpm dlx shadcn@canary add ${process.env.NEXT_PUBLIC_BASE_URL}/r/glass-card.json`}
          command={"pnpm dlx shadcn@canary add glass-card"}
        />
      </div>

      <p className="text-muted-foreground">Displays a glass card component.</p>

      <div className="relative flex flex-col gap-4 border rounded-lg p-4 min-h-[450px]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:20px_20px] select-none -z-10",
            "[background-image:linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
          )}
        />

        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            Glass card component
          </h2>

          <div className="flex items-center gap-2">
            <OpenInV0Button name="glass-card" className="w-fit" />
          </div>
        </div>
        <div className="relative h-[400px]">
          <ImageShowcaseScroll />

          <Card className="max-w-lg min-w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription className="text-xs">
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Label>Name</Label>
              <Input placeholder="Project name" className="w-full" />

              <Label>Framework</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="svelte">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button variant="outline">Create</Button>
            </CardFooter>
          </Card>
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

      <CodeSnippet>{`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/glass/card"`}</CodeSnippet>

      <CodeSnippet>
        {`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
      </CodeSnippet>
    </div>
  );
}
