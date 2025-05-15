"use client";

import * as React from "react";
import Link from "next/link";
import { cn, scrollToDashboard } from "@/lib/utils";
import { LayoutGrid, CircleX, CircleChevronDown } from "lucide-react";
import NavigationList from "./list-item";
import { classes, lecturers } from "@/config/main-nav-dropdowns";
import {
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/nav";
import { BorderButton } from "./buttons";
import { DASHBOARD_SECTION_ID } from "@/config/constants";
import { CONTACT_US, FAQ, HOME, PRICING } from "@/config/routes";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [classesOpen, setClassesOpen] = React.useState(false);
  const [lecturersOpen, setLecturersOpen] = React.useState(false);

  const scrollOrNavigateToDashboard = (e: React.MouseEvent) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/${DASHBOARD_SECTION_ID}`;
      return;
    }
    scrollToDashboard(e);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <header className="w-60px fixed top-0 z-50 flex w-full justify-center bg-primary">
      <div className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
        <Link href={HOME} className="flex items-center space-x-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/sr-logo.svg"
            alt="StudyReserve Logo"
            className="h-auto w-[200px]"
          />
        </Link>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <CircleX className="h-[30px] w-[30px]" />
          ) : (
            <LayoutGrid className="h-[30px] w-[30px]" />
          )}
        </button>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center">
            <NavigationMenuItem>
              <NavigationMenuLink
                href={HOME as string}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:underline focus:underline focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
                )}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[state=open]:bg-transparent">
                Our Classes
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <NavigationList items={classes} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:underline focus:bg-transparent focus:underline data-[state=open]:bg-transparent">
                Our Lecturers
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <NavigationList items={lecturers} />
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={PRICING}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:underline focus:underline focus:outline-none",
                )}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={CONTACT_US}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:underline focus:underline focus:outline-none",
                )}
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href={FAQ}
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors hover:underline focus:underline focus:outline-none",
                )}
              >
                FAQs
              </NavigationMenuLink>
            </NavigationMenuItem>

            <div className="h-6 w-[1px] bg-foreground" />

            <NavigationMenuItem>
              <BorderButton
                className="ml-4 inline-flex h-9"
                onClick={scrollOrNavigateToDashboard}
              >
                Sign In
              </BorderButton>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {isOpen && (
          <div className="absolute left-0 top-11 z-10 w-full bg-white shadow-md lg:hidden">
            <NavigationMenu>
              <ul className="space-y-3 p-4">
                <li className="block border-b p-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <Link href={HOME} className="disabled:pointer-events-none">
                    Home
                  </Link>
                </li>
                <li className="block border-b p-2">
                  <button
                    className="flex w-full justify-between text-left"
                    onClick={() => setClassesOpen(!classesOpen)}
                  >
                    Our Classes
                    <CircleChevronDown className="h-[20px] w-[20px]" />
                  </button>
                  {classesOpen && <NavigationList items={classes} />}
                </li>
                <li className="block border-b p-2">
                  <button
                    className="flex w-full justify-between text-left"
                    onClick={() => setLecturersOpen(!lecturersOpen)}
                  >
                    Our Lecturers
                    <CircleChevronDown className="h-[20px] w-[20px]" />
                  </button>
                  {lecturersOpen && <NavigationList items={lecturers} />}
                </li>
                <li className="block border-b p-2">
                  <Link href={PRICING} onClick={closeMobileMenu}>
                    Pricing
                  </Link>
                </li>
                <li className="block border-b p-2">
                  <Link href={CONTACT_US} onClick={closeMobileMenu}>
                    Contact Us
                  </Link>
                </li>
                <li className="block border-b p-2">
                  <Link href={FAQ} onClick={closeMobileMenu}>
                    FAQs
                  </Link>
                </li>
              </ul>
            </NavigationMenu>
          </div>
        )}
      </div>
    </header>
  );
};

export { Header };
