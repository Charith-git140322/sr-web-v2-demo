type BaseButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
};

export function BorderButton({
  children,
  onClick,
  disabled,
  className = "",
}: BaseButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-md border border-black px-4 py-2 font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

type BorderLinkProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
};

export function BorderLinkButton({
  children,
  href,
  target,
  rel,
  className = "",
  disabled = false,
}: BorderLinkProps) {
  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      aria-disabled={disabled}
      className={`inline-flex items-center justify-center rounded-md border border-black px-4 py-2 font-medium text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white ${
        disabled ? "pointer-events-none cursor-not-allowed opacity-50" : ""
      } ${className}`}
    >
      {children}
    </a>
  );
}
