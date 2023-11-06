"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { imageSources,imgbeach,daylight,imgclassic} from "./HelperImages";
import { AiOutlineHeart } from "react-icons/ai";
import ListingImages from "./ListingImages";
import { StaticImageData } from "next/image";

const listings = [
  {
    id: 1,
    region: "California",
    category: "Entire House",
    label: "Cozy Beachfront House",
    price: 150,
    Images : imageSources
  },
  {
    id: 2,
    region: "New York",
    category: "Private Room",
    label: "Charming Brownstone Room",
    price: 80,
    Images : imgbeach
  },
  {
    id: 3,
    region: "Florida",
    category: "Entire Apartment",
    label: "Sunny Downtown Apartment",
    price: 120,
    Images : daylight
  },
  {
    id: 4,
    region: "California",
    category: "Entire House",
    label: "Cozy Beachfront House",
    price: 150,
    Images : imgclassic
  },
  {
    id: 5,
    region: "New York",
    category: "Private Room",
    label: "Charming Brownstone Room",
    price: 80,
    Images : imgclassic
  },
  {
    id: 6,
    region: "Florida",
    category: "Entire Apartment",
    label: "Sunny Downtown Apartment",
    price: 120,
    Images : imageSources
  },
  {
    id: 7,
    region: "California",
    category: "Entire House",
    label: "Cozy Beachfront House",
    price: 150,
    Images : daylight
  },
  {
    id: 8,
    region: "New York",
    category: "Private Room",
    label: "Charming Brownstone Room",
    price: 80,
    Images : imgbeach
  },
  {
    id: 9,
    region: "Florida",
    category: "Entire Apartment",
    label: "Sunny Downtown Apartment",
    price: 120,
    Images : imgbeach
  },
  {
    id: 10,
    region: "California",
    category: "Entire House",
    label: "Cozy Beachfront House",
    price: 150,
    Images : daylight
  },
  {
    id: 11,
    region: "New York",
    category: "Private Room",
    label: "Charming Brownstone Room",
    price: 80,
    Images : imgclassic
  },
  {
    id: 12,
    region: "Florida",
    category: "Entire Apartment",
    label: "Sunny Downtown Apartment",
    price: 120,
    Images : imageSources
  },
  {
    id: 13,
    region: "California",
    category: "Entire House",
    label: "Cozy Beachfront House",
    price: 150,
    Images : daylight
  },
  {
    id: 14,
    region: "New York",
    category: "Private Room",
    label: "Charming Brownstone Room",
    price: 80,
    Images : imgbeach
  },
  {
    id: 15,
    region: "Florida",
    category: "Entire Apartment",
    label: "Sunny Downtown Apartment",
    price: 120,
    Images : imageSources
  },
  {
    id: 16,
    region: "California",
    category: "Entire House",
    label: "Cozy Beachfront House",
    price: 150,
    Images : imgclassic
  },
  {
    id: 17,
    region: "New York",
    category: "Private Room",
    label: "Charming Brownstone Room",
    price: 80,
    Images : imageSources
  },
  {
    id: 18,
    region: "Florida",
    category: "Entire Apartment",
    label: "Sunny Downtown Apartment",
    price: 120,
    Images : daylight
  },
];

function Listing() {
  const router = useRouter();
  const handleListingClick = (id: number, images: StaticImageData[]) => {
    router.push('/details', {
    });
  };
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-8 max-w-[2520px]mx-auto xl:px-20  md:px-10  sm:px-2 px-4 mt-4 mb-12">
        {listings.map((listing) => (
          <div
            key={listing.id}
            onClick={()=>handleListingClick(listing.id,listing.Images)}
            className="cursor-pointer group"
          >
            <div className="flex flex-col gap-2 w-full">
              <div
                className="
            aspect-square
            relative
            overflow-hidden
            rounded-xl
          "
              >
                {/* <Image
                  fill
                  className="
              object-cover
              h-full
              w-full
              group-hover:scale-110
              transition
            "
                  src={house2}
                  alt={listing.label}
                /> */}
                <ListingImages images={listing.Images} />
                <div
                  className="
            absolute
            top-3
            right-3
          "
                >
                  <AiOutlineHeart size={20} color="white" />
                </div>
              </div>
              <div className="font-semibold text-lg">
                {listing.region}, {listing.label}
              </div>
              <div className="font-light text-neutral-500">
                {listing.category}
              </div>
              <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">$ {listing.price}</div>
                <div className="font-light">night</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Listing;
