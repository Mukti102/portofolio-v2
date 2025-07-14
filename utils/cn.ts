import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getColorClass = (color: any) => {
  const colorMap = {
    red: " text-red-500 border-red-500/30",
    blue: " text-blue-500 border-blue-500/30",
    green: " text-green-500 border-green-500/30",
    yellow: " text-yellow-500 border-yellow-500/30",
    purple: " text-purple-500 border-purple-500/30",
    teal: " text-teal-500 border-teal-500/30",
    slate: "text-slate-500 border-slate-500/30",
  };
  return colorMap[color] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
};

// utils/stripHtmlAndDecode.ts
export function stripHtmlAndDecode(html: string, limit: number): string {
  // Hapus tag HTML
  let text = html.replace(/<[^>]*>/g, "");

  // Decode entity dasar (&nbsp;, &amp;, dll.)
  const textarea =
    typeof window !== "undefined" ? document.createElement("textarea") : null;
  if (textarea) {
    textarea.innerHTML = text;
    text = textarea.value;
  }

  return text.slice(0, limit);
}
