type PageSubHeaderProps = {
  children: string;
};

type PageSubSectionTitleProps = {
  children: string;
};

export function PageSubHeader({ children }: PageSubHeaderProps) {
  return <h2 className="pl-2 text-lg font-bold italic">{children}</h2>;
}

export function PageSubSectionTitle({ children }: PageSubSectionTitleProps) {
  return <h3 className="text-md pl-4 font-semibold italic">{children}</h3>;
}
