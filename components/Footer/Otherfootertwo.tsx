import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FiGlobe} from "react-icons/fi"
import fb from "@/public/fb2.png"
import instra from "@/public/instra.png"
import tweet from "@/public/tweet.png"

function Otherfootertwo() {
  return (
   <>
   <div className="flex flex-col items-start justify-between  mx-0 sm:mx-0 md:mx-7 lg:mx-20 py-5 px-7 text-sm bg-zinc-50 text-zinc-900 border-t border-gray-200 lg:py-6 lg:flex-row">
   <div className="flex flex-col items-start order-last lg:flex-row lg:order-none">
     <span className="mr-0 text-center lg:mr-4">© 2023 Airbnb, Inc.</span>
     <span className="mb-2 mr-0 lg:mr-8 lg:mb-0">
       | Clone by{' '}
       <a
         href=""
         target="_blank"
         className="font-medium text-primary hover:underline"
       >
         Deepthi mai
       </a>{' '}
       |
     </span>
     <ul className="flex space-x-6 list-disc">
       <li className="hover:underline">
         <Link href="/">
         Privacy
         </Link>
       </li>
       <li className="hover:underline">
         <Link href="/">
         Terms
         </Link>
       </li>
       <li className="hover:underline">
         <Link href="/">
         Sitemap
         </Link>
       </li>
     </ul>
   </div>
   <div className="flex flex-col items-start mb-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:mb-0">
     <ul className="flex items-center space-x-4">
       <li>
         <Link href="/" className="flex items-center">
           
             <FiGlobe className="h-5 mr-1" />
             <span className="text black font-semibold">English (US)</span>
         </Link>
       </li>
       <li>
         <Link href="/" className="flex items-center">
          
             <span className="mr-1">$</span>
             <span className="text-black font-semibold">USD</span>
        
         </Link>
       </li>
     </ul>
     <div className='hidden md:block'>
     <ul className="flex space-x-6 ">
       <li className="flex items-center ">
         <Link href="/">
          
             <Image
               src={fb}
               alt="facebook"
               height={16}
               width={16}
             />
         
         </Link>
       </li>
       <li className="flex items-center">
         <Link href="/">
          
             <Image
               src={tweet}
               alt="facebook"
               height={16}
               width={16}
             />
         
         </Link>
       </li>
       <li className="flex items-center">
         <Link href="/">
          
             <Image
               src={instra}
               alt="facebook"
               height={16}
               width={16}
             />
        
         </Link>
       </li>
     </ul>
     </div>
   </div>
   </div>

   </>
  )
}

export default Otherfootertwo