"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import Container from "../Container";
import Image from "next/image";

export type Movie = {
  url: string;
  name: string;
};
const Gallery = () => {
  const images = [
    { url: "https://source.unsplash.com/random?nature", name: "Nature" },
    { url: "https://source.unsplash.com/random?beach", name: "Beach" },
    { url: "https://source.unsplash.com/random?holiday", name: "Holiday" },
    { url: "https://source.unsplash.com/random?car", name: "Car" },
    { url: "https://source.unsplash.com/random?beauty", name: "Beauty" },
    { url: "https://source.unsplash.com/random?health", name: "Health" },
    { url: "https://source.unsplash.com/random?laughing", name: "Laughing" },
    { url: "https://source.unsplash.com/random?flower", name: "Flower" },
    { url: "https://source.unsplash.com/random?tree", name: "Tree" },
  ];

  const shuffledImages = images.sort(() => Math.random() - 0.5);
  const duplicateImages = [
    ...shuffledImages,
    ...shuffledImages,
    ...shuffledImages,
  ];
  return (
    <Container>
      {/* carousel  */}

      <h2 className="pb-8 text-center text-3xl font-bold ">Gallery</h2>
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="flex gap-x-4"
          whileHover={{ transition: { duration: 10 } }}
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            },
          }}
        >
          {duplicateImages.map((image, index) => (
            <div key={index} className="mb-10 h-40 w-60 flex-shrink-0">
              <Image
                width={260}
                height={200}
                src={image.url}
                className="flex h-full flex-col items-center justify-center rounded-xl object-cover
                  text-6xl shadow-sm transition duration-300 ease-in-out hover:scale-105
                  hover:shadow-lg"
                alt={image.name}
              />
              <p className="pt-1 text-center text-xs font-semibold">
                {image.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="flex gap-x-4"
          whileHover={{ transition: { duration: 10 } }}
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {duplicateImages.map((image, index) => (
            <div key={index} className="mb-10 h-40 w-60 flex-shrink-0">
              <Image
                width={260}
                height={200}
                src={image.url}
                className="flex h-full flex-col items-center justify-center rounded-xl object-cover
                  text-6xl shadow-sm transition duration-300 ease-in-out hover:scale-105
                  hover:shadow-lg"
                alt={image.name}
              />
              <p className="pt-1 text-center text-xs font-semibold">
                {image.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default Gallery;
