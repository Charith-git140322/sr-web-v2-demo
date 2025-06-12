"use client";

import { useState, useEffect } from "react";
import { OUR_CLASSES, OUR_LECTURERS } from "./routes";
import { getAllTags } from "@/services/service";
import { TTag } from "@/lib/types";

export const useTagLinks = () => {
  const [classes, setClasses] = useState([
    { title: "VIEW ALL CLASSES", href: OUR_CLASSES },
  ]);

  const [lecturers, setLecturers] = useState([
    { title: "VIEW ALL LECTURERS", href: OUR_LECTURERS },
  ]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await getAllTags();
        const tags: TTag[] = response.data;

        const classCategoryLinks = tags.map((tag) => ({
          title: tag.title,
          href: `${OUR_CLASSES}?category=${encodeURIComponent(tag.title)}`,
        }));

        const lecturerCategoryLinks = tags.map((tag) => ({
          title: tag.title,
          href: `${OUR_LECTURERS}?category=${encodeURIComponent(tag.title)}`,
        }));

        setClasses((prev) => [...prev, ...classCategoryLinks]);
        setLecturers((prev) => [...prev, ...lecturerCategoryLinks]);
      } catch (error) {
        console.error("Failed to load tags:", error);
      }
    };

    void fetchTags();
  }, []);

  return { classes, lecturers };
};

// TODO:
// export const NAV_ITEMS = [
//   {
//     title: "Home",
//     href: "/"
//   },
//   {
//     title: "Our Classes"
//     items: [

//     ]
//   }
// ]
