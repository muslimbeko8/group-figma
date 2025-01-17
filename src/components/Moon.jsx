import { Moon1, MoonText, Oy } from "@/image";
import Image from "next/image";
import React from "react";

export default function Moon() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <section className="relative w-full h-full">
        {/* EarthText */}
        <Image
          src={MoonText}
          height={352}
          width={958}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
          alt="Earth Text"
        />

        {/* Yer Image */}
        <Image
          src={Oy}
          height={631}
          width={586}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         xs:w-[60%] sm:w-[60%] md:w-[50%] lg:w-[40%]"
          alt="Yer Image"
        />
        {/* EARTH1 */}
        <Image
          src={Moon1}
          height={352}
          width={958}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                         xs:w-[85%] sm:w-[80%] md:w-[70%] lg:w-[60%]"
          alt="Earth1"
        />
        <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-6 z-10 text-white text-center">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl ">
            This is a place for all space lovers where everyone will find a
            hundred things for themselves{" "}
          </p>
          <button className="border font-semibold hover:bg-white hover:text-black text-white py-2 px-6 text-sm sm:text-base lg:text-lg">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
