"use client";

import LecturerCard from "./lecturer-card";
import LecturerCardSkeleton from "./lecturer-card-skeleton";
import { getAllTeachers } from "@/services/service";
import { useEffect, useState } from "react";
import { TTeacher } from "@/lib/types";
import { IMAGE_BASE_URL } from "@/config/constants";

type lecturersSectionProps = {
  searchQuery: string;
  selectedFilters: string[];
  onCategoryChange: (filters: string[]) => void;
};

const LecturersSection = ({
  searchQuery,
  selectedFilters,
  onCategoryChange,
}: lecturersSectionProps) => {
  const [lecturers, setLecturers] = useState<TTeacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredLecturers, setFilteredLecturers] = useState<TTeacher[]>([]);

  useEffect(() => {
    // TODO: Need to create an API with search query, pagination, and sorting
    getAllTeachers()
      .then((result) => {
        const reversed = result.data.reverse();
        setLecturers(reversed);
        setFilteredLecturers(reversed);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch courses:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = lecturers.filter((lecturer) => {
      const matchesSearch =
        lecturer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lecturer.teachingMedium
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        lecturer.country?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesFilters =
        selectedFilters.length === 0 ||
        lecturer.courses?.some((course) =>
          course.tags?.some((tag) =>
            selectedFilters
              .map((filter) => filter.toLowerCase())
              .includes(tag.title.toLowerCase()),
          ),
        );

      return matchesSearch && matchesFilters;
    });
    setFilteredLecturers(filtered);
    onCategoryChange(selectedFilters);
  }, [searchQuery, selectedFilters, lecturers, onCategoryChange]);

  return (
    <section>
      <div className="sm:flex- grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading ? (
          <>
            {Array.from({ length: 8 }, (_, index) => (
              <LecturerCardSkeleton key={index} />
            ))}
          </>
        ) : filteredLecturers.length === 0 ? (
          <div className="col-span-full flex h-[300px] w-full items-center justify-center text-lg italic text-gray-600">
            Nothing found... <br />
            You might want to check your spelling or try different words
          </div>
        ) : (
          filteredLecturers.map((lecturer) => (
            <LecturerCard
              key={lecturer.id}
              keyValue={lecturer.id}
              name={lecturer.name}
              country={lecturer.country ?? "N/A"}
              language={lecturer.teachingMedium ?? "N/A"}
              image={
                lecturer.coverImageS3ObjectKey
                  ? `${IMAGE_BASE_URL}/${lecturer.coverImageS3ObjectKey}`
                  : "/images/default-avatar.png"
              }
            />
          ))
        )}
      </div>
    </section>
  );
};

export default LecturersSection;
