import React from 'react'
import { IconType } from 'react-icons';

interface CategoryBoxProps {
    icon: IconType,
    label: string;
  }

function Together({  icon: Icon , label }: CategoryBoxProps) {
    return ( 
        <div
          className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            md:gap-1
             lg:gap-2
            p-2
            md:m-0
             sm:m-1
             m-3
             gap-3
            text-gray-500
            hover:border-b-2
            hover:border-neutral-400
            hover:text-neutral-800
            transition
            cursor-pointer
          `}
        >
          <div className='text-md lg:text-xl'>
          <Icon />
          </div>
          <div className="font-medium text-xs sm:text-sm">
            {label}
          </div>
        </div>
       );
}

export default Together