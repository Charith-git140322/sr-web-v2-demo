"use client";

import Image from "next/image";
import { Globe, Earth, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AvailableCoursesCard from "@/components/pages/our-lecturers/available-courses-card";
import { getAllTeachers } from "@/services/service";
import { TTeacher } from "@/lib/types";
import { IMAGE_BASE_URL } from "@/config/constants";

export default function LecturerProfile() {
  const [lecturers, setLecturers] = useState<TTeacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const lecturerId = Number(params?.id);

  useEffect(() => {
    // TODO: Need API to get 1 lecturer
    getAllTeachers()
      .then((result) => {
        setLecturers(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch lecturers:", error);
        setIsLoading(false);
      });
  }, []);

  const lecturer = lecturers.find((lecturer) => lecturer.id === lecturerId);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-x-amber-100 border-t-transparent"></div>
          <p className="text-gray-600">Loading lecturer profile...</p>
        </div>
      </div>
    );
  }

  if (!lecturer) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-600">
            Lecturer not found. Please check the URL or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        src="/default-cover-background.webp"
        alt="beautiful-nature-scenery-photo"
        width={1000}
        height={1000}
        className="h-[250px] w-full rounded-lg object-cover md:h-[300px]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 px-4 md:flex-row">
          <div className="relative z-10 -mt-20">
            <Image
              src={
                lecturer?.coverImageS3ObjectKey
                  ? `${IMAGE_BASE_URL}/${lecturer.coverImageS3ObjectKey}`
                  : "/images/default-avatar.png"
              }
              alt={lecturer.name}
              width={300}
              height={300}
              className="h-[200px] w-[200px] rounded-full border-2 bg-white md:h-[300px] md:w-[300px]"
            />
          </div>
          <div className="group flex flex-col gap-2 p-2">
            <h1 className="text-5xl font-semibold">{lecturer.name}</h1>
            <div className="flex flex-row items-center gap-2">
              <Mail size="22px" />
              <h3 className="text-lg">{lecturer.email}</h3>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Earth size="22px" />
              <h3 className={!lecturer.country ? "italic" : ""}>
                {lecturer.country ?? "N/A"}
              </h3>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Globe size="22px" />
              <h3 className={!lecturer.teachingMedium ? "italic" : ""}>
                {lecturer.teachingMedium ?? "N/A"}
              </h3>
            </div>
          </div>
        </div>
        <div className="group flex flex-col gap-4 px-2 md:flex-row">
          <div className="flex flex-col gap-4 px-4 pt-10 text-justify md:w-2/5">
            <h2 className="text-3xl font-semibold">About</h2>
            <p
              className={`px-4 text-lg ${!lecturer.description ? "italic" : ""}`}
            >
              {lecturer.description ??
                `"This lecturer has not shared a profile description yet, but their expertise is reflected in the courses they offer."`}
            </p>
          </div>
          <div className="flex max-h-[342px] flex-col gap-4 md:w-3/5">
            <h3 className="text-3xl font-semibold">Available Courses</h3>
            <div
              data-lenis-prevent
              className="flex flex-col gap-4 overflow-auto px-4"
            >
              {lecturer.courses?.map((course) => (
                <AvailableCoursesCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
