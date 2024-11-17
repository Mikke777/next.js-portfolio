import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl grid-cols-1 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          id={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          image={item.image}
        >
        </BentoGridItem>
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    id: 1,
    title: "About me:",
    description: "I want to be a full stack.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    image: "/photo-prof.jpg",
  },
  {
    id: 2,
    title: "",
    description: "" ,
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2",
    icon: <IconFileBroken className="hidden" />,
  },
  {
    id: 3,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1 md:row-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 4,
    title: "My Tech Stack",
    description:
      "I'm eager to learn new technologies and improve my skills.",
    header: <Skeleton />,
    className: "md:col-span-2 md:row-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 5,
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    id: 6,
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
