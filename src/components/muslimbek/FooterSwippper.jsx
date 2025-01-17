"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const array = [
  {
    id: 1,
    img: "/human1.png",
    data: "May 8, 2020",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
  {
    id: 2,
    img: "/human2.png",
    data: "May 8, 2020",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
  {
    id: 3,
    img: "/human1.png",
    data: "May 8, 2020",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
  },
];

export default function ReviewsSlider() {
  return (
    <div className="flex flex-col gap-8 py-10 px-4 md:px-6 lg:px-8 ">
      <h1 className="text-xl md:text-2xl  text-center">Reviews</h1>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="!pt-[50px] !pb-[50px] w-full"
      >
        {array.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[320px] sm:!w-[500px] md:!w-[600px] lg:!w-[745px] !h-auto bg-center bg-cover"
          >
            <div className="flex flex-col md:flex-row items-center bg-white gap-3 p-3 md:p-4 rounded-lg shadow-sm h-auto md:h-[300px]">
              <div className="w-full md:w-[245px] h-[200px] md:h-full flex-shrink-0">
                <img
                  src={item.img}
                  alt={`Review ${item.id}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3 h-full overflow-hidden">
                <span className="text-xs text-gray-500">{item.data}</span>
                <h2 className="text-lg md:text-2xl text-gray-800  line-clamp-2">
                  {item.body}
                </h2>
                <p className="text-xs text-gray-500 line-clamp-[6] md:line-clamp-[11] overflow-hidden">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
