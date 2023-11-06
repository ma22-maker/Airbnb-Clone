import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaShare, FaHeart } from "react-icons/fa";

function IconRow() {
  return (
    <div className="flex items-center justify-between z-40 absolute top-0  md:hidden w-full py-5 px-5">
      <Link href="/">
        <div className="p-2 bg-white shadow-md rounded-full text-black">
          <FaArrowLeft size={20} />
        </div>
      </Link>
      <div className="flex space-x-4">
        <div className="p-2 bg-white  shadow-md rounded-full text-black">
          <FaShare size={20} />
        </div>
        <div className="p-2 bg-white shadow-md rounded-full text-black">
          <FaHeart size={20} />
        </div>
      </div>
    </div>
  );
}

export default IconRow;
