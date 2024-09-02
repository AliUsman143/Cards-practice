import React from "react";
import { Card } from "flowbite-react";
import { CiHeart } from "react-icons/ci";
const Button = (props) => {
  return (
    <>
      <div className="max-w-md hover:scale-105 duration-1000 mx-auto overflow-hidden shadow-lg">
        <div className={`${props.imgdiv}`}>
          <img
            className="w-full h-auto object-cover overflow-hidden"
            src={props.imgSrc}
            alt={props.title}
          />
        </div>
        <div className="px-6 py-4 bg-blue-500">
          <div className={props.titleStyle}>{props.title}</div>
          <p className={props.descriptionStyle}>{props.description}</p>
        </div>
      </div>

      <Card
        className="max-w-md mx-auto hover:scale-105 duration-1000"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
      >
        <div className={`${props.imgdiv2}`}>
          <img Src={props.imgsrc2} alt="" />
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title2}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {props.description2}
        </p>
      </Card>
      <div className="max-w-2xl mx-auto py-20 px-5">
        <div className=" h-auto   border-[1px] bg-white grid  grid-cols-[60%_auto]">
          <div>
            <img className="w-96 pt-10" src={props.imgdiv3} />
            <div className="px-12">
              <p className="uppercase text-[#f1c5c9] font-bold">
                Choose Colour
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    5
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    6
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    7
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    8
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    9
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    10
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    11
                  </p>
                </div>
                <div className="border-[2px] hover:bg-[#f1c5c9]  border-[#f1c5c9] h-12 w-12 items-center text-center group py-2">
                  <p className="text-[#f1c5c9] group-hover:text-white font-bold text-xl">
                    12
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-11 pr-5">
            <h1 className={`${props.shoes3css}`}>{props.shoes3}</h1>
            <h1 className="text-gray-600 text-2xl font-bold">{props.brand3}</h1>
            <h1 className="text-[#f3b2b7]  text-4xl mt-2 font-semibold">
              {props.price3}
            </h1>
            <p className="py-5 text-gray-500 ">{props.detail3}</p>
            <div className=" mb-3 flex gap-2">
              <button className={`${props.addtocard}`}>Add to Card</button>
              <button className="border-none rounded-lg p-1 px-3 bg-[#CDA9AC] uppercase text-white font-bold">
                <span className="text-white outline-white">
                  <CiHeart />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Button;
// imgSrc,
// title,
// description,
// titleStyle,
// descriptionStyle,
// imgdiv,
// imgsrc2,
// title2,
// description2,
// imgdiv2,
// imgdiv3,
// price3,
// shoes3,
// brand3,
// detail3,
// shoes3css,
// addtocard,
