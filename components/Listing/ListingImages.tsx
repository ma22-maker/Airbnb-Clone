"use client"
import React from "react"
import Image, { StaticImageData } from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

interface ImageGalleryProps {
    images: StaticImageData[]
  }
  
const ListingImages: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        // navigation={true}
        // navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className=""
      >
      {images.map((imageSrc, index) => (
        <SwiperSlide key={index}>
          <Image src={imageSrc} alt={`Slide ${index + 1}`}  className="object-cover h-full w-full"/>
        </SwiperSlide>
      ))}
      {/* <div className="hover:swiper-button-prev hover:swiper-button-white ">
          <MdKeyboardArrowLeft size={18} />
        </div>
         <div className="hover:swiper-button-next hover:swiper-button-white ">
          <MdKeyboardArrowRight size={18} />
        </div> */}
      </Swiper>
    </>
  );
}
export  default ListingImages