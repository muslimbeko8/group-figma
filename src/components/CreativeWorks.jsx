"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CreativeWorks = () => {
  return (
    <div className="flex justify-between items-center text-white mx-auto max-w-[1200px] mt-[300px]">
      {/* Chap tomonda matn */}
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl mb-4">My Creative Works</h1>
        <h2 className="text-3xl text-white">
          Latest <span className="text-[#00DBFF]">Projects</span>
        </h2>
        <p className="text-lg mt-4">
          I have selected and mentioned here some of my latest <br /> projects
          to share with you.
        </p>
        <button className="mt-6 px-6 py-3 bg-transparent text-white hover:bg-black hover:text-white border border-white relative">
          <span className="relative top-[-4px]">Show More</span>
        </button>
      </div>

      <div className="w-1/2 grid grid-cols-2 gap-4">
        <img
          src="/samo.png"
          alt="samo"
          className="w-full h-[250px] object-cover rounded-md"
        />
        <img
          src="/astronaut.png"
          alt="astronaut"
          className="h-[250px]  rounded-md"
        />
        <img
          src="/suniy.png"
          alt="suniy"
          className="w-full h-[250px]  rounded-md"
        />
        <img
          src="/planeta.png"
          alt="planeta"
          className="w-[282px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default CreativeWorks;
