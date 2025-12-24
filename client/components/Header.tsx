import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useViewMode } from "@/context/ViewModeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { viewMode } = useViewMode();

  // Determine if we should use compact mobile styling
  const isMobileView = viewMode === "mobile";

  return (
    <>
      <header className="bg-[#1A1A24]">
        <div className={`flex justify-between items-center max-w-7xl mx-auto ${isMobileView ? "px-4 h-20 py-2" : "px-8 lg:px-12 h-24 md:h-28 py-2"}`}>
          <Link to="/" className={`h-full flex items-center group ${isMobileView ? "-ml-4" : ""}`}>
            <img
              src="/images/RDA Green logo.png"
              alt="Ryan Anderson Logo"
              className="h-full w-auto object-contain object-left transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(185,255,102,0.5)]"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative flex flex-col justify-center items-center z-[60] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(185,255,102,0.5)] ${isMobileView ? "w-9 h-9" : "w-12 md:w-14 h-12 md:h-14"}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block bg-[#D9D9D9] transition-all duration-300 ${isMobileView ? "w-9 h-[2.5px]" : "w-12 md:w-14 h-[3px]"} ${menuOpen ? 'absolute rotate-45' : isMobileView ? 'mb-1.5' : 'mb-2'}`}></span>
            <span className={`block bg-[#D9D9D9] transition-all duration-300 ${isMobileView ? "w-9 h-[2.5px]" : "w-12 md:w-14 h-[3px]"} ${menuOpen ? 'opacity-0' : isMobileView ? 'mb-1.5' : 'mb-2'}`}></span>
            <span className={`block bg-[#D9D9D9] transition-all duration-300 ${isMobileView ? "w-9 h-[2.5px]" : "w-12 md:w-14 h-[3px]"} ${menuOpen ? 'absolute -rotate-45' : ''}`}></span>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
