"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Links() {
  const currentname = usePathname()
 console.log(currentname)
  return (
    <>
    
  <div className=' flex space-x-4 items-center justify-center  hidden lg:block' >
  <Link href="/" className={` ${
                    currentname === "/" ? "text-black font-semibold" : " text-zinc-500  hover:text-stone-900"
                  }`}>
        Stays
      </Link>

      <Link href="/experiences"  className={`${
                    currentname === "/experiences" ? "text-black  font-semibold" : " text-zinc-500  hover:text-stone-900"
                  }`}>
        Experiences
      </Link>

      <Link href="/onlineexperiences" className={` ${
                    currentname === "/onlineexperiences" ? "text-black  font-semibold" : " text-zinc-500  hover:text-stone-900"
                  }`}>
        Online Experiences
      </Link>
  </div>
    </>
  )
}

export default Links