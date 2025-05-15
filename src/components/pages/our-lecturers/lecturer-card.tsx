import Image from "next/image";
import { BorderLinkButton } from "../../buttons";
import { Globe, Earth } from "lucide-react";

// TODO: Instead of having a custom prop, use TTeacher and do all the UI logic here rather than in the parent component
type LecturerCardProps = {
  image: string;
  name: string;
  country: string;
  language: string;
  keyValue: number;
};

const LecturerCard = ({
  image,
  name,
  country,
  language,
  keyValue,
}: LecturerCardProps) => {
  return (
    <div className="flex h-auto w-[300px] select-none flex-col rounded-3xl border bg-white p-4 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-white hover:shadow-lg">
      <div className="flex flex-row items-center justify-start gap-4">
        <Image
          src={image}
          alt="Profile image"
          width={100}
          height={100}
          className="rounded-full border"
        />
        <div
          className="line-clamp-2 overflow-hidden text-ellipsis break-words text-left text-lg font-semibold"
          title={name}
        >
          <h3>{name}</h3>
        </div>
      </div>
      <hr className="my-4 border-t border-dashed border-gray-400" />
      <div className="flex flex-row items-center justify-between gap-2 whitespace-nowrap">
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row items-center gap-2">
            <span>
              <Earth size="22px" />
            </span>
            <span
              className={`w-[100px] overflow-hidden text-ellipsis whitespace-nowrap ${country === "N/A" ? "italic" : ""}`}
              title={country}
            >
              {country}
            </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span>
              <Globe size="22px" />
            </span>
            <span
              className={` ${language === "N/A" ? "italic" : ""} w-[100px] overflow-hidden text-ellipsis whitespace-nowrap`}
              title={language}
            >
              {language}
            </span>
          </div>
        </div>
        <BorderLinkButton href={`/our-lecturers/about-lecturer/${keyValue}`}>
          View lecturer
        </BorderLinkButton>
      </div>
    </div>
  );
};

export default LecturerCard;
