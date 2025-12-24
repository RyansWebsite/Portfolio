import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useViewMode } from "@/context/ViewModeContext";

// Video card component with fade-in animation
function VideoCard({
  project,
  color
}: {
  project: { image: string; title: string; description: string; link: string };
  color: string;
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
        <div className="h-1.5 w-full" style={{ backgroundColor: color }}></div>
        <div className="p-4 space-y-1">
          <h3 className="text-white font-bakbak text-base">{project.title}</h3>
          <p className="text-[#C7C7C7] font-bakbak text-sm">{project.description}</p>
        </div>
      </div>
    </a>
  );
}

export default function Video() {
  const { viewMode } = useViewMode();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const shortFilms = [
    {
      image: "/images/Call.jpg",
      title: "CALL",
      description: "After a stressful pitch Sid receives the harsh truth about putting in hard work",
      link: "https://www.youtube.com/watch?v=m12Z1AIQHmQ",
    },
    {
      image: "/images/Split  by a Street.jpg",
      title: "Split by a Street",
      description: "Exposing the hypocrisy of Iowa City's night life despite a neighboring drug free campus",
      link: "https://www.youtube.com/watch?v=EvymILC6b9w",
    },
    {
      image: "/images/Elsewhere.jpg",
      title: "Elsewhere",
      description: "The task of studying can be daunting, in this film one can experience it with ADHD",
      link: "https://www.youtube.com/watch?v=m6XJLnGNRSo",
    },
    {
      image: "/images/The timeless day.jpg",
      title: "The Timeless Day",
      description: "Exploring the reality one may expect whilst living with dementia",
      link: "https://www.youtube.com/watch?v=GkcJoavkDsw",
    },
  ];

  const workProjects = [
    {
      image: "/images/Design Center Sizzle Reel.jpg",
      title: "Design Center Sizzle Reel",
      description: "Known for their production expertise this reel markets the team's skills to clients",
      link: "https://www.youtube.com/watch?v=19XneE1GSyM",
    },
    {
      image: "/images/Resident Graduation 2025.jpg",
      title: "Resident Graduation 2025",
      description: "Every year clinical residents graduate. In this reel the day's emotions are captured",
      link: "https://www.youtube.com/watch?v=YpXBx1r5vqk",
    },
    {
      image: "/images/Chief Tour 1.jpg",
      title: "Iowa Chief Resident Tour",
      description: "The chief residents give a detailed tour of what life at Iowa Health Care is like",
      link: "https://www.youtube.com/watch?v=MAtrYnuFrgw",
    },
    {
      image: "/images/department contacts 3.jpg",
      title: "Internal Med Department Contacts",
      description: "Stacy & Abbey explain how they assist residents in their day-to-day admin roles",
      link: "https://www.youtube.com/watch?v=cyI1kRWhIVg",
    },
  ];

  const personalProjects = [
    {
      image: "/images/Bynum Wedding.jpg",
      title: "The Bynum Wedding",
      description: "Celebrating the unforgettable marriage of Becky and Mason Bynum",
      link: "https://www.youtube.com/watch?v=qdSjn5u-5z4",
    },
    {
      image: "/images/without us.jpg",
      title: "Without Us",
      description: "This Cinematic explores what life would look like in a world without humanity",
      link: "https://www.youtube.com/watch?v=VASoxwoP6BM",
    },
    {
      image: "/images/how youtube changed my life.jpg",
      title: "How YouTube Changed My Life",
      description: "ActivePeak Reflects on his history as a creator and his friendships",
      link: "https://www.youtube.com/watch?v=A6dY5T5RFDk",
    },
    {
      image: "/images/Mcstuffins Murder.jpg",
      title: "The McStuffins Murder",
      description: "Two Detectives investigate the murder of a stuffed bear when things suddenly twist",
      link: "https://www.youtube.com/watch?v=dg0NzkYxVFA",
    },
  ];

  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="Video" />

      {/* Mobile Layout */}
      <main className={`px-4 pb-16 ${viewMode === "mobile" ? "block" : viewMode === "desktop" ? "hidden" : "md:hidden"}`}>
        {/* Mobile Hero - Video Card */}
        <Link to="/" className="block mb-6 rounded-2xl overflow-hidden shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)]">
          <img
            src="/images/o video 1.png"
            alt="Video"
            className="w-full h-48 object-cover"
          />
          <div className="bg-[#1E1E1E] p-3">
            <h2 className="text-[#E0E0E0] font-bakbak text-lg text-center">Video</h2>
          </div>
        </Link>

        {/* Mobile Navigation Buttons */}
        <div className="flex gap-3 mb-6 justify-center">
          <button
            onClick={() => scrollToSection("mobile-short-films")}
            className="px-4 py-2 rounded-full font-bakbak text-sm transition-all duration-300 bg-[#5BC0EB] text-navy"
          >
            Short-films
          </button>
          <button
            onClick={() => scrollToSection("mobile-work-projects")}
            className="px-4 py-2 rounded-full font-bakbak text-sm transition-all duration-300 bg-[#F5C542] text-navy"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("mobile-personal-projects")}
            className="px-4 py-2 rounded-full font-bakbak text-sm transition-all duration-300 bg-[#7C55BA] text-white"
          >
            Personal
          </button>
        </div>

        {/* Mobile Short Films Section */}
        <section id="mobile-short-films" className="mb-8">
          <div className="space-y-4">
            {shortFilms.map((film, index) => (
              <VideoCard
                key={index}
                project={film}
                color="#5BC0EB"
              />
            ))}
          </div>
        </section>

        {/* Mobile Work Projects Section */}
        <section id="mobile-work-projects" className="mb-8">
          <div className="space-y-4">
            {workProjects.map((project, index) => (
              <VideoCard
                key={index}
                project={project}
                color="#F5C542"
              />
            ))}
          </div>
        </section>

        {/* Mobile Personal Projects Section */}
        <section id="mobile-personal-projects" className="mb-8">
          <div className="space-y-4">
            {personalProjects.map((project, index) => (
              <VideoCard
                key={index}
                project={project}
                color="#7C55BA"
              />
            ))}
          </div>
        </section>

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
              src="/images/o video 1.png"
              alt="Video"
              className="w-full flex-1 object-cover"
            />
            <div className="bg-[#1E1E1E] p-3">
              <h2 className="text-[#E0E0E0] font-bakbak text-2xl text-center">Video</h2>
            </div>
          </Link>
          <div className="w-1/2 bg-[#1E1E1E] p-4 lg:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-[#E0E0E0] font-aleo text-base leading-relaxed mb-6">
                Video has become how most people learn, shop, and make decisions—and I've shaped my education and work
                around meeting that need. Studying Cinema and Marketing taught me how to capture attention and tell
                stories that resonate.
                <br />
                <br />
                I love every part of the process, but cinematography is where I really come alive. There's something
                special about finding the right shot that transforms a scene and conveys emotion in a way that sticks
                with viewers.
                <br />
                <br />
                Over the last few years, my work has fallen into three categories: short films, professional projects,
                and personal passion pieces. Scroll through below or use the buttons to jump to what interests you
                most!
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-end pr-6 pb-2">
              <button
                onClick={() => scrollToSection("short-films")}
                className="px-5 py-2.5 bg-[#5BC0EB] rounded-2xl text-navy font-bakbak text-base shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[3px_3px_4px_0_rgba(0,0,0,0.25),0_0_10px_rgba(91,192,235,0.6)]"
              >
                Short Films
              </button>
              <button
                onClick={() => scrollToSection("work-projects")}
                className="px-5 py-2.5 bg-[#F5C542] rounded-2xl text-navy font-bakbak text-base shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[3px_3px_4px_0_rgba(0,0,0,0.25),0_0_10px_rgba(245,197,66,0.6)]"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("personal-projects")}
                className="px-5 py-2.5 bg-[#7C55BA] rounded-2xl text-white font-bakbak text-base shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[3px_3px_4px_0_rgba(0,0,0,0.25),0_0_10px_rgba(124,85,186,0.6)]"
              >
                Personal
              </button>
            </div>
          </div>
        </div>

        {/* Short Films */}
        <section id="short-films" className="mb-12">
          <div className="grid grid-cols-2 gap-12">
            {shortFilms.map((film, index) => (
              <a
                key={index}
                href={film.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img src={film.image} alt={film.title} className="w-full h-64 lg:h-72 object-cover" />
                </div>
                <div className="bg-[#1E1E1E] flex-1 flex flex-col">
                  <div className="h-2 w-full bg-[#5BC0EB]"></div>
                  <div className="p-4 space-y-2 flex-1">
                    <h3 className="text-white font-bakbak text-base">{film.title}</h3>
                    <p className="text-[#C7C7C7] font-bakbak text-sm text-pretty">{film.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Work Projects */}
        <section id="work-projects" className="mb-12">
          <div className="grid grid-cols-2 gap-12">
            {workProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 lg:h-72 object-cover" />
                </div>
                <div className="bg-[#1E1E1E] flex-1 flex flex-col">
                  <div className="h-2 w-full bg-[#F5C542]"></div>
                  <div className="p-4 space-y-2 flex-1">
                    <h3 className="text-white font-bakbak text-base">{project.title}</h3>
                    <p className="text-[#C7C7C7] font-bakbak text-sm text-pretty">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section id="personal-projects" className="mb-12">
          <div className="grid grid-cols-2 gap-12">
            {personalProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-lg shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-64 lg:h-72 object-cover" />
                </div>
                <div className="bg-[#1E1E1E] flex-1 flex flex-col">
                  <div className="h-2 w-full bg-[#7C55BA]"></div>
                  <div className="p-4 space-y-2 flex-1">
                    <h3 className="text-white font-bakbak text-base">{project.title}</h3>
                    <p className="text-[#C7C7C7] font-bakbak text-sm text-pretty">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

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
