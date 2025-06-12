"use client";

import LecturersSection from "@/components/pages/our-lecturers/lecturers-section";
import Image from "next/image";
import SearchBar from "@/components/search-bar";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OurLecturers() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const query = searchParams.get("search") ?? "";
    const cat = searchParams.get("category") ?? "";
    let filters = searchParams.getAll("filter") ?? [];

    if (cat && !filters.includes(cat)) {
      filters = [...filters, cat];
    }

    setSearchQuery(query);
    setSelectedFilters(filters);
  }, [searchParams]);

  const updateURLParams = (newSearch?: string, newFilters?: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newSearch !== undefined) {
      if (newSearch) {
        params.set("search", newSearch);
      } else {
        params.delete("search");
      }
    }

    if (newFilters !== undefined) {
      params.delete("filter");
      newFilters.forEach((filter) => params.append("filter", filter));
      params.delete("category");
    }

    router.push(`/our-lecturers?${params.toString()}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    updateURLParams(query, undefined);
  };

  const handleFiltersChange = (filters: string[]) => {
    setSelectedFilters(filters);
    updateURLParams(undefined, filters);
  };

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
            <SearchBar
              onSearch={handleSearch}
              onFiltersChange={handleFiltersChange}
              selectedFilters={selectedFilters}
            />
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
          <LecturersSection
            searchQuery={searchQuery}
            selectedFilters={selectedFilters}
            onCategoryChange={handleFiltersChange}
          />
        </div>
      </section>
    </div>
  );
}
