"use client";

import AppLinks from "@/components/pages/home/app-links";
import DashboardsEntry from "@/components/pages/home/dashboards-entry";
import { CoursesSection, HeroSection } from "@/components/pages/home/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <AppLinks />
      <DashboardsEntry />
    </>
  );
}
