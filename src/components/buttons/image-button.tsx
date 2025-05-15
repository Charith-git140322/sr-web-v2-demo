import Image from "next/image";
import { type BaseButtonProps } from "./types";

interface ImageButtonProps extends Omit<BaseButtonProps, "children"> {
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
  children?: React.ReactNode;
}

export function ImageButton({
  children,
  onClick,
  disabled,
  className = "",
  imageSrc,
  imageWidth = 50,
  imageHeight = 50,
}: ImageButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 transition-all duration-300 hover:scale-110 ${disabled ? "cursor-not-allowed opacity-50 hover:scale-100" : ""} ${className}`}
    >
      {children}
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        className="transition-transform duration-300"
        alt={""}
      />
    </button>
  );
}
