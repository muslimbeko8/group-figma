"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import Earth from "./Earth";
import Moon from "./Moon";
import Mars from "./Mars";
import Rewards from "./Rewards";

export default function HeroSwiper() {
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper relative w-full h-screen"
        >
          <div
            slot="container-start"
            className="parallax-bg absolute top-0 left-0 w-full h-full "
            data-swiper-parallax="-23%"
          ></div>

          <SwiperSlide className="relative flex items-center justify-center w-full h-full">
            <Earth />
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center w-full h-full">
            <Moon />
          </SwiperSlide>
          <SwiperSlide className="relative flex items-center justify-center w-full h-full">
            <Mars />
          </SwiperSlide>
        </Swiper>
      </div>
      <Rewards />
    </>
  );
}
