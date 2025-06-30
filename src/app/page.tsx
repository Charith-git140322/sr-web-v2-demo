"use client";

//import AppLinks from "@/components/pages/home/app-links";
import DashboardsEntry from "@/components/pages/home/dashboards-entry";
import { CoursesSection, HeroSection } from "@/components/pages/home/sections";
import AdvertisementBar from "@/components/pages/home/advertisement-bar";
import AppDownloadCards from "@/components/pages/home/app-download-card";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvertisementBar />
      <CoursesSection />
      <AppDownloadCards />
      <DashboardsEntry />
    </>
  );
}
