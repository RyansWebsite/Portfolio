import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useViewMode } from "@/context/ViewModeContext";

export default function About() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const location = useLocation();
  const { viewMode } = useViewMode();

  // Handle scroll to contact when coming from homepage
  useEffect(() => {
    if (location.hash === "#contact") {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (!element) return;

        // Custom smooth scroll with gentle pace
        const duration = 1800;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          // Sine ease-in-out for smooth acceleration/deceleration
          const ease = -(Math.cos(Math.PI * progress) - 1) / 2;
          window.scrollTo(0, startPosition + distance * ease);

          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }, 100);
    }
  }, [location]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (!element) return;

    const duration = 1800;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = -(Math.cos(Math.PI * progress) - 1) / 2;
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7bd25304-064d-4d57-8e3b-b43c3ae23d52",
          ...formData,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };
  return (
    <div className="min-h-screen bg-[#111117] text-white">
      <Header />
      <PageHeader title="About Me" />

      {/* Mobile Layout */}
      <main className={`px-4 pb-16 ${viewMode === "mobile" ? "block" : viewMode === "desktop" ? "hidden" : "md:hidden"}`}>
        {/* Mobile Hero - Photo and Name */}
        <Link to="/" className="block mb-0 rounded-t-2xl overflow-hidden shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)]">
          <img
            src="images/LinkedIn Photo.jpg"
            alt="Ryan Anderson"
            className="w-full h-48 object-cover object-top"
          />
          <div className="bg-[#1E1E1E] p-3">
            <h2 className="text-[#E0E0E0] font-bakbak text-lg text-center">About Me</h2>
          </div>
        </Link>

        {/* Mobile About Content */}
        <div className="bg-[#1E1E1E] rounded-b-2xl p-4 pt-5 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] relative z-10">
          <p className="text-[#E0E0E0] font-aleo text-sm leading-relaxed mb-4 text-pretty">
            Hi there, My name is Ryan! I Graduated from the University of Iowa with two degrees, one in{" "}
            <span className="underline">Cinema</span> and the other in <span className="underline">Marketing</span>.
          </p>
          <p className="text-[#E0E0E0] font-aleo text-sm leading-relaxed mb-4 text-pretty">
            One thing to know about me is how much I enjoy learning. Ever since I was young I was obsessed with
            picking up new hobbies and self-teaching new skills! Each month is an opportunity for myself to expand
            my knowledge, learn a new program, and meet new people.
          </p>
          <p className="text-[#E0E0E0] font-aleo text-sm leading-relaxed mb-6 text-pretty">
            At the end of the day I want to create meaningful a impact through creative and analytical thinking. If
            you are interested in working together in the future, please feel free to reach out!
          </p>

          {/* Email Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToContact}
              className="px-6 py-2.5 bg-lime rounded-2xl text-navy font-bakbak text-base shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)]"
            >
              Email Me!
            </button>
          </div>
        </div>

        {/* Mobile Stats Numbers */}
        <div className="flex flex-col gap-4 -mt-8 pt-12 pb-8 -mb-4 bg-[#1A1A24]">
          <div className="h-36 overflow-hidden flex items-center justify-center">
            <img src="images/9 alone.png" alt="9 Years of Video Editing" className="w-full scale-[2]" />
          </div>
          <div className="h-36 overflow-hidden flex items-center justify-center">
            <img src="images/7 alone.png" alt="7 Years of Graphic Design" className="w-full scale-[2]" />
          </div>
          <div className="h-36 overflow-hidden flex items-center justify-center">
            <img src="images/4 alone.png" alt="4 Years of Video Production" className="w-full scale-[2]" />
          </div>
        </div>

        {/* Mobile Contact Form */}
        <div id="contact" className="bg-[#1E1E1E] rounded-2xl p-4 shadow-[0_-4px_8px_0_rgba(0,0,0,0.4),2px_4px_4px_0_rgba(0,0,0,0.57)] relative z-10">
          <h2 className="text-[#E0E0E0] font-bakbak text-lg mb-4">Get in Touch</h2>

          {formStatus === "success" ? (
            <div className="text-lime font-bakbak text-base">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="mobile-name" className="block text-[#E0E0E0] font-bakbak text-xs mb-1">Name</label>
                <input
                  type="text"
                  id="mobile-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#E0E0E0] border border-[#c0c0c0] rounded-lg px-3 py-2 text-black font-bakbak text-sm focus:outline-none focus:border-lime shadow-[inset_3px_3px_10px_rgba(0,0,0,0.35)]"
                />
              </div>
              <div>
                <label htmlFor="mobile-email" className="block text-[#E0E0E0] font-bakbak text-xs mb-1">Email</label>
                <input
                  type="email"
                  id="mobile-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#E0E0E0] border border-[#c0c0c0] rounded-lg px-3 py-2 text-black font-bakbak text-sm focus:outline-none focus:border-lime shadow-[inset_3px_3px_10px_rgba(0,0,0,0.35)]"
                />
              </div>
              <div>
                <label htmlFor="mobile-message" className="block text-[#E0E0E0] font-bakbak text-xs mb-1">Message</label>
                <textarea
                  id="mobile-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#E0E0E0] border border-[#c0c0c0] rounded-lg px-3 py-2 text-black font-bakbak text-sm focus:outline-none focus:border-lime shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] resize-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="px-6 py-2.5 bg-lime rounded-2xl text-navy font-bakbak text-base shadow-[3px_3px_4px_0_rgba(0,0,0,0.25)] disabled:opacity-50"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {formStatus === "error" && (
                <p className="text-red-500 font-bakbak text-xs text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </main>

      {/* Desktop Layout */}
      <main className={`px-8 lg:px-12 max-w-7xl mx-auto pb-16 ${viewMode === "desktop" ? "block" : viewMode === "mobile" ? "hidden" : "hidden md:block"}`}>
        {/* Hero Section */}
        <div className="flex flex-row gap-0 shadow-[2px_4px_4px_0_rgba(0,0,0,0.57)] rounded-l-2xl rounded-r-2xl overflow-hidden relative z-10 h-[420px] lg:h-[450px]">
          <Link to="/" className="w-1/2 flex flex-col cursor-pointer">
            <img
              src="images/LinkedIn Photo.jpg"
              alt="Ryan Anderson"
              className="w-full flex-1 object-cover"
            />
            <div className="bg-[#1E1E1E] p-3">
              <h2 className="text-[#E0E0E0] font-bakbak text-2xl text-center">About Me</h2>
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
                onClick={scrollToContact}
                className="px-6 py-3 bg-lime rounded-2xl text-navy font-bakbak text-lg md:text-xl shadow-[5px_5px_6.6px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[5px_5px_6.6px_0_rgba(0,0,0,0.25),0_0_12px_rgba(185,255,102,0.6)]"
              >
                Email Me!
              </button>
            </div>
          </div>
        </div>

        {/* Stats Image */}
        <div className="overflow-hidden h-64 lg:h-80 -mt-4 -mb-4 relative z-0">
          <img
            src="images/974.png"
            alt="Years of experience stats"
            className="w-full object-cover object-center -translate-y-[25%]"
          />
        </div>

        {/* Contact Form */}
        <div id="contact" className="bg-[#1E1E1E] rounded-2xl p-8 lg:p-10 shadow-[0_-4px_8px_0_rgba(0,0,0,0.4),2px_4px_4px_0_rgba(0,0,0,0.57)] relative z-10">
          <h2 className="text-[#E0E0E0] font-bakbak text-2xl md:text-3xl mb-6">Get in Touch</h2>

          {formStatus === "success" ? (
            <div className="text-lime font-bakbak text-lg">
              Thanks for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-[#E0E0E0] font-bakbak text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#E0E0E0] border border-[#c0c0c0] rounded-lg px-4 py-3 text-black font-bakbak focus:outline-none focus:border-lime shadow-[inset_3px_3px_10px_rgba(0,0,0,0.35)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#E0E0E0] font-bakbak text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#E0E0E0] border border-[#c0c0c0] rounded-lg px-4 py-3 text-black font-bakbak focus:outline-none focus:border-lime shadow-[inset_3px_3px_10px_rgba(0,0,0,0.35)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#E0E0E0] font-bakbak text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#E0E0E0] border border-[#c0c0c0] rounded-lg px-4 py-3 text-black font-bakbak focus:outline-none focus:border-lime shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2)] resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="px-8 py-3 bg-lime rounded-2xl text-navy font-bakbak text-lg md:text-xl shadow-[5px_5px_6.6px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[5px_5px_6.6px_0_rgba(0,0,0,0.25),0_0_12px_rgba(185,255,102,0.6)] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
              {formStatus === "error" && (
                <p className="text-red-500 font-bakbak text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
