"use client";
import React from "react";
import { BsFilterSquareFill } from "react-icons/bs";
import Container from "@/components/Corousel/Container";
import Carousalswiper from "@/components/Corousel/Carouselswiper";

function Trial() {
  return (
    <Container>
      <div className="grid grid-cols-6 md:grid-cols-12   gap-2  md:gap-3   lg:gap-5 flex items-center ">
        <div className="col-span-6 sm:col-span-5  md:col-span-9 flex flex-row items-center justify-between  gap-2  md:gap-3   lg:gap-5">
          <div className=" md:col-span-7 col-span-6 flex flex-row items-center justify-between w-auto overflow-auto scrollbar-none ">
            <Carousalswiper />
          </div>

          <div className=" sm:col-span-1 md:col-span-2 hidden sm:block">
            <button className="border-[1px]  p-3 font-normal md:font-medium  lg:font-semibold text-xs border-neutral-200 rounded-md  md:px-5 ">
              <div className="flex items-center gap-2">
                <BsFilterSquareFill size={18} />
                <p>Filters</p>
              </div>
            </button>
          </div>
        </div>
        <div className=" hidden md:block gap-4 col-span-3">
          <div className="flex items-center justify-center p-3 gap-1 border-[1px] text-md border-neutral-200 rounded-md ">
            <BsFilterSquareFill />
            <button className=" font-normal md:font-medium  lg:font-semibold  text-xs  ">
              <p> Display total before taxes</p>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Trial;

// "use client";
// import React from "react";
// import { register } from "swiper/element";
// import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
// import { GiWindmill } from "react-icons/gi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import Together from "./Corousel/Together";

// export const items = [
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
// ];

// const SwiperCarousel = () => {
//   return (
//     <Swiper
//       className="w-full relative"
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       grabCursor={true}
//       spaceBetween={10}
//       slidesPerView={10}
//       navigation={{
//         nextEl: ".custom-next-button",
//         prevEl: ".custom-prev-button",
//       }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       {items.map((item, index) => (
//         <SwiperSlide key={index}>
//           <Together key={item.label} label={item.label} icon={item.icon} />
//         </SwiperSlide>
//       ))}
//       <div className="custom-prev-button absolute left-0 top-1/2 transform -translate-y-1/2 custom-prev-button text-red-500 font-bold text-lg p-2 rounded ">
//         Prev
//       </div>
//       <div className=" custom-next-button absolute right-0 top-1/2 transform -translate-y-1/2 custom-next-button text-red-500 font-bold text-lg p-2 rounded">
//         Next
//       </div>
//     </Swiper>
//   );
// };

// export default SwiperCarousel;
