"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Navigation, EffectCoverflow } from "swiper/modules";
import type SwiperCore from "swiper";
import LeftArrow from "@/../public/icons/left-arrow.svg";
import RightArrow from "@/../public/icons/right-arrow.svg";
import SquareArrow from "@/../public/icons/square-arrow.svg";
import "@fontsource/roboto";
import "@/styles/courses-bar.css";
import { FilledButton, ImageButton, TextButton } from "../../buttons";
import { TCourse } from "@/lib/types";
import CourseCard from "../../course-card";

export default function CoursesBar({
  title,
  subtitle,
  courses,
  onViewAll,
}: {
  title: string;
  subtitle: string;
  courses: TCourse[];
  onViewAll: (link?: string) => void;
  backgroundImage?: string;
}) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const navigation = (
    <>
      <div className="swiperCore">
        <ImageButton
          imageSrc={LeftArrow as string}
          onClick={() => swiperRef.current?.slidePrev()}
          disabled={isBeginning}
          className={`swiperCore-Arrow ${isBeginning ? "cursor-not-allowed opacity-50 hover:scale-100" : ""}`}
        />
        <ImageButton
          imageSrc={RightArrow as string}
          onClick={() => swiperRef.current?.slideNext()}
          disabled={isEnd}
          className={`swiperCore-Arrow ${isEnd ? "cursor-not-allowed opacity-50 hover:scale-100" : ""}`}
        />
      </div>
      <FilledButton onClick={() => onViewAll()}>View All Courses</FilledButton>
    </>
  );

  return (
    <section className="course-bar-section">
      <div className="course-bar-section-div">
        <h1 className="h1-title">{title}</h1>
        <p className="p-subtitle">{subtitle}</p>
        <div className="hidden flex-col items-center gap-2 md:flex">
          {navigation}
        </div>
      </div>
      <div className="courses-carousel-wrapper">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          spaceBetween={20}
          slidesPerView={1}
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={() => {
            if (swiperRef.current) {
              setIsBeginning(swiperRef.current.isBeginning);
              setIsEnd(swiperRef.current.isEnd);
            }
          }}
          className="swiper"
        >
          {[...courses].reverse().map((course) => {
            return (
              <SwiperSlide
                key={course.id}
                onClick={() =>
                  swiperRef.current?.slideTo(
                    courses.length - 1 - courses.indexOf(course),
                  )
                }
              >
                <CourseCard course={course} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <div className="swiper-view-more-button">
              <TextButton
                onClick={() => onViewAll()}
                imageSrc={SquareArrow as string}
              >
                View More
              </TextButton>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="gap-0.1 top-1 flex flex-col md:hidden">{navigation}</div>
    </section>
  );
}
