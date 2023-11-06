import React from "react";
import { BiSearch } from "react-icons/bi";
import filter from "@/public/filter.png"
import Image from "next/image";

function Searchbuttons() {
  return (
    <>
      <div
        className="
      border-[1px] 
      w-full 
      md:w-auto 
      py-2 
      hidden sm:block
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer
    "
      >
        <div
          className="
        flex 
        flex-row 
        items-center 
        justify-between
      "
        >
          <div
            className="
          text-sm 
          font-semibold 
          hidden 
          sm:block 
          px-6
        "
          >
            Anywhere
          </div>
          <div
            className="
          hidden 
          sm:block 
          text-sm 
          font-semibold 
          px-6 
          border-x-[1px] 
          flex-1 
          text-center
        "
          >
            Any week
          </div>
          <div
            className="
          text-sm 
          pl-6 
          pr-2 
          text-gray-600 
          flex 
          flex-row 
          items-center 
          gap-3
        "
          >
            <div className="hidden sm:block">Add Guests</div>
            <div
              className="
            p-2 
            hidden sm:block
            bg-rose-500 
            rounded-full 
            text-white
            
          "
            >
              <BiSearch size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 justify-between visible sm:hidden gap-2 w-full py-3">
        <div className="border-[1px] col-span-4 w-auto  py-2  rounded-full   shadow-sm   hover:shadow-md  transition  cursor-pointer"
        >
          <div className="flex items-center justify-start gap-2  px-2">
            <div
              className="
             
                px-2           
            text-black           
          "
            >
              <BiSearch size={26} />
            </div>

            <div className="flex flex-col items-start gap-1">
              <div
                className="
          text-base
          font-[590]  
        "
              >
                Anywhere
              </div>
              <div className="flex items-center gap-2">
                <div className=" text-gray-600  text-sm">Any week</div>
                <div className=" text-gray-600">{"."}</div>
                <div className=" text-gray-600  text-sm">Add Guests</div>
              </div>
            </div>
          </div>
        </div>
       
          <div
            className="col-span-1
            m-3
            p-3         
            bg-white
            border-[1px]
            border-neutral-500
            rounded-full 
            text-black
            
          "
          >
            
            <Image
               src={filter}
               alt="filter"
               height={18}
               width={18}
             />
         
          </div>
        
      </div>
    </>
  );
}

export default Searchbuttons;
