"use client";

import Image from "next/image";
import CourseGrid from "@/components/pages/our-classes/course-grid";
import { useEffect, useState } from "react";
import { TCourse } from "@/lib/types";
import { getAllCourses } from "@/services/service";
import SearchBar from "@/components/search-bar";
import { useSearchParams, useRouter } from "next/navigation";

export default function OurClasses() {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<TCourse[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const query = searchParams.get("search") ?? "";
    let filters = searchParams.getAll("filter") ?? [];
    const category = searchParams.get("category");

    if (category && !filters.includes(category)) {
      filters = [...filters, category];
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

    router.push(`/our-classes?${params.toString()}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    updateURLParams(query, undefined);
  };

  const handleFiltersChange = (filters: string[]) => {
    setSelectedFilters(filters);
    updateURLParams(undefined, filters);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllCourses()
      .then((result) => {
        setCourses(result.data);
        setFilteredCourses(result.data);
      })
      .catch((error) => {
        console.error("Failed to fetch courses:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesFilters =
        selectedFilters.length === 0 ||
        course.tags.some((tag) => selectedFilters.includes(tag.title));

      return matchesSearch && matchesFilters;
    });
    setFilteredCourses(filtered);
  }, [searchQuery, selectedFilters, courses]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-white to-[#f5e8da]">
      <section className="relative h-[250px] w-full md:h-[300px]">
        <Image
          src="/images/classes-top-bg.svg"
          alt="Classes Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-center text-[36px] font-semibold leading-tight text-gray-800 md:text-[48px]">
            Our Classes
          </h1>
          <div className="mt-4">
            <SearchBar
              selectedFilters={selectedFilters}
              onFiltersChange={handleFiltersChange}
              onSearch={handleSearch}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/images/vector-top.png"
            alt="Vector Classes"
            width={1580}
            height={1230}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-justify md:text-lg">
        <CourseGrid courses={filteredCourses} isLoading={isLoading} />
      </section>

      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/images/vector-bottom.svg"
          alt="Vector Bottom"
          width={1580}
          height={1230}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
