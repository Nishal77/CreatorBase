import React from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Intro from "@/assets/intro.mp4";
import "@/components/styles/landing.css";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Box, ImageList, ImageListItem } from "@mui/material";

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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="relative">
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="flex justify-center">
              <AvatarCircles
                numPeople={99}
                avatarUrls={avatars}
              />
            </div>
            <div className="space-y-4 md:space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-satoshi leading-tight">
                The <span className="text-pink-300 italic kaushan-script-regular">Marketplace</span> of
                High-Quality Digital Creations and Design Services
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mx-auto max-w-2xl">
                From custom edits to inspired designs, discover a platform where
                creativity knows no bounds, turning your ideas into
                extraordinary digital creations.
              </p>

              <div className="relative">
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                  <Link
                    to="#"
                    className="relative w-full sm:w-auto rounded-full bg-pink-300 text-black px-8 py-3 text-lg font-semibold hover:bg-pink-400 transition"
                  >
                    Get Started
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
              <h2 className="text-2xl sm:text-4xl md:text-5xl mb-4  text-pink-300 font-MagilioRegular">
                Our Mission
              </h2>
              <p className="text-[#d4d4d8] text-lg sm:text-xl md:text-2xl mb-6 max-w-8xl leading-relaxed Neue">
                We are dedicated to <span className="text-white font-medium	">inspiring</span> and <span className="text-white font-medium	">connecting</span> creators with those
                in search of exceptional digital artistry. By providing a
                <span className="text-white font-medium	"> dynamic platform</span> where <span className="text-white font-medium	">creativity knows no bounds</span>, we empower
                artists to bring unique ideas to life through <span className="text-white font-medium	">impactful</span>,
                <span className="text-white font-medium	"> one-of-a-kind designs</span>. Our mission is to foster a community where
                <span className="text-white font-medium	"> innovation</span> and <span className="text-white font-medium	">collaboration</span> thrive, enabling artists to
                <span className="text-white font-medium	"> showcase</span> their talents and reach a global audience. We believe in the power of
                <span className="text-white font-medium	"> artistic expression</span> to transform ideas into reality, and we are committed to
                supporting creators in their journey to <span className="text-white font-medium	">achieve excellence</span> and make a lasting impact.
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl sm:text-4xl md:text-5xl mb-4 font-satoshi text-pink-300">
                Some of our works
              </h2>
              <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-pink-300 py-2 sm:py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="mx-2 sm:mx-4 inline-flex items-center text-xs sm:text-sm md:text-base"
            >
              hyejin@photos.studio
              <span className="mx-1 sm:mx-2" aria-hidden="true">
                📧
              </span>
            </span>
          ))}
        </div>
      </footer>
    </div>
  );
}