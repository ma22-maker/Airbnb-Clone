"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { daylight } from "./HelperImages";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Listingdetails = () => {
  return (
    <>
     <div className="md:hidden p-0">
     <Swiper
        cssMode={true}
        //navigation={true}
        //pagination={true}
        mousewheel={true}
        keyboard={true}
        pagination={{
          type: 'fraction',
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=""
      >
        {daylight.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <Image
              src={imageSrc}
              alt={`Slide ${index + 1}`}
              className="object-cover h-[63vh] w-full p-0 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    </>
  );
};

export default Listingdetails;
