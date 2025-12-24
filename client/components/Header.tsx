import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useViewMode } from "@/context/ViewModeContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { viewMode } = useViewMode();

  // Determine if we should use compact mobile styling
  const forceMobile = viewMode === "mobile";
  const forceDesktop = viewMode === "desktop";

  return (
    <>
      <header className="bg-[#1A1A24]">
        {/* Mobile Header - shown on actual mobile screens OR when mobile view forced */}
        <div className={`flex justify-between items-center max-w-7xl mx-auto px-4 h-14 py-2 ${forceMobile ? "flex" : forceDesktop ? "hidden" : "flex md:hidden"}`}>
          <Link to="/" className="h-full flex items-center group">
            <img
              src="/images/RDA Green logo.png"
              alt="Ryan Anderson Logo"
              className="h-full w-auto object-contain object-left transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(185,255,102,0.5)]"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex flex-col justify-center items-center z-[60] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(185,255,102,0.5)] w-7 h-7"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block bg-[#D9D9D9] transition-all duration-300 w-7 h-[2px] ${menuOpen ? 'absolute rotate-45' : 'mb-1.5'}`}></span>
            <span className={`block bg-[#D9D9D9] transition-all duration-300 w-7 h-[2px] ${menuOpen ? 'opacity-0' : 'mb-1.5'}`}></span>
            <span className={`block bg-[#D9D9D9] transition-all duration-300 w-7 h-[2px] ${menuOpen ? 'absolute -rotate-45' : ''}`}></span>
          </button>
        </div>

        {/* Desktop Header - shown on larger screens OR when desktop view forced */}
        <div className={`flex justify-between items-center max-w-7xl mx-auto px-8 lg:px-12 h-24 lg:h-28 py-2 ${forceDesktop ? "flex" : forceMobile ? "hidden" : "hidden md:flex"}`}>
          <Link to="/" className="h-full flex items-center group">
            <img
              src="/images/RDA Green logo.png"
              alt="Ryan Anderson Logo"
              className="h-full w-auto object-contain object-left transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(185,255,102,0.5)]"
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative flex flex-col justify-center items-center z-[60] transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(185,255,102,0.5)] w-12 lg:w-14 h-12 lg:h-14"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block bg-[#D9D9D9] transition-all duration-300 w-12 lg:w-14 h-[3px] ${menuOpen ? 'absolute rotate-45' : 'mb-2'}`}></span>
            <span className={`block bg-[#D9D9D9] transition-all duration-300 w-12 lg:w-14 h-[3px] ${menuOpen ? 'opacity-0' : 'mb-2'}`}></span>
            <span className={`block bg-[#D9D9D9] transition-all duration-300 w-12 lg:w-14 h-[3px] ${menuOpen ? 'absolute -rotate-45' : ''}`}></span>
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
