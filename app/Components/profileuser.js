"use client"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

const Profileuser = () => {
  return (
    <div>
        <div className="bddcolor h-auto w-full  py-1">
      <div className="bg-gray-800 text-white md:w-[30vw] w-[90vw] h-[80vh] mx-auto my-[10vh] rounded-3xl px-3">
        <div className="bdcolor cursor-pointer relative py-5">
          <div className="max-w-sm  border-indigo-500/100 border-[4px] rounded-lg h-[74vh] overflow-hidden ease-in group duration-700  mx-auto items-center">
            <div className=" block group-hover:hidden">
              <div className="w-full  h-full object-cover object-center animate-pulse">
                <img
                  className="h-[73vh] overflow-hidden  w-full object-cover object-top brightness-50 hover:brightness-100 hover:opacity-100"
                  src="img/ali.jpg"
                />
              </div>
              <div className="absolute top-96 left-24 mx-auto items-center ease-in-out duration-150  visible group-hover:invisible">
                <p className="font-bold text-4xl uppercase text-gray-400">
                  My Profile
                </p>
              </div>
            </div>
            <div className="invisible group-hover:visible mt-4 ease-in duration-1000">
              <div className="bg-custom-gradient md:w-52 md:h-52 w-44 h-44 rounded-full mx-auto p-2 shadow-custom-gradient">
                <img
                  className="md:w-44 md:h-44 w-40 h-40 rounded-full object-top object-cover"
                  src="img/ali.jpg"
                />
              </div>
              <div className="mx-auto ease-in-out bgtext duration-1000 items-center">
                <p className="md:text-3xl font-mono  text-xl font-bold text-center">
                  {" "}
                  Muhammad Ali Usman
                </p>
                <h3 className="md:text-2xl text-lg my-3 font-mono text-center font-extrabold text-[#F01462] group-hover:text-white">
                  Web Developer
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-5 h-8">
                <div className="bg-[#F01462] text-white p-2 hover:p-0 rounded-full hover:bg-transparent text-xl hover:text-[#F01462] hover:text-4xl ease-in-out duration-1000 ">
                  <FaFacebookF />
                </div>
                <div className="bg-[#F01462] text-white p-2 hover:p-0  rounded-full hover:bg-transparent text-xl hover:text-[#F01462] hover:text-4xl ease-in-out duration-1000 ">
                  <FaInstagram />
                </div>
                <div className="bg-[#F01462] text-white p-2  hover:p-0 rounded-full hover:bg-transparent text-xl hover:text-[#F01462] hover:text-4xl ease-in-out duration-1000 ">
                  <FaTwitter />
                </div>
                <div className="bg-[#F01462] text-white p-2 hover:p-0  rounded-full hover:bg-transparent text-xl hover:text-[#F01462] hover:text-4xl ease-in-out duration-1000 ">
                  <FaCodepen />
                </div>
              </div>
              <div className=" flex mt-5 mx-auto items-center justify-center  ">
                <div>
                  <button className="bg-transparent border-[3px] border-sky-700 hover:border-[#F01462] text-white hover:text-emerald-300  p-3 text-xl font-bold transition-colors duration-1000 delay-100">
                    Visit My Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profileuser