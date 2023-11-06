// Navbar.js
"use client"
import React from 'react';
import { useRef } from 'react';
import Reservdet from '../Additionaldetails/Reservdet';

interface NavbartwoProps {
  reserv: boolean;
}
const Navbartwo: React.FC<NavbartwoProps> = ({ reserv }) => {

 const NavtwoRef = useRef<HTMLDivElement | null>(null);
  if (NavtwoRef.current) {
    const NavRect = NavtwoRef.current.getBoundingClientRect().bottom;
   console.log(NavRect,"navtworefdetails")
  }



  return (
    <nav  ref={NavtwoRef} className="sticky top-0 left-0  z-10 w-full bg-white shadow-lg hidden md:block">
      <div className="max-w-[2520px]  xl:px-20 md:px-10 sm:px-2 px-4 mx-auto xl:mx-20  ">
       <div className=' flex items-center justify-between'>
        <div className='h-20'>
        <ul className="flex items-center justify-start gap-6">
          <li className='hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5'>
            <a href="#home">Photos</a>
          </li>
          <li className='hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5'>
            <a href="#nowhere">Anemities</a>
          </li>
          <li className='hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5'>
            <a href="#everywhere">Reviews</a>
          </li>
          <li className='hover:border-b-4 rounded-sm text-sm lg:text-base hover:border-zinc-950 md:py-6 py-5'>
            <a href="#opportunities">Location</a>
          </li>
        </ul>
        </div>
        <div>
          {reserv &&  <Reservdet/>}
        </div>
       </div>
      </div>
    </nav>
  );
}

export default Navbartwo;
