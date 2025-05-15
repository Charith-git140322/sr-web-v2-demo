import { TCourse } from "@/lib/types";
import CourseCard from "../../course-card";

export default function CourseGrid({ courses }: { courses: TCourse[] }) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {courses.length === 0 ? (
          <div className="flex w-full items-center justify-center object-cover text-center text-lg text-gray-600">
            Nothing found... <br />
            You might want to check your spelling or try different words
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...courses].reverse().map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
