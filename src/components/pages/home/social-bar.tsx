"use client";

import { useEffect, useState } from "react";
import { TextButton } from "../../buttons";
import { FACEBOOK, INSTAGRAM, YOUTUBE } from "@/config/external-links";

export const SocialBar = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeHeight = window.innerHeight * 0.8;
      const newOpacity = Math.max(0, 1 - scrollY / fadeHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ opacity, transition: "opacity 0.3s ease-out" }}
      className="yp-3 z-40 rounded-r-md"
    >
      <div className="flex flex-col items-end gap-4 pb-5 md:items-center md:gap-12 lg:flex-row">
        {/* TODO: Test in Safari and see if this works */}
        <TextButton onClick={() => window.open(INSTAGRAM, "_blank")}>
          INSTAGRAM
        </TextButton>
        <TextButton onClick={() => window.open(FACEBOOK, "_blank")}>
          FACEBOOK
        </TextButton>
        <TextButton onClick={() => window.open(YOUTUBE, "_blank")}>
          YOUTUBE
        </TextButton>
      </div>
    </div>
  );
};
