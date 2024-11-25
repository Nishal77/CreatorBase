"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Image1 from "@/assets/image1.jpeg";
import Image2 from "@/assets/image2.jpeg";
import Image3 from "@/assets/image3.jpeg";
import Image4 from "@/assets/image4.jpeg";
import Image5 from "@/assets/image5.jpeg";
import Image6 from "@/assets/image6.jpeg";
import Image7 from "@/assets/image7.jpeg";
import Image8 from "@/assets/image8.jpeg";
import Image9 from "@/assets/image9.jpeg";
import Image10 from "@/assets/image10.jpeg";

const images = [
  {
    src: Image1,
    alt: "White pillow with plant decoration",
    className: "col-span-1 row-span-2",
  },
  {
    src: Image2,
    alt: "Numbered cups on windowsill",
    className: "col-span-1 row-span-1",
  },
  {
    src: Image4,
    alt: "Coffee in clear glass",
    className: "col-span-1 row-span-2",
  },
  {
    src: Image3,
    alt: "Books against white door",
    className: "col-span-1 row-span-1",
  },
  {
    src: Image5,
    alt: "Modern chairs with polka dot cushions",
    className: "col-span-2 row-span-2",
  },
  {
    src: Image6,
    alt: "White mudroom storage",
    className: "col-span-1 row-span-1",
  },
  {
    src: Image10,
    alt: "White mudroom storage",
    className: "col-span-1 row-span-1",
  },
  {
    src: Image7,
    alt: "Cozy sofa scene",
    className: "col-span-2 row-span-2",
  },
  {
    src: Image8,
    alt: "Candle in amber jar",
    className: "col-span-1 row-span-1",
  },
  {
    src: Image9,
    alt: "Minimalist interior",
    className: "col-span-1 row-span-1",
  },
];

export default function ImageGrid() {
  const [loading, setLoading] = useState(images.map(() => true));

  useEffect(() => {
    images.forEach((_, index) => {
      const randomDelay = Math.random() * 2000; // Delay i mean for blur effect
      setTimeout(() => handleImageLoad(index), randomDelay);
    });
  }, []);
  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-md bg-muted ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`object-cover transition-all duration-300 ease-in-out ${
                loading[index] ? "blur-lg grayscale" : "blur-0 grayscale-0"
              }`}
              onLoad={() => handleImageLoad(index)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
