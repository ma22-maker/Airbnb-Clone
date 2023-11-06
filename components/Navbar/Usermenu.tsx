import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {IoPersonCircleSharp} from "react-icons/io5"
import{FiGlobe} from "react-icons/fi"

function Usermenu() {
  return (
    <>
      <div className="relative hidden  md:block">
        <div className="flex flex-row items-center gap-3 md:gap-0">
          <div
            className="
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            md:px-0
          "
          >
            Airbnb your home
          </div>
          <div
            className="
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
          >
           <FiGlobe size={20}/>
          </div>
          <div
            className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          shadow-md
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
          >
            <AiOutlineMenu />
            <div className="">
              <IoPersonCircleSharp size={30}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usermenu;
