import { TCourse } from "@/lib/types";
import CourseCard from "../../course-card";

type CourseGridProps = {
  courses: TCourse[];
  isLoading?: boolean;
};
export default function CourseGrid({
  courses,
  isLoading = false,
}: CourseGridProps) {
  const itemsTORender: (TCourse | undefined)[] = isLoading
    ? Array.from({ length: 8 }, () => undefined)
    : [...courses].reverse();

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {courses.length === 0 && !isLoading ? (
          <div className="col-span-full flex w-full items-center justify-center text-lg italic text-gray-600">
            Nothing found... <br />
            You might want to check your spelling or try different words
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {itemsTORender.map((course, index) => (
              <CourseCard
                key={isLoading ? index : (course?.id ?? index)}
                course={isLoading ? undefined : course}
                isLoading={isLoading}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
