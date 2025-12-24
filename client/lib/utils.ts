import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper to get the correct asset path for production builds
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  // Remove leading slash from path if base already ends with one
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
