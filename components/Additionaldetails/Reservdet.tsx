import React from 'react'


function Reservdet() {
  return (
    <>
    <div className="flex items-center justify-between py-3 md:py-5 gap-3">
  <div>
    <div className=" text-sm md:text-xl font-semibold text-black">₹85,018</div>
    <div className="text-neutral-500 text-sm">Total before taxes</div>
   <div className='flex'>
   <div className="text-black font-semibold text-sm">4.98 ·</div>
    <div className="text-neutral-500 text-sm">44 reviews</div>
   </div>
  </div>
  <div>
    <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 px-6 rounded-md">Reserve</button>
  </div>
</div>

    </>
  )
}

export default Reservdet