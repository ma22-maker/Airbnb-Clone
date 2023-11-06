import React from "react";
import Airbnb from "./Airbnb";
import Usermenu from "./Usermenu";
import Searchbuttons from "./Searchbuttons";



function Navbardetails() {
  return (
    <>
    <div className=" w-full bg-white  shadow-md hidden md:block ">
      <div
        className="
          py-4 
          border-[1px]
        "
      >
        <div
          className="max-w-[2520px]
          xl:mx-20
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
    </div>
    </>
  );
}

export default Navbardetails;
