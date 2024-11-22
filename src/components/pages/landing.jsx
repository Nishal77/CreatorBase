import React from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Intro from "@/assets/intro.mp4";
import "@/components/styles/landing.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="relative">
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                CAPTURE YOUR
                <span className="block text-pink-300">Namaste Sodi</span>
                IN LIFE INTO A PORTRAIT
              </h1>
              <p className="text-gray-400 text-sm sm:text-base mx-auto max-w-2xl">
                Preserve Your Precious Moments with Stunning Portraits at Our
                Photography Studio. Never miss any moments in your life again
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

            <div className="mt-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Intro
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Welcome to our creative hub where talented creators collaborate
                to bring your vision to life. Our platform is a melting pot of
                skilled professionals in video and image editing, photography,
                and digital artistry. Together, we craft stunning visuals that
                capture the essence of your story.
              </p>
              <p className="text-pink-300 text-lg font-semibold">
                Explore our gallery below to see some of our finest work.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className=" py-2 sm:py-3 overflow-hidden whitespace-nowrap"></footer>
    </div>
  );
}
