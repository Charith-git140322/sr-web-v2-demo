import Image from "next/image";
import Chip from "@mui/material/Chip";
import { Avatar, Tooltip, Skeleton } from "@mui/material";
import { BorderLinkButton } from "./buttons";
import { TCourse } from "@/lib/types";
import { IMAGE_BASE_URL } from "@/config/constants";

type CourseCardProps = {
  course?: TCourse;
  isLoading?: boolean;
};

export default function CourseCard({
  course,
  isLoading = false,
}: CourseCardProps) {
  if (isLoading) {
    return (
      <div className="w-[250px] overflow-hidden rounded-lg bg-white shadow-md">
        <Skeleton variant="rectangular" width={250} height={250} />
        <div className="flex h-[200px] flex-col justify-between p-4">
          <div>
            <Skeleton
              variant="text"
              width="80%"
              height={28}
              style={{ marginBottom: "8px" }}
            />
            <Skeleton
              variant="text"
              width="60%"
              height={28}
              style={{ marginBottom: "12px" }}
            />
            <Skeleton variant="circular" width={32} height={32} />
          </div>
          <div className="flex justify-center">
            <Skeleton variant="rectangular" width={120} height={36} />
          </div>
        </div>
      </div>
    );
  }

  if (!course) return null;

  const firstTag = course.tags[0];
  const remainingTagCount = course.tags.length - 1;

  return (
    <div className="w-[250px] overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={
            course.courseImage
              ? `${IMAGE_BASE_URL}/${course.courseImage}`
              : `https://picsum.photos/id/${course.id}/200/300`
          }
          alt={course.title}
          className="course-img h-[250px] w-[250px]"
          width={250}
          height={250}
        />
      </div>
      <div className="flex h-[200px] flex-col justify-between p-4">
        <div>
          <Tooltip title={course.title} placement="top">
            <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
              {course.title}
            </h3>
          </Tooltip>
          <div className="mb-3 flex h-[32px] flex-wrap gap-2">
            {firstTag && (
              <Chip
                label={firstTag.title}
                sx={{
                  backgroundColor: "#fcf5ef",
                  color: "#212121",
                }}
              />
            )}
            {remainingTagCount > 0 && (
              <Tooltip
                title={course.tags
                  .slice(1)
                  .map((tag) => tag.title)
                  .join(", ")}
                placement="top"
              >
                <Avatar
                  alt={`${remainingTagCount} more tags`}
                  sx={{ width: 28, height: 28, fontSize: 13 }}
                >
                  +{remainingTagCount}
                </Avatar>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <BorderLinkButton
            className="view-class"
            href={`https://dash.studyreserve.com/#/auth?course=${course.id}`}
            target="_blank"
          >
            View class
          </BorderLinkButton>
        </div>
      </div>
    </div>
  );
}
