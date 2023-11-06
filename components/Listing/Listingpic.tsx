"use client"
import React from "react";
import Image from "next/image";
import house from "@/public/house2.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import {TbShare2} from "react-icons/tb"
import GridLayout from "../ImagesGrid/GridLayout";
import { daylight } from "@/components/Listing/HelperImages";
import Listingdetails from "./Imageslistingdetails";

function Listingpic() {
  return (
    <>
    <Listingdetails/>
    <div className="  xl:px-20 
    md:px-10
    sm:px-2
    xl:mx-20
    px-4">
      <div className="pt-6 mx-auto" >
        <div className=" text-xl lg:text-2xl font-semibold">5BHK Lux Villa Near Mandwa Jetty, Game room | Pool</div>
        <div className="flex items-center justify-between"> 
        <div className="font-semibold text-sm text-black underline ">Virtasaral, Maharashtra, India</div>
        <div className="hidden min-[500px]:block">
        <div className="flex space-x-3">
        <div
            className="
            text-sm 
            font-light            
            rounded-md
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            md:px-0
            flex 
            items-center
            py-3  px-4
          "
          >
            <TbShare2 size={20}/>
           <p className="underline  p-1 ">Share</p>
           
          </div>
          <div
            className="
            text-sm 
            font-light            
            rounded-md
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            md:px-0
            flex 
            items-center
            py-3  px-4
          "
          >
            <AiOutlineHeart size={20}/>
           <p className="underline  p-1 ">Save</p>
           
          </div>
        </div>
        </div>
        </div>
      </div>
      <div
        className="
              w-full
              rounded-xl
              relative
              hidden md:block
            "
      >
        
         <GridLayout/>
       
      </div>
      </div>
    </>
  );
}

export default Listingpic;
