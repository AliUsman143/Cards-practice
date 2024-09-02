import { CiHeart } from "react-icons/ci";

const Card11 = () => {
  const arry = [
    {
      img:"img/shoes.png",
      shoes: "Women's Running Shoe",
      brand: "Nike Epic React Flyknit",
      price: "$150",
      detail:
        "The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
    },
  ];
  return (
    <div className="max-w-full  h-screen bg-[#E0C9CB]">
      {arry.map((item, index) => {
        const { shoes, brand, price, detail,img } = item;
        return (
          <div className="max-w-2xl mx-auto py-20 px-5" key={index}>
            <div className=" h-auto   border-[1px] bg-white grid  grid-cols-[60%_auto]">
              <div>
                <img className="w-96 pt-10" src={img} />
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
                <h1 className="text-[#f1c5c9] font-bold">{shoes}</h1>
                <h1 className="text-gray-600 text-2xl font-bold">{brand}</h1>
                <h1 className="text-[#f3b2b7]  text-4xl mt-2 font-semibold">
                  {price}
                </h1>
                <p className="py-5 text-gray-500 ">{detail}</p>
                <div className=" mb-3 flex gap-2">
                  <button className="border-none rounded-lg p-3 px-7 bg-[#CDA9AC] uppercase text-white font-bold">
                    Add to Card 
                  </button>
                 <button className="border-none rounded-lg p-1 px-3 bg-[#CDA9AC] uppercase text-white font-bold">
                    <span className="text-white outline-white"><CiHeart /></span>
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card11;
