import React from 'react'
import Image, { StaticImageData } from "next/image"
  import g1 from "@/public/daylight house/pexels-curtis-adams-3773570.jpg"
  import g2 from "@/public/pexels-donald-tong-189295.jpg"

// interface ImageGalleryProps {
//     images: StaticImageData[]
//   }

function GridLayout () {
  return (
    
    <>
      <div className="  rounded-xl pt-6 " >
         
         <div className='grid grid-cols-12 gap-2 '>
          <div className=' col-span-6  h-full'>
          <Image src={g1} alt={"img"}  className="object-cover h-[18rem] rounded-tl-lg rounded-bl-lg "/>        
          </div>

          <div className='col-span-3 flex flex-col gap-2 h-full'>
          <div className=''>
          <Image src={g2} alt={"img"}  className="object-cover h-[9rem]"/>     
          </div>
          <div className=''>
          <Image src={g2} alt={"img"}  className="object-cover h-[8.5rem]"/> 
          </div>
          </div>

          <div className='col-span-3 flex flex-col gap-2'>
          <div className=' ' >
          <Image src={g2} alt={"img"}  className="object-cover  h-[9rem] rounded-tr-lg"/> 
          </div>
          <div className=' ' >
          <Image src={g2} alt={"img"}  className="object-cover  h-[8.5rem]  rounded-br-lg "/> 
          </div>
          </div>
         </div>
     
      </div>













    </>
  )
}

export default GridLayout