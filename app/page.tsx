import Link from "next/link";

import { Button } from "@/components/ui/glass/button";

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className="md:text-2xl font-bold">
        Build your glass component library
      </h1>
      <p className="max-w-2xl text-sm md:text-base">
        A set of glass styled components and a code distribution platform. Works
        with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link href="/docs/components/alert" className="w-fit">
        <Button size="sm" className="w-fit">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
