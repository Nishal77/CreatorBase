import React from "react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import Intro from "@/assets/intro.mp4";
import "@/components/styles/landing.css";
import AvatarCircles from "@/components/ui/avatar-circles";
import { ArrowRight } from "lucide-react";
import ImageGrid from "@/components/ImageGrid";
import ImageBackground from "@/assets/bg-contact.jpg";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header>
        <Navbar />
      </header>

      <main className="container mx-auto px-4 py-8">
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

            <div className="mt-12 text-right">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-MagilioRegular text-pink-300">
                {/* text-[#869F77] */}
                Our Edited Masterpieces
              </h2>

              <ImageGrid />
            </div>
          </div>
        </div>
      </main>

      <div className="flex items-center justify-center p-4">
        <div className="max-w-5xl w-full relative">
          <img
            src={ImageBackground}
            alt="Backgrond"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black bg-opacity-50 rounded-2xl">
            <h2 className="text-white text-[18.5px] md:text-4xl font-serif mb-4">
              Your perfect design is just a click away
            </h2>
            <p className="text-gray-300 text-[12px] mb-6">
              Contact a designer now and bring your vision to life!
            </p>
            <a
              href="https://wa.me/8967450927"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-[#FF7EB3] to-[#FFA45B] text-black py-3 px-8 rounded-full font-semibold flex items-center justify-center mx-auto transition-all duration-300 shadow-lg hover:shadow-[0_4px_15px_rgba(255,130,90,0.4)] group">
                Contact Designer
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <footer className=" text-gray-300 py-5  font-satoshi">
        <div className="container mx-auto text-center">
          <p className="text-sm ">
            © 2024 Connecting creative talent with endless possibilities ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
