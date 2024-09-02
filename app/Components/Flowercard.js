"use client"
import React from "react";
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

const FlowerCardbg = () => {
  const arry = [
    {
      title: " Flower Embroidery Hoop Art",
      price1: "$699",
      price2: "$345",
    },
  ];
  return (
    <div className="bg-black h-screen py-24">
      {arry.map((item, index) => {
        const { title, price1, price2 } = item;
        return (
          <div
            key={index}
            className="max-w-[320px] h-[60vh] mx-auto border-[2px] group relative rounded-lg shadow-md overflow-hidden bg-white"
          >
            <div className="object-fill  ">
              <img
                className=" hover:brightness-50 h-[60vh] brightness-50 w-full ease-in-out duration-1000"
                src="https://i.pinimg.com/564x/6f/5a/b1/6f5ab1b470beeeeaf285bb451c63ac8f.jpg"
                alt=""
              />
            </div>{" "}
            <div className="seconddiv absolute top-16 group cursor-pointer invisible group-hover:visible transform translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-1000 left-5 ">
              <p className="text-white font-serif text-4xl">{title}</p>
              <hr className="border-white border-[3px] rounded-lg w-4 transition-all duration-700 ease-in-out mt-3 group-hover:w-28" />
              <del className="text-gray-400 ">
                <p className="text-3xl mt-4 font-serif text-gray-400 ">
                  {price1}
                </p>
              </del>
              <p className="text-3xl mt-1 font-serif text-white ">{price2}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Button>
                  <HiShoppingCart className="mr-2 h-5 w-5 bg-transparent" />
                  Buy now
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlowerCardbg;
