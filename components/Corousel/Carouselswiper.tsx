"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Together from "./Together";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const items = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
];

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function Carousalswiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        mousewheel={true}
        keyboard={true}
        slidesPerGroupSkip={0}
        grabCursor={true}
        // navigation={true}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          2560: {
            slidesPerView: 18,
            slidesPerGroup: 16,
          },
          1440: {
            slidesPerView: 10,
            slidesPerGroup: 10,
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1028: {
            slidesPerView: 9,
            slidesPerGroup: 10,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          425: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className=""
      >
         
       {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Together key={item.label} label={item.label} icon={item.icon} />
          </SwiperSlide>
        ))}
          <div className="swiper-button-prev swiper-button-white">
          <MdKeyboardArrowLeft size={18} />
        </div>
         <div className="swiper-button-next swiper-button-white">
          <MdKeyboardArrowRight size={18} />
        </div>
      
      </Swiper>
    </>
  );
}
