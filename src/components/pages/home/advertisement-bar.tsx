"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllAdvertisements } from "@/services/service";
import { IMAGE_BASE_URL } from "@/config/constants";
import { TAdvertisement } from "@/lib/types";

const AdvertisementBar = () => {
  const [ads, setAds] = useState<TAdvertisement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllAdvertisements()
      .then((result) => {
        setAds(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch advertisements:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (ads.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [ads]);

  if (isLoading) {
    return (
      <div className="flex w-full justify-center py-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-x-amber-100 border-t-transparent"></div>
      </div>
    );
  }

  const ad = ads[currentIndex];
  const desktopImageSrc = ad?.desktopImageS3ObjectKey
    ? `${IMAGE_BASE_URL}/${ad.desktopImageS3ObjectKey}`
    : "";

  const mobileImageSrc = ad?.mobileImageS3ObjectKey
    ? `${IMAGE_BASE_URL}/${ad.mobileImageS3ObjectKey}`
    : "";

  return (
    <div className="relative flex w-full justify-center py-4">
      <div className="w-full max-w-7xl px-4">
        <a href={ads[currentIndex]?.link}>
          <div className="relative block aspect-[1.9/1] w-full overflow-hidden rounded-lg md:hidden">
            <Image
              src={mobileImageSrc}
              alt={`Advertisement ${currentIndex + 1}`}
              fill
              className="h-full w-full rounded-lg object-cover object-center"
              priority
            />
          </div>
          <div className="relative hidden aspect-[8.5/1] w-full overflow-hidden rounded-lg md:block">
            <Image
              src={desktopImageSrc}
              alt={`Advertisement ${currentIndex + 1}`}
              fill
              className="h-full w-full rounded-lg object-cover object-center"
              priority
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default AdvertisementBar;
