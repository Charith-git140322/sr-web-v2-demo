import { DASHBOARD_SECTION_ID } from "@/config/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToDashboard = (e: React.MouseEvent) => {
  e.preventDefault();
  const element = document.getElementById(DASHBOARD_SECTION_ID);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export const thousandSeparator = (num: number) => {
  if (num === 0 || !num) return "0";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
