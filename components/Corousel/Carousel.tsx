"use client";
import React from "react";
import { FaToggleOn } from "react-icons/fa";
import Together from "./Together";
import { BsFilterSquareFill } from "react-icons/bs";
import Container from "./Container";
import Carousalswiper from "./Carouselswiper";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function Carousel() {
  return (
    <Container>
      {/* <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-8 gap-3"> */}
      <div className="overflow-hidden ">
        <div
          className="flex flex-row items-center justify-between w-auto overflow-auto scrollbar-none "
          style={{ overflowX: "hidden" }}
        >
          {/* {items.map((item) => (
            <Together key={item.label} label={item.label} icon={item.icon} />
          ))} */}
          <Carousalswiper />
        </div>
      </div>

      <div className="flex items-center justify-stretch space-x-4">
        <button className="border-[1px]  p-3 font-semibold text-xs border-neutral-200 rounded-md  md:px-5 hidden sm:block ">
          <div className="flex items-center gap-2">
            <BsFilterSquareFill size={18} />
            <p>Filters</p>
          </div>
        </button>
        <button className="border-[1px] w-[12rem] p-3 font-semibold  text-xs   border-neutral-200 rounded-md hidden sm:block ">
          <div className="flex items-center gap-0">
            {/* <FaToggleOn size={22}/> */}
            <p> Display total before taxes</p>
          </div>
        </button>
      </div>
    </Container>
  );
}

export default Carousel;
