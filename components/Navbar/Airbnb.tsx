'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "@/public/logoaie.png"
import logo2 from "@/public/logo.png"

const Airbnb = () => {
  const router = useRouter();

  return ( 
    <>
    <Image
      onClick={() => router.push('/')}
      className="hidden cursor-pointer xl:block" 
      src={logo} 
      height="100" 
      width="100" 
      alt="Logo" 
    />
    <Image
      onClick={() => router.push('/')}
      className="hidden  cursor-pointer md:max-xl:block" 
      src={logo2} 
      height="35" 
      width="35" 
      alt="Logo" 
    />
    </>
   );
}
 
export default Airbnb;