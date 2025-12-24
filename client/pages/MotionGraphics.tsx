import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useViewMode } from "@/context/ViewModeContext";

// Motion card component with fade-in animation (mobile)
function MotionCard({
  project
}: {
  project: { image: string; title: string; description: string; link: string; highlightColor: string };
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
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
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="relative">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      </div>
      <div className="bg-[#1E1E1E]">
        <div className="h-1.5 w-full" style={{ backgroundColor: project.highlightColor }}></div>
        <div className="p-4 space-y-1">
          <h3 className="text-white font-bakbak text-base">{project.title}</h3>
          <p className="text-[#C7C7C7] font-bakbak text-sm">{project.description}</p>
        </div>
      </div>
    </a>
  );
}

export default function MotionGraphics() {
  const { viewMode } = useViewMode();

  const projects = [
    {
      image: "/images/Des Moines Major.jpg",
      title: "Des Moines Major - Counter Strike",
      description: "This is a concept trailer for a Counter Strike Major event in Iowa's Capital, Des Moines",
      link: "https://www.youtube.com/watch?v=m12Z1AIQHmQ",
      highlightColor: "#7C55BA",
    },
    {
      image: "/images/ActivePeak Hacked.jpg",
      title: "ActivePeak Hacked Boot-Up",
      description: "Oh no... It seems your old windows 98 computer picked up a virus the last time you used it",
      link: "https://www.youtube.com/watch?v=EvymILC6b9w",
      highlightColor: "#FD1E03",
    },
    {
      image: "/images/ActivePeak Connecting CRT.jpg",
      title: "ActivePeak Connecting - CRT",
      description: "This intro was created to emulate the look and recognizable characteristics of an old CRT TV",
      link: "https://www.youtube.com/watch?v=m6XJLnGNRSo",
      highlightColor: "#45428D",
    },
    {
      image: "/images/Gradiant Shapes 1.jpg",
      title: "The Timeless Day",
      description:
        "Though a beginner piece, these shapes demonstrate a distinct stylistic approach suited for modern motion graphics across all media.",
      link: "https://www.youtube.com/watch?v=GkcJoavkDsw",
      highlightColor: "#00DF21",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="Motion" />

      {/* Mobile Layout */}
      <main className={`px-4 pb-16 ${viewMode === "mobile" ? "block" : viewMode === "desktop" ? "hidden" : "md:hidden"}`}>
        {/* Mobile Hero - Motion Graphics Card */}
        <Link to="/" className="block mb-6 rounded-2xl overflow-hidden shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)]">
          <img
            src="/images/o motion 2.png"
            alt="Motion Graphics"
            className="w-full h-48 object-cover"
          />
          <div className="bg-[#1E1E1E] p-3">
            <h2 className="text-[#E0E0E0] font-bakbak text-lg text-center">Motion Graphics</h2>
          </div>
        </Link>

        {/* Mobile Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <MotionCard key={index} project={project} />
          ))}
        </div>
      </main>

      {/* Desktop Layout */}
      <main className={`px-8 lg:px-12 max-w-7xl mx-auto pb-16 ${viewMode === "desktop" ? "block" : viewMode === "mobile" ? "hidden" : "hidden md:block"}`}>
        {/* Hero Section */}
        <div className="flex flex-row gap-0 mb-12 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] rounded-l-2xl rounded-r-2xl overflow-hidden h-[420px] lg:h-[450px]">
          <Link to="/" className="w-1/2 flex flex-col cursor-pointer">
            <img
              src="/images/o motion 2.png"
              alt="Motion Graphics"
              className="w-full flex-1 object-cover"
            />
            <div className="bg-[#1E1E1E] p-3">
              <h2 className="text-[#E0E0E0] font-bakbak text-2xl text-center">Motion Graphics</h2>
            </div>
          </Link>
          <div className="w-1/2 bg-[#1E1E1E] p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#E0E0E0] font-aleo text-base leading-relaxed mb-6">
                Motion graphics are what elevate a project from good to unforgettable. They add atmosphere, depth, and
                that extra layer of polish that makes video feel complete. Learning motion graphics has been one of my
                more recent achievements, and it's opened up a whole new way to enhance my work.
                <br />
                <br />
                The process feels like digital scrapbooking—pulling together visual pieces, layering them, and creating
                something that's exciting, nostalgic, or just plain eye-catching. My favorite style to work with? The
                old CRT and LCD monitor look. There's something about that retro aesthetic that adds character and
                draws people in.
                <br />
                <br />
                Check out the motion graphics work below to see how I've used animation to bring projects to life!
              </h2>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[4px_8px_12px_0_rgba(0,0,0,0.7)]"
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 lg:h-72 object-cover" />
              </div>
              <div className="bg-[#1E1E1E]">
                <div className="h-2 w-full" style={{ backgroundColor: project.highlightColor }}></div>
                <div className="p-4 space-y-2 min-h-[100px]">
                  <h3 className="text-white font-bakbak text-base">{project.title}</h3>
                  <p className="text-[#C7C7C7] font-bakbak text-sm text-pretty">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
