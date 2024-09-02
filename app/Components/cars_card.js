"use client"

import axios from 'axios'
import { Carousel } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const Card2 = async() => 
  {
    // error handling with try catch
        const ApiData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products")
            return res.data
            } 
            catch (error) {
                console.log("🚀 ~ ApiData ~  plz check api error:", error.message)
            }
        }
    const data = await ApiData();
    return (
<>
    {data.map((item)=>(
        <h2>{item.id}</h2>
    ))}
</>
    )
  }
  
  export default Card2
    
        // <div className='bg-bgCard2 h-screen lg:py-24 md:py-12 py-4 text-emerald-800'>
        //     <Carousel className='md:w-[60vw] w-[95vw] h-[70vh] mx-auto bg-emerald-950 py-14 px-20 rounded-3xl' slideInterval={10000} pauseOnHover>
        //         {ApiData?.map((items) => {
        //             const { id, title, price, description, category, image, rating } = items;
        //             return (
        //                 <div key={id} className='flex gap-5'>
        //                     <div className='relative w-80 h-60 my-auto bg-cyan-200 left-10 rounded-3xl p-5 pr-16 des-card'>
        //                         <div className='text-2xl  font-bold text-center my-2'>{category}</div>
        //                         <div className='py-2 h-32 text-sm overflow-hidden'>{description}</div>
        //                     </div>
        //                     <div className='perspective relative w-72 h-80 rounded-3xl'>
        //                         <div className='relative  bg-emerald-800 w-[100%] h-[100%] rounded-3xl right-10 flip-card'>
        //                             {/* front */}
        //                             <div className='front p-5 absolute w-full h-full'>
        //                                 <div className='w-32 h-32 rounded-full bg-black mx-auto'><img className='w-full h-full rounded-full overflow-hidden' src={image} alt="Error" /></div>
        //                                 <marquee behavior="" direction=""><div className='font-semibold text-center text-4xl py-7 h-28 text-cyan-200'>{title}</div></marquee>
        //                                 <div className='flex justify-center gap-7'>
        //                                     <div className='text-cyan-200 text-xl font-bold w-16'>${price}</div>
        //                                     <div className='w-24 h-8 rounded-lg bg-cyan-200 cursor-pointer py-1 px-2 font-semibold'>See More</div>
        //                                 </div>
        //                             </div>
        //                             {/* back */}
        //                             <div className='back p-5 absolute w-full h-full'>
        //                                 <marquee behavior="" direction=""><div className='font-semibold text-center text-4xl p-7 h-20 text-cyan-200'>{title}</div></marquee>
        //                                 <div className='text-yellow-400 flex gap-2 px-3 text-lg'>
        //                                     <div>Rating: {rating.rate}</div>
        //                                     <div className='pr-4 pt-1'><FaStar /></div>
        //                                     <div>Sold: {rating.count}</div>
        //                                 </div>
        //                                 <div className='my-3'>
        //                                     <button className='bg-cyan-200 w-[100%] h-12 rounded-full font-bold my-2'>BUY NOW</button>
        //                                     <button className='bg-cyan-200 w-[100%] h-12 rounded-full font-bold my-2'>ADD TO CART</button>
        //                                 </div>
        //                                 <div className='group relative w-60 ml-10 mt-8 mx-auto -top-9 -left-5 hover:w-96 hover:h-96 hover:-top-80 hover:-left-60 text-cyan-200'>
        //                                     <div className='block group-hover:hidden'>Hover to watch large image</div>
        //                                     <img className='hidden group-hover:block w-full h-full' src={image} alt="Error" />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             )
        //         })}
        //     </Carousel>
        // </div>











// "use client";

// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Carousel } from "flowbite-react";
// import { FaStar } from "react-icons/fa";

// const CarouselCard = () => {
//   const [store, setStore] = useState([]);

//   useEffect(() => {
//     const ApiData = async () => {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       setStore(res.data);
//       console.log("data from Api:", res);
//     };

//     ApiData();
//   }, []);

//   return (
//     <div className="bg-black h-screen py-24 text-white">
//       <Carousel className="w-[60vw] h-[70vh] mx-auto bg-emerald-950 py-14 px-20 rounded-3xl">
//         {store.map((items) => {
//           const { id, title, price, description, category, image, rating } =
//             items;
//           return (
//             <div key={id} className="flex gap-5">
//               <div className="relative w-80 h-60 my-auto bg-cyan-200 left-10 rounded-3xl p-5 pr-16 des-card">
//                 <div className="text-2xl text-emerald-800  font-bold text-center my-2">
//                   {category}
//                 </div>
//                 <div className="py-2 h-32 text-sm overflow-hidden text-emerald-800">
//                   {description}
//                 </div>
//               </div>
//               <div className="perspective relative w-72 h-80 rounded-3xl">
//                 <div className="relative  bg-emerald-800 w-[100%] h-[100%] rounded-3xl right-10 flip-card">
//                   {/* front */}
//                   <div className="front p-5 absolute w-full h-full">
//                     <div className="w-32 h-32 rounded-full bg-black mx-auto">
//                       <img
//                         className="w-full h-full overflow-hidden"
//                         src={image}
//                         alt="Error"
//                       />
//                     </div>
//                     <marquee behavior="" direction="">
//                       <div className="font-semibold text-center text-4xl py-7 h-28 text-cyan-200">
//                         {title}
//                       </div>
//                     </marquee>
//                     <div className="flex justify-center gap-7">
//                       <div className="text-cyan-200 text-xl font-bold w-16">
//                         ${price}
//                       </div>
//                       <div className="w-24 h-8 rounded-lg bg-cyan-200 cursor-pointer py-1 px-2 font-semibold text-emerald-800">
//                         See More
//                       </div>
//                     </div>
//                   </div>
//                   {/* back */}
//                   <div className="back p-5 absolute w-full h-full">
//                     <marquee behavior="" direction="">
//                       <div className="font-semibold text-center text-4xl p-7 h-20 text-cyan-200">
//                         {title}
//                       </div>
//                     </marquee>
//                     <div className="text-yellow-400 flex gap-2 px-3 text-lg">
//                       <div>Rating: {rating.rate}</div>
//                       <div className="pr-4 pt-1">
//                         <FaStar />
//                       </div>
//                       <div>Sold: {rating.count}</div>
//                     </div>
//                     <div className="my-3">
//                       <button className="bg-cyan-200 text-emerald-800 w-[100%] h-12 rounded-full font-bold my-2">
//                         BUY NOW
//                       </button>
//                       <button className="bg-cyan-200 text-emerald-800 w-[100%] h-12 rounded-full font-bold my-2">
//                         BUY NOW
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselCard;
