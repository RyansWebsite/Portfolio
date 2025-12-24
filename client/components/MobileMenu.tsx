import { Link } from "react-router-dom";
import { useViewMode } from "@/context/ViewModeContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { viewMode, setViewMode } = useViewMode();
  const isMobileView = viewMode === "mobile";

  if (!isOpen) return null;

  const menuItems = [
    { label: "Homepage", path: "/" },
    { label: "Video", path: "/video" },
    { label: "Motion Graphics", path: "/motion-graphics" },
    { label: "Graphic Design", path: "/graphic-design" },
    { label: "Resume", path: "/resume" },
    { label: "About Me", path: "/about" },
  ];

  // Full-screen mobile menu - constrained to mobile wrapper width
  if (isMobileView) {
    return (
      <>
        {/* Full-screen menu for mobile view - centered and constrained like MobileWrapper */}
        <div className="fixed inset-0 z-50 flex justify-center animate-[fadeIn_0.2s_ease-out]">
          <div className="w-full max-w-[380px] h-full bg-[#1A1A24] flex flex-col">
            {/* Spacer for header area - the actual header with X is visible above */}
            <div className="h-14 shrink-0"></div>

            {/* Menu items - centered with more spacing */}
            <nav className="flex flex-col px-6 pt-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="py-3 text-white font-bakbak text-base hover:bg-white/10 rounded-lg transition-colors text-center"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* View mode toggle */}
            <div className="px-6 pt-6">
              <div className="bg-[#1E1E1E] rounded-full px-2 py-2 flex gap-1 justify-center border border-lime/30">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`px-4 py-2 rounded-full text-sm font-bakbak transition-all ${
                    viewMode === "desktop"
                      ? "bg-lime text-navy"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Desktop
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`px-4 py-2 rounded-full text-sm font-bakbak transition-all ${
                    viewMode === "mobile"
                      ? "bg-lime text-navy"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setViewMode("auto")}
                  className={`px-4 py-2 rounded-full text-sm font-bakbak transition-all ${
                    viewMode === "auto"
                      ? "bg-lime text-navy"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  Auto
                </button>
              </div>
            </div>

            {/* Flexible spacer - pushes bottom content down */}
            <div className="flex-1"></div>

            {/* Bottom section with Menu label and green bar */}
            <div className="relative shrink-0">
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-[#B9FF66] rounded-t-lg px-8">
                <span className="text-navy font-aleo text-base py-1 block">Menu</span>
              </div>
              <div className="h-16 bg-[#ABE962] w-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Desktop/Auto view menu (original style)
  return (
    <>
      {/* Backdrop - click to close */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Menu box positioned to align X with hamburger location */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex justify-end h-20 md:h-24 items-center">
            <div className="relative w-12 md:w-14 h-12 md:h-14">
              {/* Menu box anchored to the hamburger button position */}
              <div className="absolute -top-4 -right-4 pointer-events-auto animate-[slideDown_0.2s_ease-out]">
                <div className="bg-[#1A1A24] rounded-2xl overflow-hidden w-[calc(100vw-2rem)] sm:w-[350px] md:w-[420px] lg:w-[502px]">
                  {/* Spacer for X button area */}
                  <div className="h-20 md:h-24"></div>

                  {/* Menu items */}
                  <nav className="flex flex-col px-8 pb-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className="px-6 py-5 text-white font-bakbak text-base hover:bg-white/10 rounded-lg transition-colors text-center"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* View mode toggle */}
                  <div className="px-8 pb-6">
                    <div className="bg-[#1E1E1E] rounded-full px-2 py-2 flex gap-1 justify-center border border-lime/30">
                      <button
                        onClick={() => setViewMode("desktop")}
                        className={`px-4 py-2 rounded-full text-sm font-bakbak transition-all ${
                          viewMode === "desktop"
                            ? "bg-lime text-navy"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        Desktop
                      </button>
                      <button
                        onClick={() => setViewMode("mobile")}
                        className={`px-4 py-2 rounded-full text-sm font-bakbak transition-all ${
                          viewMode === "mobile"
                            ? "bg-lime text-navy"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        Mobile
                      </button>
                      <button
                        onClick={() => setViewMode("auto")}
                        className={`px-4 py-2 rounded-full text-sm font-bakbak transition-all ${
                          viewMode === "auto"
                            ? "bg-lime text-navy"
                            : "text-white hover:bg-white/10"
                        }`}
                      >
                        Auto
                      </button>
                    </div>
                  </div>

                  {/* Bottom section with line and Menu label */}
                  <div className="relative">
                    <div className="h-3 bg-[#ABE962] w-full"></div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-[#B9FF66] rounded-t-lg px-6">
                      <span className="text-navy font-aleo text-lg py-1 block">Menu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
