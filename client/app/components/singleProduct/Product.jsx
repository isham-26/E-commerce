import Image from "next/image";
import React from "react";
export default function Product({product}) {
  return (
    <div className="bg-white flex justify-center items-center md:mt-10">
      <div className="md:w-[80%] w-full">
        <div className="flex flex-col md:flex-row">
        <div className="flex p-2">
          <div className="flex flex-col md:gap-3 gap-2 md:mr-3 mr-2">
            {/* apply map here for image */}
            <Image
              src={product.image}
              alt="Product Image"
              className="object-cover md:h-[9rem] md:w-[10rem] h-[6rem] w-[5rem]"
            />
            <Image
              src={product.image}
              alt="Product Image"
              className="object-cover md:h-[9rem] md:w-[10rem] h-[6rem] w-[5rem]"
            />
            <Image
              src={product.image}
              alt="Product Image"
              className="object-cover md:h-[9rem] md:w-[10rem] h-[6rem] w-[5rem]"
            />
            <Image
              src={product.image}
              alt="Product Image"
              className="object-cover md:h-[9rem] md:w-[10rem] h-[6rem] w-[5rem]"
            />
            
          </div>
          <Image
            src={product.image}
            alt="Product Image"
            className="object-cover md:w-[42rem] w-[16rem]"
          />
          </div>
          <div className="md:p-6 p-3 flex flex-col justify-between">
            <h1 className="md:text-4xl text-xl font-bold">
              {product.name}
            </h1>
            <div className="flex items-center mt-2">
              <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
              <span className="text-sm text-gray-500 ml-2">
                {"("}122{")"}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-xl font-semibold text-red-500">Rs.{product.new_price}</span>
              <span className="text-sm line-through text-gray-400 ml-2">
                Rs.{product.old_price}
              </span>
            </div>
            <p className="mt-2 text-gray-700">
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </p>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">Select Size</h2>
              <div className="flex gap-2 mt-2">
                {["S", "M", "L", "XL", "XXI"].map((size) => (
                  <button
                    key={size}
                    className="border border-gray-300 px-3 py-1 rounded-sm hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-[8rem] mt-6 bg-blue-600 text-white p-2 py-3 rounded-sm hover:bg-blue-700 transition duration-300">
              ADD TO CART
            </button>
            <div className="mt-6 md:mt-1">
              <div className="flex gap-2">
                <span className="font-semibold">category:</span>
                <span className="">{product.category} t-shite</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Tags:</span>
                <span className="">Latest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
