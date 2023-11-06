/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import house from "@/public/house.jpg";
import pic from "@/public/pic.jpg";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Listingpic from "@/components/Listing/Listingpic";
import Navbardetails from "@/components/Navbar/NavbarDetails";
import Reviews from "@/components/Additionaldetails/Reviews";
import { AiFillStar } from "react-icons/ai";
import Smallscreenreserve from "@/components/Additionaldetails/Smallscreenreserve";
import IconRow from "@/components/Menusmallscreen";
import { LuBedSingle } from "react-icons/lu";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineBathroom } from "react-icons/md";
import g2 from "@/public/pexels-donald-tong-189295.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  FaTree,
  FaUtensils,
  FaWifi,
  FaBriefcase,
  FaVideo,
  FaBell,
} from "react-icons/fa";
import Footertwo from "@/components/Footer/Footer2";
import Reservdet from "@/components/Additionaldetails/Reservdet";
import Hostdetails from "@/components/Additionaldetails/Hostdetails";

const amenities = [
  { name: "Garden view", icon: <FaTree /> },
  { name: "Kitchen", icon: <FaUtensils /> },
  { name: "Wifi", icon: <FaWifi /> },
  { name: "Dedicated workspace", icon: <FaBriefcase /> },
  { name: "Security cameras on property", icon: <FaVideo /> },
  { name: " Carbon monoxide alarm", icon: <FaBell /> },
  { name: " Smoke alarm", icon: <FaBell /> },
];

const categories = [
  {
    icon: TbBeach,
    label: "Self check-in",
    description: "You can check in with the building staff.",
  },
  {
    icon: TbMountain,
    label: "Ashalata is a Superhost",
    description: "Superhosts are experienced, highly rated Hosts.",
  },
  {
    icon: TbPool,
    label: "Dive right in",
    description: "This is one of the few places in the area with a pool.",
  },
];

function page() {
  const ReviewRef = useRef<HTMLDivElement | null>(null);
  const NavtwoRef = useRef<HTMLDivElement | null>(null);
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [reserv, setReserv] = useState<boolean>(false);
  const listingPicRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const review = ReviewRef.current;
      const navtab = NavtwoRef.current;

      if (listingPicRef.current) {
        const listingPicBottom =
          listingPicRef.current.getBoundingClientRect().top;
        if (window.scrollY >= listingPicBottom + 500) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }

      if (review && navtab) {
        const reviewRect = review.getBoundingClientRect().top;
        const navtabRect = navtab.getBoundingClientRect().bottom;

        if (navtabRect >= reviewRect) {
          setReserv(true);
        } else {
          setReserv(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <IconRow />
      <Navbardetails />
      {showNavbar && (
        <nav
          ref={NavtwoRef}
          className="sticky top-0 left-0  z-10 w-full bg-white shadow-lg hidden md:block"
        >
          <div className="max-w-[2520px]  xl:px-20 md:px-10 sm:px-2 px-4 mx-auto xl:mx-20  ">
            <div className=" flex items-center justify-between">
              <div className="h-20">
                <ul className="flex items-center justify-start gap-6">
                  <li className="hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5">
                    <a href="#home">Photos</a>
                  </li>
                  <li className="hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5">
                    <a href="#nowhere">Anemities</a>
                  </li>
                  <li className="hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5">
                    <a href="#everywhere">Reviews</a>
                  </li>
                  <li className="hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5">
                    <a href="#opportunities">Location</a>
                  </li>
                </ul>
              </div>
              <div>{reserv && <Reservdet />}</div>
            </div>
          </div>
        </nav>
      )}
      <div className="">
        <div>
          <Listingpic />
        </div>
        <div
          ref={listingPicRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-3 py-5 relative max-w-[2520px]
          
    mx-auto
    xl:mx-20
    xl:px-20 
    md:px-10
    sm:px-2
    px-4"
        >
          <div
            // ref={firstDivRef}
            className=" col-span-1 md:col-span-7 flex flex-col py-3 gap-8"
          >
            <div className="flex flex-col gap-2">
              <div
                className="
                text-[25px] 
                font-semibold 
                flex 
                flex-row 
                items-center
                justify-between
                gap-2
                pt-6
              "
              >
                <div>Room in a rental unit hosted by Golwen</div>
                <Image
                  className="rounded-full"
                  height="70"
                  width="70"
                  alt="Avatar"
                  src={pic}
                />
              </div>
              <div className="hidden sm:block">
                <div
                  className="
                flex 
                flex-row 
                items-center 
                gap-2
                font-medium
                text-black
                
              "
                >
                  <div>{"16+"} guests</div>
                  <div>{4} bedrooms</div>
                  <div>{3} rooms</div>
                  <div>{3} bathrooms</div>
                </div>
              </div>
              <div className="pt-4">
                <div className="grid  grid-cols-3 gap-4 md:gap-5">
                  <div className=" flex flex-col items-start min-[1093px]:flex-row min-[1093px]:items-center w-auto bg-white py-4 px-6 rounded-xl border-[1px]  col-span-1 gap-3">
                    <LuBedSingle className="text-2xl mr-2 text-black block" />
                    <p className=" sm:whitespace-nowrap text-xs lg:text-base">
                      1 queen bed
                    </p>
                  </div>

                  <div className="flex flex-col items-start min-[1093px]:flex-row min-[1093px]:items-center bg-white py-4 px-6 rounded-xl border-[1px]  col-span-1 gap-3">
                    <MdOutlineBathroom className="text-2xl sm:text-4xl md:text-3xl mr-2 text-black" />
                    <p className="text-xs lg:text-base">Shared bathroom</p>
                  </div>

                  <div className=" flex flex-col items-start min-[1093px]:flex-row min-[1093px]:items-center bg-white py-4 px-6 rounded-xl border-[1px]  col-span-1 gap-3">
                    <AiOutlineUsergroupAdd className="text-2xl mr-2 text-black" />
                    <p className="text-xs lg:text-base">Other guests</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-10">
              {categories.map((category, index) => (
                <div className="flex flex-row items-center gap-10" key={index}>
                  <category.icon size={30} className="text-neutral-600" />
                  <div className="flex flex-col">
                    <div className="    sm:text-sm md:text-[20px]  font-[590] ">
                      {category.label}
                    </div>
                    <div className="text-neutral-500 font-light  text-xs md:text-base lg:text-lg ">
                      {category.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr />
            <div
              className="
          text-base font-light text-zinc-900"
            >
              Some info has been automatically translated.{" "}
              <span className=" font-semibold underline">
                Show original language
              </span>
            </div>

            {/* <hr />
            <div>
              <div
                className="
                text-[25px]
                pb-4
                
                font-[500] "
              >
                Meet your Host
              </div>
              <div className="bg-stone-200 rounded-lg px-6 pt-10 pb-6 ">
                <div className="grid grid-cols-6">
                  <div className="col-start-2 col-span-4">
                      <div>
                        hello
                      </div>
                  </div>

                </div>
              </div>
            </div> */}

            <hr />
            <div>
              <div
                className="
                text-[25px]
                pb-4
                
                font-[500] "
              >
                About this place
              </div>

              <div
                className="
          text-md font-light text-zinc-900"
              >
                In the Hamptons of Mumbai, Arabella is the ultimate
                Bohemian-style pool villa in Alibaug. The home boasts luxury in
                every corner with a unique swimming pool with a sunken lounge, a
                spacious lounge with a bar, and indoor games, and it is
                surrounded by a mango orchard. With just 1.8 km from Mandwa
                Jetty, this 4BR villa is the perfect getaway near Mumbai.
                Experience a luxurious stay and make lasting memories with loved
                ones. Book now for an unforgettable luxury vacation experience,
                close to Mumbai.The place ....
              </div>
              <div className="pt-6 flex items-center gap-1">
                <p className="underline  text-base md:text-xl font-medium">
                  {"Show more"}
                </p>
                <MdKeyboardArrowRight size={24} />
              </div>
            </div>
            <hr />
            <div
              className="
          text-md font-light text-zinc-900"
            >
              <div
                className="pb-4
                text-[25px]
                
                font-[500] "
              >
                {"Where you'll sleep "}
              </div>
              <div className="flex flex-col items-start  gap-2  h-[14rem] w-[14rem] md:h-[20rem] md:w-[20rem] ">
                <Image
                  src={g2}
                  alt={"img"}
                  className="object-cover rounded-lg"
                />
                <p className="text-lg font-semibold">Bedroom</p>
                <p className=" text-md font-light text-zinc-900">1 queen bed</p>
              </div>
            </div>
            <hr />
            <div
              className="text-[25px]
                
                font-[500] "
            >
              What is this place Offers
            </div>
            <div
              className="
          text-md font-light text-slate-950"
            >
              <div>
                <div className="amenities-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4  flex-col lg:flex-row items-center py-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="amenity flex items-center">
                      {amenity.icon}{" "}
                      <span className="ml-2">{amenity.name}</span>
                    </div>
                  ))}
                </div>
                <div className="text-zinc-900 pt-6">
                  <button className="border-[1px]   w-full  md:w-auto rounded-md border-zinc-900 shadow-sm px-4 py-4 ">
                    Show all 28 amenities
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div
              className="
          text-md font-light text-neutral-500"
            >
              Calender
            </div>
          </div>
          <div className=" col-span-1 md:col-span-5 ml-[8.33%]  gap-3 hidden md:block">
            {/* ref={stickyRef} */}
            <div className="sticky top-[7rem] w-full mt-8">
              <div className=" bg-white  border-[1px] shadow-md  rounded-lg p-5">
                <div className=" flex flex-col lg:flex-row justify-between py-5">
                  <div className="flex-col items-start">
                    <div className="text-md md:text-lg font-semibold text-black">
                      {"$23,34,567"}
                    </div>
                    <p>Total before taxes</p>
                  </div>
                  <div className="flex gap-1">
                    <AiFillStar />
                    <p className=" text-sm md:text-md  text-semibold text-black">
                      4.91 <span className=" text-neutral-500">.4reviews</span>
                    </p>
                  </div>
                </div>
                <div className="border-[1px] border-neutral-500 rounded-md p-2 py-3">
                  <div className="flex flex-row items-start justify-evenly">
                    <div className="p-2 text-sm md:text:md">
                      <p className="text-xs md:text:sm">CHECK-IN</p>
                    </div>
                    <hr className="border-r-[1px] border-neutral-500" />
                    <div className="p-2 ">
                      <p className="text-xs md:text:sm">CHECK-Out</p>
                    </div>
                  </div>
                  <hr />
                  <div className="p-2 text-sm md:text:md">Guests</div>
                </div>

                <div className="flex items-center justify-center py-3">
                  <button className=" w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-6 rounded-md">
                    Reserve
                  </button>
                </div>
                <div className="flex text-sm  md:text-md items-center justify-center pb-3">
                  <p>You will not be charged yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          ref={ReviewRef}
          className="
          text-md font-light text-zinc-950"
        >
          <Reviews />
        </div>
        <hr />
        {/* <div
          className="
          text-md font-light text-neutral-500"
        >
          Map
        </div> */}
        <hr />
      </div>
      <Footertwo />
      <Smallscreenreserve />
    </>
  );
}

export default page;
