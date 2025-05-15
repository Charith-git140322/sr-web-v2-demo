"use client";

import LecturersSection from "@/components/pages/our-lecturers/lecturers-section";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import { useState } from "react";

export default function OurLecturers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-white to-[#f5e8da]">
      <section className="relative h-[250px] w-full md:h-[300px]">
        <Image
          src="/images/lectures-top-bg.jpg"
          alt="Classes Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-center text-[36px] font-semibold leading-tight text-gray-800 md:text-[48px]">
            Our Lecturers
          </h1>
          <div className="mt-4">
            <SearchBar onSearch={setSearchQuery} />
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 w-full md:-bottom-2 xl:-bottom-4">
          <Image
            src="/images/vector-top.svg"
            alt="Vector Classes"
            width={1580}
            height={1230}
            className="w-full"
          />
        </div>
      </section>
      <section className="w-full">
        <div className="absolute bottom-0 left-0 -z-10">
          <Image
            src="/images/vector-bottom.svg"
            alt="Vector Bottom"
            width={1580}
            height={1230}
          />
        </div>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-y-4 py-4">
          <LecturersSection searchQuery={searchQuery} />
        </div>
      </section>
    </div>
  );
}
