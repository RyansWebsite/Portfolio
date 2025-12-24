import { useViewMode } from "@/context/ViewModeContext";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  const { viewMode } = useViewMode();
  const isMobileView = viewMode === "mobile";

  return (
    <div className={`relative mt-2 ${isMobileView ? "mb-5" : "mb-8"}`}>
      <div className={`bg-[#ABE962] w-full ${isMobileView ? "h-3" : "h-4"}`}></div>
      <div className={`absolute bottom-full left-1/2 -translate-x-1/2 bg-[#B9FF66] rounded-t-xl ${isMobileView ? "px-5 min-w-[160px]" : "px-6 md:px-12 min-w-[200px] md:min-w-[280px]"}`}>
        <h1 className={`text-navy font-aleo text-center ${isMobileView ? "text-base py-1" : "text-xl md:text-2xl py-1"}`}>{title}</h1>
      </div>
    </div>
  );
}
