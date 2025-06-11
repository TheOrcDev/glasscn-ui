import Image from "next/image";

import { ScrollArea } from "./ui/scroll-area";

export default function ImageShowcaseScroll() {
  return (
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
  );
}
