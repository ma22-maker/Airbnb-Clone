import React from 'react'
import Otherfooter from './Otherfooter'
import Otherfootertwo from './Otherfootertwo'

function Footertwo() {
  return (
    <>
    <div className='bg-zinc-50'>
    <footer className="bg-zinc-50 text-white p-8 mx-auto xl:px-20  md:px-10 sm:px-2 px-4 lg:mx-20">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="col-span-1">
      <h2 className="text-xl font-semibold text-black mb-4">Support</h2>
      <ul >
        <li><a href="#" className="hover:underline text-black">Help Centre</a></li>
        <li><a href="#" className="hover:underline text-black">AirCover</a></li>
        <li><a href="#" className="hover:underline text-black">Anti-discrimination</a></li>
        <li><a href="#" className="hover:underline text-black">Disability support</a></li>
        <li><a href="#" className="hover:underline text-black">Cancellation options</a></li>
        <li><a href="#" className="hover:underline text-black">Report neighbourhood concern</a></li>
      </ul>
    </div>
    <hr className=' visible lg:hidden'/>
    <div className="col-span-1">
      <h2 className="text-xl font-semibold text-black mb-4">Hosting</h2>
      <ul>
        <li><a href="#" className="hover:underline text-black">Airbnb your home</a></li>
        <li><a href="#" className="hover:underline text-black">AirCover for Hosts</a></li>
        <li><a href="#" className="hover:underline text-black">Hosting resources</a></li>
        <li><a href="#" className="hover:underline text-black">Community forum</a></li>
        <li><a href="#" className="hover:underline text-black">Hosting responsibly</a></li>
      </ul>
    </div>
    <hr className=' visible lg:hidden'/>
    <div className="col-span-1">
      <h2 className="text-xl font-semibold text-black mb-4">Airbnb</h2>
      <ul>
        <li><a href="#" className="hover:underline text-black">Newsroom</a></li>
        <li><a href="#" className="hover:underline text-black">New features</a></li>
        <li><a href="#" className="hover:underline text-black">Careers</a></li>
        <li><a href="#" className="hover:underline text-black">Investors</a></li>
        <li><a href="#" className="hover:underline text-black">Airbnb.org emergency stays</a></li>
      </ul>
    </div>
  </div>
</footer>
<Otherfootertwo/>
</div>
</>
  )
}

export default Footertwo