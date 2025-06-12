import { FilledButton } from "@/components/buttons";
import CoursesBar from "@/components/pages/home/courses-bar";
import { DASHBOARD_SECTION_ID } from "@/config/constants";
import { OUR_CLASSES } from "@/config/routes";
import { TCourse } from "@/lib/types";
import { scrollToDashboard } from "@/lib/utils";
import { getAllCourses } from "@/services/service";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[95vh] w-full">
      <Image
        src="/images/hero-bg.svg"
        alt="Hero Section Background"
        fill
        className="-z-10 object-cover"
        priority
      />
      <div className="mx-auto flex w-full max-w-7xl px-4">
        <div className="flex flex-col items-start justify-center px-10 md:px-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-6xl">
            StudyReserve
          </h1>
          <p className="mt-2 text-2xl font-light leading-8 md:text-4xl">
            Empowered Learning, Brighter Minds!
          </p>
          <div className="justify-left mt-10 flex items-center gap-x-6">
            <Link href={DASHBOARD_SECTION_ID} onClick={scrollToDashboard}>
              <FilledButton>Register Now!</FilledButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CoursesSection = () => {
  const router = useRouter();

  const [courses, setCourses] = useState<TCourse[]>([]);

  useEffect(() => {
    getAllCourses()
      .then((result) => {
        setCourses(result.data.reverse());
      })
      .catch((error) => {
        console.error("Failed to fetch courses:", error);
      });
  }, []);

  return (
    <section className="relative mt-12 w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/explore-our-courses-bg.svg"
          alt="Courses Section Background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl">
        <CoursesBar
          title="Explore our courses"
          subtitle="Get in touch with our latest courses"
          courses={courses.slice(0, 5)}
          // TODO: Has to open in a new tab
          onViewAll={() => router.push(OUR_CLASSES)}
          backgroundImage="/images/explore-our-courses-bg.svg"
        />
      </div>
    </section>
  );
};
