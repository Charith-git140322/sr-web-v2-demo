type PageSubHeaderProps = {
  children: string;
};

type PageSubSectionTitleProps = {
  children: string;
};

export function PageSubHeader({ children }: PageSubHeaderProps) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

export function PageSubSectionTitle({ children }: PageSubSectionTitleProps) {
  return <h3 className="text-md font-semibold">{children}</h3>;
}
