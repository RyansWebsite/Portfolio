import { useViewMode } from "@/context/ViewModeContext";

export default function ViewToggle() {
  const { viewMode } = useViewMode();

  // Only render the mobile frame overlay when in mobile mode
  if (viewMode !== "mobile") return null;

  return (
    <>
      {/* Mobile frame overlay when in mobile mode */}
      {/* Left dark overlay */}
      <div className="fixed top-0 left-0 bottom-0 w-[calc(50%-190px)] bg-black/80 z-[90]" />
      {/* Right dark overlay */}
      <div className="fixed top-0 right-0 bottom-0 w-[calc(50%-190px)] bg-black/80 z-[90]" />
    </>
  );
}
