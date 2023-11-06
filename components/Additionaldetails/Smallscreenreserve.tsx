import React from "react";

function Smallscreenreserve() {
  return (
    <>
      <div className="sticky bottom-0 left-0 right-0 bg-white shadow-xl p-4 md:hidden  px-5">
        <div className="flex items-center justify-between gap-3  ">
          <div className="p-1">
            <div className="text-sm md:text-xl font-semibold text-black">
              ₹85,018
            </div>
            <div className="text-neutral-500 text-sm">Total before taxes</div>
            <div className="flex items-center">
              <div className="text-black font-semibold underline text-sm">2-7 Nov</div>
              {/* <div className="text-neutral-500 text-sm ml-1">44 reviews</div> */}
            </div>
          </div>
          <div className="p-1">
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-6 rounded-md">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Smallscreenreserve;
