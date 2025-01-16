"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const CreativeWorks = () => {
  return (
    <div className="flex justify-between items-center px-8 py-12 text-white mx-auto max-w-[1200px] mt-[300px]">
      <div className="w-1/2">
        <h1 className="text-5xl font-bold mb-4">My Creative Works</h1>
        <h2 className="text-3xl font-bold text-white">
          Latest <span className="text-[#00DBFF]">Projects</span>
        </h2>
        <p className="text-lg mt-4">
          I have selected and mentioned here some of my latest <br /> projects
          to share with you.
        </p>
        <button className="mt-6 px-6 py-3 bg-transparent text-white font-bold hover:bg-black hover:text-white border border-white relative">
          <span className="relative top-[-4px]">Show More</span>
        </button>
      </div>

      <div className="w-1/2 h-[400px]">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[200px] bg-gray-800 flex items-center justify-center">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[200px] bg-gray-700 flex items-center justify-center">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[200px] bg-gray-600 flex items-center justify-center">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[200px] bg-gray-500 flex items-center justify-center">
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[200px] bg-gray-400 flex items-center justify-center">
              Slide 5
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CreativeWorks;
