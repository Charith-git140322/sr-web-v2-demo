import Image from "next/image";
import { type BaseButtonProps } from "./types";

interface TextButtonProps extends BaseButtonProps {
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  fontSize?: string;
  fontWeight?: string;
}

export function TextButton({
  children,
  onClick,
  disabled,
  className = "",
  imageSrc,
  imageAlt = "icon",
  imageWidth = 20,
  imageHeight = 20,
  fontSize = "text-xl",
  fontWeight = "font-semibold",
}: TextButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 ${fontSize} ${fontWeight} text-black transition-colors duration-300 
        hover:text-[#C8A66B] group disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="transition-all duration-300 group-hover:[filter:invert(77%)_sepia(19%)_saturate(789%)_hue-rotate(355deg)_brightness(89%)_contrast(90%)]"
        />
      )}
    </button>
  );
}
