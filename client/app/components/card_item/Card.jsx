import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = (props) => {
  return (
    <Link href={`/product/${props.item.id}`}>
      <div className="flex flex-col md:gap-2 w-[23rem] md:shadow-md px-4 md:px-0 md:hover:scale-105 ease-in duration-300 md:hover:shadow-2xl md:hover:shadow-gray-500 md:mb-4">
        <Image
          src={props.item.image}
          alt="item"
          className=" object-cover w-full"
        />
        <div className="flex flex-col gap-6 p-4 border md:border-0 shadow-md md:shadow-none">
          <div className="text-xl text-gray-800">{props.item.name}</div>
          <div className="flex gap-5 text-xl">
            <div className="text-gray-800 font-semibold">
              Rs. {props.item.new_price}
            </div>
            <div className="line-through text-gray-400 font-semibold">
              Rs. {props.item.old_price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
