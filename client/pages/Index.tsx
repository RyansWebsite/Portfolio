import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useViewMode } from "@/context/ViewModeContext";

// Fade-in image component for portfolio grid (mobile)
function FadeInImage({ src, alt, className }: { src: string; alt: string; className: string }) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`${className} transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    />
  );
}

export default function Index() {
  const navigate = useNavigate();
  const { viewMode } = useViewMode();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToContact = () => {
    navigate("/about#contact");
  };

  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="Homepage" />

      {/* Mobile Layout */}
      <main className={`px-4 pb-16 ${viewMode === "mobile" ? "block" : viewMode === "desktop" ? "hidden" : "md:hidden"}`}>
        {/* Mobile Hero - Photo and Name */}
        <Link to="/about" className="block mb-6 rounded-2xl overflow-hidden shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)]">
          <img
            src="images/LinkedIn Photo.jpg"
            alt="Ryan Anderson"
            className="w-full h-48 object-cover object-top"
          />
          <div className="bg-[#1E1E1E] p-3">
            <h2 className="text-[#E0E0E0] font-bakbak text-lg text-center">Ryan Anderson</h2>
          </div>
        </Link>

        {/* Mobile 2x2 Navigation Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/video" className="block rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden">
            <img src="images/o video 1.png" alt="Video" className="w-full h-32 object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-sm text-center">Video</h3>
            </div>
          </Link>
          <Link to="/motion-graphics" className="block rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden">
            <img src="images/o motion 2.png" alt="Motion Graphics" className="w-full h-32 object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-sm text-center">Motion Graphics</h3>
            </div>
          </Link>
          <Link to="/graphic-design" className="block rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden">
            <img src="images/o design 1.png" alt="Graphic Design" className="w-full h-32 object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-sm text-center">Graphic Design</h3>
            </div>
          </Link>
          <Link to="/resume" className="block rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden">
            <img src="images/o resume 1.png" alt="Resume" className="w-full h-32 object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-sm text-center">Resume</h3>
            </div>
          </Link>
        </div>

        {/* Scroll for more indicator */}
        <div className={`flex flex-col items-center py-16 transition-opacity duration-500 ${hasScrolled ? "opacity-0" : "opacity-30"}`}>
          <p className="text-white font-bakbak text-sm mb-2">Scroll for more</p>
          <span className="text-white text-lg">▼</span>
        </div>

        {/* Mobile Photo Grid - Pattern: 1, 2, 1, 1, 2 repeating */}
        <div className="space-y-4">
          {/* 2 - swapped: 02 & 03 now large, 01 small */}
          <FadeInImage src="images/portfolio-02.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 2 */}
          <div className="grid grid-cols-2 gap-4">
            <FadeInImage src="images/portfolio-01.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
            <FadeInImage src="images/portfolio-03.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
          </div>
          {/* 6 - swapped with 4 */}
          <FadeInImage src="images/portfolio-06.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 7 - swapped with 5 */}
          <FadeInImage src="images/portfolio-07.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 2 - 4 & 5 now small */}
          <div className="grid grid-cols-2 gap-4">
            <FadeInImage src="images/portfolio-04.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
            <FadeInImage src="images/portfolio-05.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
          </div>
          {/* 1 */}
          <FadeInImage src="images/portfolio-08.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 9 - now large */}
          <FadeInImage src="images/portfolio-09.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 2 - 10 & 11 now paired */}
          <div className="grid grid-cols-2 gap-4">
            <FadeInImage src="images/portfolio-10.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
            <FadeInImage src="images/portfolio-11.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
          </div>
          {/* 13 - swapped with 12 */}
          <FadeInImage src="images/portfolio-13.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 14 - now big, between swapped 12 & 13 */}
          <FadeInImage src="images/portfolio-14.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 12 & 19 */}
          <div className="grid grid-cols-2 gap-4">
            <FadeInImage src="images/portfolio-12.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
            <FadeInImage src="images/portfolio-19.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
          </div>
          {/* 16 - big */}
          <FadeInImage src="images/portfolio-16.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 15 - now big (swapped with 17) */}
          <FadeInImage src="images/portfolio-15.jpg" alt="Portfolio" className="w-full h-44 object-cover rounded-lg" />
          {/* 17 & 18 */}
          <div className="grid grid-cols-2 gap-4">
            <FadeInImage src="images/portfolio-17.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
            <FadeInImage src="images/portfolio-18.jpg" alt="Portfolio" className="w-full aspect-square object-cover rounded-lg" />
          </div>
        </div>

        {/* Mobile Return to Top */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToTop}
            className="px-6 py-2.5 bg-lime rounded-2xl text-navy font-bakbak text-lg shadow-[2px_5px_5px_0_rgba(0,0,0,0.57)]"
          >
            Return to top
          </button>
        </div>
      </main>

      {/* Desktop Layout */}
      <main className={`px-8 lg:px-12 max-w-7xl mx-auto pb-16 ${viewMode === "desktop" ? "block" : viewMode === "mobile" ? "hidden" : "hidden md:block"}`}>
        {/* Hero Section */}
        <div className="flex flex-row gap-0 mb-12 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] rounded-l-2xl rounded-r-2xl overflow-hidden h-[420px] lg:h-[450px]">
          <Link to="/about" className="w-1/2 flex flex-col cursor-pointer">
            <img
              src="images/LinkedIn Photo.jpg"
              alt="Ryan Anderson"
              className="w-full flex-1 object-cover"
            />
            <div className="bg-[#1E1E1E] p-3">
              <h2 className="text-[#E0E0E0] font-bakbak text-2xl text-center">Ryan Anderson</h2>
            </div>
          </Link>
          <div className="w-1/2 bg-[#1E1E1E] p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#E0E0E0] font-aleo text-base leading-relaxed mb-6">
                Hi there, My name is Ryan! I Graduated from the University of Iowa with two degrees, one in{" "}
                <span className="underline">Cinema</span> and the other in <span className="underline">Marketing</span>.
                <br />
                <br />
                One thing to know about me is how much I enjoy learning. Ever since I was young I was obsessed with
                picking up new hobbies and self-teaching new skills! Each month is an opportunity for myself to expand
                my knowledge, learn a new program, and meet new people.
                <br />
                <br />
                At the end of the day I want to create a meaningful impact through creative and analytical thinking. If
                you are interested in working together in the future, please feel free to reach out!
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-end pr-6">
              <button
                onClick={goToContact}
                className="px-6 py-3 bg-lime rounded-2xl text-navy font-bakbak text-lg md:text-xl shadow-[5px_5px_6.6px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[5px_5px_6.6px_0_rgba(0,0,0,0.25),0_0_12px_rgba(185,255,102,0.6)]"
              >
                Email Me!
              </button>
            </div>
          </div>
        </div>

        {/* Icon Buttons Grid */}
        <div className="grid grid-cols-4 gap-8 lg:gap-14 mb-12">
          <Link to="/video" className="group flex flex-col rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[4px_8px_12px_0_rgba(0,0,0,0.7)]">
            <img src="images/o video 1.png" alt="Video" className="w-full object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-lg lg:text-2xl text-center">Video</h3>
            </div>
          </Link>
          <Link to="/motion-graphics" className="group flex flex-col rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[4px_8px_12px_0_rgba(0,0,0,0.7)]">
            <img src="images/o motion 2.png" alt="Motion Graphics" className="w-full object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-lg lg:text-2xl text-center">Motion Graphics</h3>
            </div>
          </Link>
          <Link to="/graphic-design" className="group flex flex-col rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[4px_8px_12px_0_rgba(0,0,0,0.7)]">
            <img src="images/o design 1.png" alt="Graphic Design" className="w-full object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-lg lg:text-2xl text-center">Graphic Design</h3>
            </div>
          </Link>
          <Link to="/resume" className="group flex flex-col rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[4px_8px_12px_0_rgba(0,0,0,0.7)]">
            <img src="images/o resume 1.png" alt="Resume" className="w-full object-cover" />
            <div className="bg-[#1E1E1E] p-2">
              <h3 className="text-[#E0E0E0] font-bakbak text-lg lg:text-2xl text-center">Resume</h3>
            </div>
          </Link>
        </div>

        {/* Photo Grid */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-8">
            <img src="images/portfolio-01.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
            <img src="images/portfolio-02.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-8">
            <img src="images/portfolio-03.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
            <img src="images/portfolio-04.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
            <img src="images/portfolio-05.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-8">
            <img src="images/portfolio-06.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
            <img src="images/portfolio-07.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="images/portfolio-08.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover" />
              {/* Hidden easter egg button - disc golf bag overlay */}
              <Link to="/easter-egg" className="absolute bottom-[5%] right-0 w-[28%] cursor-pointer group" aria-label="Hidden easter egg">
                <img src="images/Bag.png" alt="" className="w-full h-auto group-hover:animate-[delayedGlow_5s_ease-in-out_forwards]" />
              </Link>
            </div>
            <img src="images/portfolio-09.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-3 gap-8">
            <img src="images/portfolio-10.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
            <img src="images/portfolio-11.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
            <img src="images/portfolio-12.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
          </div>

          {/* Row 6 */}
          <div className="grid grid-cols-2 gap-8">
            <img src="images/portfolio-13.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
            <img src="images/portfolio-14.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
          </div>

          {/* Row 7 */}
          <div className="grid grid-cols-2 gap-8">
            <img src="images/portfolio-15.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
            <img src="images/portfolio-16.jpg" alt="Portfolio" className="w-full h-64 lg:h-96 object-cover rounded-2xl" />
          </div>

          {/* Row 8 */}
          <div className="grid grid-cols-3 gap-8">
            <img src="images/portfolio-17.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
            <img src="images/portfolio-18.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
            <img src="images/portfolio-19.jpg" alt="Portfolio" className="w-full h-48 lg:h-64 object-cover rounded-2xl" />
          </div>
        </div>

        {/* Return to Top Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToTop}
            className="px-8 py-3 bg-lime rounded-2xl text-navy font-bakbak text-xl shadow-[2px_5px_5px_0_rgba(0,0,0,0.57)] transition-all duration-300 hover:scale-105 hover:shadow-[2px_5px_5px_0_rgba(0,0,0,0.57),0_0_12px_rgba(185,255,102,0.6)]"
          >
            Return to top
          </button>
        </div>
      </main>
    </div>
  );
}
