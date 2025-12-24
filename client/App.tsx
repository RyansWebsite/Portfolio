import "./global.css";

import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Video from "./pages/Video";
import MotionGraphics from "./pages/MotionGraphics";
import GraphicDesign from "./pages/GraphicDesign";
import Resume from "./pages/Resume";
import About from "./pages/About";
import EasterEgg from "./pages/EasterEgg";
import NotFound from "./pages/NotFound";
import { ViewModeProvider, useViewMode } from "./context/ViewModeContext";

// Wrapper component that constrains width when in mobile mode
function MobileWrapper({ children }: { children: React.ReactNode }) {
  const { viewMode } = useViewMode();

  if (viewMode === "mobile") {
    return (
      <div className="mx-auto max-w-[380px] min-h-screen bg-[#111117] relative z-[95]">
        {children}
      </div>
    );
  }

  return <>{children}</>;
}

const queryClient = new QueryClient();

// Preload hero images to prevent flickering on page transitions
const imagesToPreload = [
  "/Portfolio/images/LinkedIn Photo.jpg",
  "/Portfolio/images/o video 1.png",
  "/Portfolio/images/o motion 2.png",
  "/Portfolio/images/o design 1.png",
  "/Portfolio/images/o resume 1.png",
  "/Portfolio/images/974.png",
];

function preloadImages() {
  imagesToPreload.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

const App = () => {
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ViewModeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <MobileWrapper>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/video" element={<Video />} />
                <Route path="/motion-graphics" element={<MotionGraphics />} />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/about" element={<About />} />
                <Route path="/easter-egg" element={<EasterEgg />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MobileWrapper>
          </BrowserRouter>
        </TooltipProvider>
      </ViewModeProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
