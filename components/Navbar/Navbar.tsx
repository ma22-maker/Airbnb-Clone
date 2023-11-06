import React from "react";
import Airbnb from "./Airbnb";
import Usermenu from "./Usermenu";
import Searchbuttons from "./Searchbuttons";
import Carousel from "../Corousel/Carousel";
import Trial from "../trial";


function Navbar() {
  return (
    <>
    <div className="sticky top-0 z-10 w-full bg-white  shadow-md ">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        <div
          className="max-w-[2520px]
        mx-auto
        xl:px-20 
        md:px-10
        sm:px-2
        px-4"
        >
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-2
          "
          >
            <Airbnb />
          <Searchbuttons/>
            <Usermenu/>
          </div>
        </div>
      </div>
      <Trial/>
    </div>
    </>
  );
}

export default Navbar;
