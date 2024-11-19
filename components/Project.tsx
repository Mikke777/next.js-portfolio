"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { data as projectData } from "@/data/index";

const DummyContent = ({ content }) => {
  return (
    <>
      {content.map((item, index) => (
        <div
          key={index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <div className="mt-4 mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                {item.title}
              </span>{" "}
              {item.description}
            </p>
            <Image
              src={item.imgSrc}
              alt={item.imgAlt}
              height={500}
              width={500}
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        </div>
      ))}
    </>
  );
};


const contentMap = projectData.reduce((acc, item) => {
  acc[item.contentId] = <DummyContent content={item.content} />;
  return acc;
}, {});

export function AppleCardsCarouselDemo() {
  const cards = projectData.map((card, index) => (
    <Card key={card.src} card={{ ...card, content: contentMap[card.contentId] }} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Some of my projects!
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
