"use client";
import React, { useRef, useState,useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { BsFilterSquareFill } from "react-icons/bs";
import Together from "./Together";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
  import "swiper/css";
  import "swiper/css/scrollbar";
  import "swiper/css/navigation";
  import "swiper/css/pagination";

  import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

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
  //   {
  //     label: "Beach",
  //     icon: TbBeach,
  //     description: "This property is close to the beach!",
  //   },
  //   {
  //     label: "Windmills",
  //     icon: GiWindmill,
  //     description: "This property is has windmills!",
  //   },
  //   {
  //     label: "Countryside",
  //     icon: TbMountain,
  //     description: "This property is in the countryside!",
  //   },
  //   {
  //     label: "Pools",
  //     icon: TbPool,
  //     description: "This is property has a beautiful pool!",
  //   },
];
function Newpart() {
    const swiper = useSwiper();
  return (
    <>
      <div className="grid  grid-col-span-12 xl:grid-col-26 md:grid-cols-16 gap-3">
        <div className=" col-span-12  md:col-span-12 xl:col-span-22 gap-4">
          <div className="flex flex-row items-center justify-between">
            <div className="col-span-12 sm:col-span-10  md:col-span-10 xl:col-span-20 ">
              <div className="flex items-center">
              <div className="col-span-1 arrow-left p-2 z-10 bg-red-500 shadow-md rounded-full w-auto text-black"
            //    onClick={() => swiper.slidePrev()}
               >
                  <MdKeyboardArrowLeft size={18} />
                </div>
             <div className="col-span-10 sm:col-span-8 md:col-span-8 xl:col-span-18">
             <Swiper
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="w-[33]"
                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                // navigation={true}
                mousewheel={true}
                slidesPerView={5}
                keyboard={true}
                grabCursor={true}
                // breakpoints={{
                //     2560: {
                //         slidesPerView: 18,
                //         slidesPerGroup: 16,
                //       },
                //   1440: {
                //     slidesPerView: 10,
                //     slidesPerGroup: 10,
                //   },
                //   1024: {
                //     slidesPerView: 6,
                //     slidesPerGroup: 6,
                //   },
                //   1028: {
                //     slidesPerView: 9,
                //     slidesPerGroup: 10,
                //   },
                //   768: {
                //     slidesPerView: 3,
                //     slidesPerGroup: 3,
                //   },
                // }}
                >
            
                  {items.map((item, index) => (
                    <ul key={index}>
                        <SwiperSlide>
                      <Together
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                      />
                      </SwiperSlide>
                    </ul>
                  ))}
              
               </Swiper>
             </div>
               <div className="col-span-1 z-10 arrow-right p-2  bg-red-400 rounded-full  shadow-md w-auto text-black"
                // onClick={() => swiper.slideNext()}
                >
                  <MdKeyboardArrowRight size={18} />
                </div>
              </div>
            </div>
            <div className="  hidden sm:block col-span-2 md:col-span-2 xl:col-span-2">
              <button className="border-[1px]  p-3 font-semibold text-xs border-neutral-200 rounded-md  md:px-5 hidden sm:block ">
                <div className="flex items-center gap-2">
                  <BsFilterSquareFill size={18} />
                  <p>Filters</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" hidden md:block md:col-span-4 xl:col-span-4 gap-4">
          <div className="flex items-center justify-center p-3 gap-1 border-[1px] text-md border-neutral-200 rounded-md ">
            <TbPool />
            <button className="  font-semibold  text-xs  ">
              <p> Display total before taxes</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newpart;
