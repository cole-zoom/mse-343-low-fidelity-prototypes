"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const prototypes = [
    { name: "Locaylo", path: "/locaylo-stop-motion" },
    { name: "Local Catch", path: "/pokemon-go" },
    { name: "Roman Roulette", path: "/roman-roulette" },
    { name: "Activity Finder", path: "/tinder" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-white border-[3px] border-[#2d2d2d] rounded-[45%_55%_50%_50%/60%_40%_60%_40%] hover:bg-[#fafaf8] transition-colors shadow-[2px_2px_0px_#2d2d2d] rotate-[2deg] paper-font"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-[#2d2d2d] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-[#2d2d2d] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-full bg-[#2d2d2d] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#f5f5f3] text-[#2d2d2d] shadow-[4px_0px_8px_rgba(0,0,0,0.15)] border-l-[3px] border-[#2d2d2d] z-40 transition-transform duration-300 paper-font ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8 mt-16">
          <h2 className="text-3xl font-bold mb-8 border-b-[2px] border-[#2d2d2d] pb-4 tracking-wide">
            Navigation
          </h2>

          <nav className="space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 border-[2px] border-[#2d2d2d] bg-white rounded-[50%_50%_45%_55%/55%_55%_45%_45%] hover:bg-[#fafaf8] transition-colors shadow-[1px_1px_0px_#2d2d2d] text-lg font-semibold rotate-[-1deg]"
            >
              🏠 Home
            </Link>

            <div className="pt-4 pb-2 px-4 text-base font-bold text-[#2d2d2d] opacity-60 tracking-wide">
              PROTOTYPES
            </div>

            {prototypes.map((prototype, index) => (
              <Link
                key={prototype.path}
                href={prototype.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 border-[2px] border-[#2d2d2d] bg-white rounded-[${
                  index % 2 === 0 ? "45%_55%_50%_50%/60%_40%_60%_40%" : "55%_45%_60%_40%/50%_50%_50%_50%"
                }] hover:bg-[#fafaf8] transition-colors shadow-[1px_1px_0px_#2d2d2d] text-lg font-semibold rotate-[${
                  index % 2 === 0 ? "1deg" : "-1deg"
                }]`}
              >
                {prototype.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

