import React from "react";
import Image from "next/image";
import pic from "@/public/pic.jpg";
import{AiFillStar} from "react-icons/ai"

const reviews = [
  {
    name: "Aditya",
    date: "October 2023",
    content:
      "Our stay was just lovely. The rooms, place, food, surroundings, everything was on point. The pictures don’t do justice to the place. The staff is really courteous. Book without a doubt :)",
  },
  {
    name: "Nandhini",
    date: "October 2023",
    content:
      "This is a great place to relax and revamp yourself. The house is beautifully and thoughtfully decorated to optimize your senses. Every time you enter a room you will find something",
  },
  {
    name: "Aishwarya",
    date: "October 2023",
    content:
      "This is the place where you want to go to unwind and relax. Away from the noise of the city, hustle/bustle. Cook is great and food is simple, healthy and yummy.",
  },
  {
    name: "Poonam",
    date: "September 2023",
    content:
      "Melwyn is a great host. We felt like staying at a relative's place This is a great place to relax and revamp yourself. The house is beautifully and thoughtfully decorated to optimize your senses",
  },
];

function Reviews() {
  return (
    <>
  <div className=" xl:px-20 
  xl:mx-20
    md:px-10
    sm:px-2
    px-4">
  <div className="py-5 ">
    <div className="flex items-center py-5 gap-1">
    <AiFillStar size={20}/> 
    <p className="text-xl md:text-3xl font-medium text-black ">4.91 .4 reviews</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {reviews.map((review, index) => (
        <div key={index} className="p-4 flex-col">
          <div className="flex items-center justify-start gap-3 ">
            <Image
              className="rounded-full"
              height="30"
              width="30"
              alt="Avatar"
              src={pic}
            />
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-medium">{review.name}</h3>
              <p className="text-gray-500 text-xs">{review.date}</p>
            </div>
          </div>
          <p className="text-gray-700 p-3">{review.content}</p>
        </div>
      ))}
    </div>
    </div>
  </div>
    </>
  );
}

export default Reviews;
