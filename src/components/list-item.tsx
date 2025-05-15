import * as React from "react";
import { cn } from "@/lib/utils";
import { NavigationMenuLink, Link } from "@radix-ui/react-navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:underline focus:underline",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface Item {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
}

interface NavigationListProps {
  items: Item[];
}

const NavigationList = ({ items }: NavigationListProps) => {
  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.disabled ? "#" : item.href}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:underline",
              item.disabled &&
                "pointer-events-none cursor-not-allowed opacity-50",
            )}
            onClick={(e) => item.disabled && e.preventDefault()}
            aria-disabled={item.disabled}
          >
            <div className="text-sm font-medium leading-none">{item.title}</div>
            {item.description && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {item.description}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
