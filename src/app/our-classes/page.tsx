"use client";

import Image from "next/image";
import CourseGrid from "@/components/pages/our-classes/course-grid";
import { useEffect, useState } from "react";
import { TCourse } from "@/lib/types";
import { getAllCourses } from "@/services/service";
import SearchBar from "@/components/search-bar";
import CourseCard from "@/components/course-card";

export default function OurClasses() {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<TCourse[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
              onFiltersChange={setSelectedFilters}
              onSearch={setSearchQuery}
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
      <section className="relative z-10 flex justify-center px-4 py-10 sm:px-8 md:px-12 lg:px-20">
        {isLoading ? (
          <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <CourseCard key={index} isLoading={true} />
            ))}
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <CourseGrid courses={filteredCourses} />
          </div>
        )}
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
