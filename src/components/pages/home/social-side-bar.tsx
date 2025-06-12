"use client";

import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { FACEBOOK, INSTAGRAM, YOUTUBE } from "@/config/external-links";

export const SocialSidebar = () => {
  const iconStyle = "w-6 h-6 hover:scale-110 transition-transform duration-200";

  return (
    <div className="fixed left-0 top-1/2 z-50 flex flex-col gap-4 rounded-r-lg bg-white/80 p-2 shadow-md backdrop-blur-md sm:flex">
      <button
        aria-label="Instagram"
        onClick={() => window.open(INSTAGRAM, "_blank")}
      >
        <FaInstagram className={iconStyle} />
      </button>
      <button onClick={() => window.open(FACEBOOK, "_blank")}>
        <FaFacebookSquare className={iconStyle} />
      </button>
      <button onClick={() => window.open(YOUTUBE, "_blank")}>
        <FaYoutube className={iconStyle} />
      </button>
    </div>
  );
};
