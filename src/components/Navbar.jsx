import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full top-0 left-0 z-50 bg-black/60 backdrop-blur-lg px-4 py-2 ">
      <header className="mx-auto max-w-[1400px] rounded-lg border border-zinc-800 bg-zinc-900/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
        <div className="flex h-14 items-center justify-between px-6">
          <div className="flex items-center space-x-2 mr-4">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              <span className="hidden font-bold text-white sm:inline-block">
                Contentium
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center space-x-6 text-sm">
              <li>
                <Link
                  to="/dashboard"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/order"
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  Order
                </Link>
              </li>
            </ul>
          </nav>

          <div className="ml-auto hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="h-8 rounded-md bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white"
            >
              Login
            </Button>
            <Button className="h-8 rounded-md bg-zinc-100 text-black hover:bg-white">
              Creator Hub
            </Button>
          </div>

          <button
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="px-6 pb-4">
            <ul className="flex flex-col space-y-4 text-sm">
              <li>
                <Link
                  to="/resources"
                  className="text-zinc-400 transition-colors hover:text-white"
                  onClick={toggleMenu}
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-zinc-400 transition-colors hover:text-white"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-zinc-400 transition-colors hover:text-white"
                  onClick={toggleMenu}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-zinc-400 transition-colors hover:text-white"
                  onClick={toggleMenu}
                >
                  Docs
                </Link>
              </li>
              <li>
                <Button
                  variant="outline"
                  className="h-8 rounded-md bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white"
                  onClick={toggleMenu}
                >
                  Login
                </Button>
              </li>
              <li>
                <Button
                  className="h-8 rounded-md bg-zinc-100 text-black hover:bg-white"
                  onClick={toggleMenu}
                >
                  Creator Hub
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
