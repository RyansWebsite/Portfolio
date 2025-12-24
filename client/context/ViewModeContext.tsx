import { createContext, useContext, useState, ReactNode } from "react";

type ViewMode = "auto" | "mobile" | "desktop";

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isMobileView: boolean;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("auto");

  // When "mobile" is forced, always show mobile. When "desktop" is forced, always show desktop.
  // When "auto", let CSS media queries handle it naturally.
  const isMobileView = viewMode === "mobile";

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode, isMobileView }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
