"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Intro from "@/assets/intro.mp4";
import "@/components/styles/landing.css";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Box, ImageList, ImageListItem } from "@mui/material";
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
import { ArrowRight } from "lucide-react";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

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

export default function Home() {
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
    <div className="min-h-screen bg-black text-white">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="relative">
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex justify-center">
              <AvatarCircles numPeople={99} avatarUrls={avatars} />
            </div>
            <div className="relative">
              {/* Grid Background Layer */}
              <div className="absolute inset-0 flex flex-col">
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,1) 100%)",
                    opacity: 0.7,
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Content Layer */}
              <div className="relative space-y-4 md:space-y-6 text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-satoshi leading-tight">
                  The{" "}
                  <span className="text-pink-300 italic kaushan-script-regular">
                    Marketplace
                  </span>{" "}
                  of High-Quality Digital Creations and Design Services
                </h1>

                <p className="text-gray-400 text-sm sm:text-base mx-auto max-w-2xl">
                  From custom edits to inspired designs, discover a platform
                  where creativity knows no bounds, turning your ideas into
                  extraordinary digital creations.
                </p>

                <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                  <Link
                    to="#"
                    className="relative  rounded-2xl bg-[#FF6F61] text-black px-8 py-3 text-lg font-semibold hover:bg-[#FF5722] transition"
                  >
                    Get started now
                  </Link>
                </div>

                <div className="mt-12">
                  <div className="aspect-video max-w-3xl mx-auto">
                    <video
                      className="w-full h-full rounded-lg object-cover"
                      controls
                      poster={Intro}
                      autoPlay
                      loop
                      muted
                    >
                      <source src={Intro} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-pink-300 font-MagilioRegular">
                Our Mission
              </h2>
              <p className="text-[#d4d4d8] text-lg sm:text-xl md:text-2xl mb-6 max-w-8xl leading-relaxed Neue">
                We are dedicated to{" "}
                <span className="text-pink-300 font-medium	">inspiring</span> and{" "}
                <span className="text-pink-300 font-medium	">connecting</span>{" "}
                creators with those in search of exceptional digital artistry.
                By providing a
                <span className="text-pink-300 font-medium	">
                  {" "}
                  dynamic platform
                </span>{" "}
                where{" "}
                <span className="text-white font-medium	">
                  creativity knows no bounds
                </span>
                , we empower artists to bring unique ideas to life through{" "}
                <span className="text-white font-medium	">impactful</span>,
                <span className="text-white font-medium	">
                  {" "}
                  one-of-a-kind designs
                </span>
                . Our mission is to foster a community where
                <span className="text-white font-medium	">
                  {" "}
                  innovation
                </span> and{" "}
                <span className="text-white font-medium	">
                  collaboration
                </span>{" "}
                thrive, enabling artists to
                <span className="text-white font-medium	"> showcase</span> their
                talents and reach a global audience. We believe in the power of
                <span className="text-white font-medium	">
                  {" "}
                  artistic expression
                </span>{" "}
                to transform ideas into reality, and we are committed to
                supporting creators in their journey to{" "}
                <span className="text-white font-medium	">
                  achieve excellence
                </span>{" "}
                and make a lasting impact.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-MagilioRegular text-[#869F77]">
                Our Edited Masterpieces
              </h2>

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
                          loading[index]
                            ? "blur-lg grayscale"
                            : "blur-0 grayscale-0"
                        }`}
                        onLoad={() => handleImageLoad(index)}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          <div className="text-center mb-12 bg-[#1D1D1D] rounded-2xl p-8">
            <h2 className="text-white text-3xl md:text-4xl font-serif mb-4">
              Your perfect design is just a click away
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Contact a designer now and bring your vision to life!
            </p>
            <button className="bg-pink-200 text-black py-3 px-6 rounded-full font-semibold flex items-center justify-center mx-auto hover:bg-gray-200 transition-colors">
              Contact Designer
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
