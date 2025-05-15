import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config/constants";
import { TCourse } from "@/lib/types";

type AvailableCoursesCardProps = {
  course: TCourse;
};

export default function AvailableCoursesCard({
  course,
}: AvailableCoursesCardProps) {
  return (
    <a
      href={`https://dash.studyreserve.com/#/auth?course=${course.id}`}
      target={"_blank"}
      rel={"noopener noreferrer"}
    >
      <div className="flex h-32 w-full cursor-pointer items-center gap-4 rounded-xl bg-white shadow-md transition hover:shadow-lg">
        <div className="h-24 w-24 rounded-lg md:h-32 md:w-32">
          <Image
            src={
              course.courseImage
                ? `${IMAGE_BASE_URL}/${course.courseImage}`
                : `https://picsum.photos/id/${course.id}/200/300`
            }
            alt="Available Course"
            width={128}
            height={128}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold text-gray-900 md:text-lg">
            {course.title}
          </h2>
          <p className="mt-1 text-xs text-gray-500 md:text-sm">
            {course.description}
          </p>
        </div>
      </div>
    </a>
  );
}
