import { cn } from "@/lib/utils";
import { type BaseButtonProps } from "./types";

// TODO: Need a version of this button with <a> FilledLinkButton to avoid window.open
export function FilledButton({
  children,
  onClick,
  disabled,
  className = "",
}: BaseButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-md bg-secondary px-2.5 py-2 text-sm font-normal text-secondary-foreground shadow-sm transition-all duration-300 hover:bg-secondary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-xl",
        className,
      )}
    >
      {children}
    </button>
  );
}
