"use client"
import React from "react";
import pic from "@/public/dog.png";
import Image from "next/image";
import { GiNewBorn } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { RiRestaurant2Line } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import {AiFillStar} from "react-icons/ai"

const iconData = [
  { icon: <GiNewBorn  size={40 }/>, description: "Born in the 60s" },
  {
    icon: <TbBulb  size={40 } />,
    description: "Fun fact: R L Stevenson invented the sleeping bag",
  },
  {
    icon: <BsStars  size={40 } />,
    description:
      "What makes my home unique: It is a historic and a family home.",
  },
  { icon: <MdWork  size={40 }/>, description: "My work: Parent & tour guide" },
  {
    icon: <RiRestaurant2Line  size={40 } />,
    description: "For guests, I always: Offer a taste of Edinburgh life",
  },
];

function Hostdetails() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  lg:mx-16 w-auto gap-8">
      
       <div className="bg-white border-[1px] shadow-lg rounded-3xl w-auto  px-6 py-6">
          <div className="flex items-center mx-6">
            <div className="flex flex-col items-center mx-14 justify-center gap-3 m-3">
            <Image
                  className="rounded-[30rem] p-3"
                  height="120"
                  width="120"
                  alt="Avatar"
                  src={pic}
                />  
              <div>
              <p className="text-lg font-bold">Felicitas</p>
                <p className="font-light">superhost</p> 
                </div>           
            </div>
            <div className="flex flex-col items-start justify-center  gap-4">
                   <div className="flex flex-col items-start justify-center border-b-[1px] border-neutral-500 py-1">
                    <p className=" text-xl font-semibold">461</p>
                    <p className=" text-xs font-extralight">Reviews</p>
                   </div>
                 
                   <div className="flex flex-col items-censtartter justify-center border-b-[1px] border-neutral-500 py-1">
                  <div className="flex items-center"> 
                    <p className=" text-xl font-semibold">4.87</p>
                    <AiFillStar/>                        
                  </div>
                    <p className=" text-xs font-extralight">Rating</p>
                   </div>
                 
                   <div className="flex flex-col items-start justify-center">
                   <p className=" text-xl font-semibold">11</p>
                    <p className=" text-xs font-extralight">Years hoisting</p>
                   </div>
            </div>
          </div>
       </div>

        <div className="flex flex-col items-center lg:px-6  lg:mx-8 gap-8 text-md font-light text-slate-950">
          <div className="flex flex-col  items-start gap-4 pl-6">
            {iconData.map((amenity, index) => (
              <div key={index} className=" flex items-center gap-3">
                {amenity.icon}{" "}
                <span className="ml-2">{amenity.description}</span>
              </div>
            ))}
          </div>
          <div className="md:pl-6 lg:pl-0">
            <p className="pb-4">
              {"I'm interested in history, classical music, and literature"}
            </p>
            <div className="flex items-center gap-1">
              <p className="underline">{"Show more"}</p>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>

        <div className="  mr-48 lg:mr-[16rem]">
        <button className="bg-black text-white rounded-lg border-[1px]  px-6 py-8 md:p-2 lg:p-4">
          Message Host
        </button>
      </div>
      <div>
        <hr className="border-[0.006rem] border-neutral-300  " />
        <p className=" text-xs  font-light  md:p-0  md:mx-5 lg:mx-6 lg:p-4 lg:pl-6">
          To protect your payment, never transfer money or communicate outside
          of the Airbnb website or app.
        </p>
      </div>
       </div>
     
    
    </>
  );
}

export default Hostdetails;
