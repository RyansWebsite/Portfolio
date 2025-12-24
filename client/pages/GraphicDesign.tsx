import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useViewMode } from "@/context/ViewModeContext";

// Fade-in card component for design projects (mobile)
function FadeInCard({
  project,
  imageClass = ""
}: {
  project: { image: string; title: string };
  imageClass?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`aspect-square rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden flex flex-col transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative overflow-hidden bg-[#1E1E1E] flex-1">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover ${imageClass}`}
        />
      </div>
      <div className="bg-[#1E1E1E] p-2 shrink-0">
        <h3 className="text-white font-bakbak text-xs text-center">{project.title}</h3>
      </div>
    </div>
  );
}

export default function GraphicDesign() {
  const { viewMode } = useViewMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      image: "images/RDA Butterfly.png",
      title: "RDA Butterfly",
      description:
        "The official logo of Ryan Daniel Anderson features a butterfly, with each of his initials forming the wings of the creature.",
      highlightColor: "#D93636",
      imageClass: "scale-[1.1]",
    },
    {
      image: "images/Anderson Brand.png",
      title: "Anderson Brand",
      description: "A conceptual cattle branding logo for the Anderson family",
      highlightColor: "#E8E8E8",
      imageClass: "scale-[1.1]",
    },
    {
      image: "images/ActivePeak 1.0.png",
      title: "ActivePeak 1.0",
      description:
        'The first modern ActivePeak logo after a long hiatus, featuring a refreshed color palette and a mountain symbol built from the "A" and "P."',
      highlightColor: "#6B8E5A",
    },
    {
      image: "images/IWetMyPlants.jpg",
      title: "I Wet My Plants",
      description:
        "A playful logo design featuring a watering can and plant motif.",
      highlightColor: "#6ADCFF",
    },
    {
      image: "images/WM DETAIL-100.jpg",
      title: "WM Detailing STL",
      description: "A logo designed for WM Detailing in St. Louis Missouri",
      highlightColor: "#FF6666",
    },
    {
      image: "images/ActivePeak 2.0.jpg",
      title: "ActivePeak 2.0",
      description:
        "ActivePeak 2.0 was designed with the purpose of being a multiplatform design easy to view from mobile to desktop platforms",
      highlightColor: "#7CFC00",
    },
    {
      image: "images/ActivePeak Retro.jpg",
      title: "ActivePeak Retro",
      description:
        "This logo was based of the old energy star logo to give ActivePeak a retro feeling. This design was made for use in a motion graphic",
      highlightColor: "#5BC0EB",
    },
    {
      image: "images/Hawkeyes.png",
      title: "Hawkeyes",
      description:
        "A design inspired by the Iowa Hawkeyes.",
      highlightColor: "#FFCD00",
    },
    {
      image: "images/Iowa Podcast 1.0.png",
      title: "Iowa Podcast 1.0",
      description: "The first version of the Heroic Herstories podcast logo for Iowa Health Care",
      highlightColor: "#F5C542",
    },
    {
      image: "images/Extinction 1-100.jpg",
      title: "Extinction",
      description: 'A conceptual logo for a sports team call "Extinction"',
      highlightColor: "#E8E8E8",
    },
    {
      image: "images/Boyd Tower-100.jpg",
      title: "Boyd Tower",
      description: "A conceptual logo for the famous Boyd Tower that where Iowa Health Care began in 1874",
      highlightColor: "#F5D000",
    },
    {
      image: "images/Iowa Podcast 2.0.png",
      title: "Iowa Podcast 2.0",
      description:
        "The second version of the Heroic Herstories podcast logo with a more simplified look while still highlighting Iowa City the home of Iowa Health Care",
      highlightColor: "#F5C542",
      imageClass: "scale-[1.1]",
    },
    {
      image: "images/design center.png",
      title: "Design Center",
      description:
        "A logo design for a design center.",
      highlightColor: "#E8E8E8",
      imageClass: "scale-[1.1]",
    },
    {
      image: "images/WOLVES-100.jpg",
      title: "Wolves",
      description: 'A conceptual design for a sports team called "The Wolves"',
      highlightColor: "#8B9DAE",
      imageClass: "scale-[1.25]",
    },
    {
      image: "images/VALR.png",
      title: "VALR Productions",
      description:
        "I designed the official logo for the VALR Productions group along with various variants for social media use and watermarking",
      highlightColor: "#E8E8E8",
      imageClass: "scale-[1.35]",
    },
    {
      image: "images/Orion.png",
      title: "Orion",
      description: "Based on the design of old tech giant logos",
      highlightColor: "#00BFFF",
      imageClass: "object-[center_15%]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="Design" />

      {/* Mobile Layout */}
      <main className={`px-4 pb-16 ${viewMode === "mobile" ? "block" : viewMode === "desktop" ? "hidden" : "md:hidden"}`}>
        {/* Mobile Hero - Graphic Design Card */}
        <Link to="/" className="block mb-6 rounded-2xl overflow-hidden shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)]">
          <img
            src="images/o design 1.png"
            alt="Graphic Design"
            className="w-full h-48 object-cover"
          />
          <div className="bg-[#1E1E1E] p-3">
            <h2 className="text-[#E0E0E0] font-bakbak text-lg text-center">Graphic Design</h2>
          </div>
        </Link>

        {/* Mobile Projects Grid - 2 columns */}
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <FadeInCard
              key={index}
              project={project}
              imageClass={'imageClass' in project ? project.imageClass : ''}
            />
          ))}
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
          <Link to="/" className="w-1/2 flex flex-col cursor-pointer">
            <img
              src="images/o design 1.png"
              alt="Graphic Design"
              className="w-full flex-1 object-cover"
            />
            <div className="bg-[#1E1E1E] p-3">
              <h2 className="text-[#E0E0E0] font-bakbak text-2xl text-center">Graphic Design</h2>
            </div>
          </Link>
          <div className="w-1/2 bg-[#1E1E1E] p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#E0E0E0] font-aleo text-base leading-relaxed mb-6">
                I've been designing for the past seven years, constantly evolving my style and building projects from
                scratch. My experience ranges from creating simple, clean logos for small businesses to intricate sports
                team designs with detailed concepts and meaning behind them.
                <br />
                <br />
                What I love about graphic design is the challenge of bringing an idea to life visually. Each logo, brand
                identity, or graphic I create is tailored to its purpose—whether it's for a personal brand, a conceptual
                project, or actual company use. It's all about finding the right balance between creativity and clarity.
                <br />
                <br />
                Take a look at the work below to see the range of designs I've developed over the years!
              </h2>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-64 lg:h-72 object-cover ${'imageClass' in project ? project.imageClass : ''}`}
                />
              </div>
              <div className="bg-[#1E1E1E]">
                <div className="h-2 w-full" style={{ backgroundColor: project.highlightColor }}></div>
                <div className="p-4 space-y-2 min-h-[100px]">
                  <h3 className="text-white font-bakbak text-base">{project.title}</h3>
                  <p className="text-[#C7C7C7] font-bakbak text-sm text-pretty">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
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
