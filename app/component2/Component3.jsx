import React from "react";
import Button from "./Button";
const Component33 = () => {
  const arry = [
    {
      img: "img/shoes.png",
      shoes: "Women's Running Shoe",
      brand: "Nike Epic React Flyknit",
      price: "$150",
      detail:
        "The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
    },
  ];
  return (
    <div className="max-w-full  h-screen bg-[#E0C9CB]">
      {arry.map((item, index) => (
        <Button
          key={index}
          imgdiv3={item.img}
          price3={item.price}
          shoes3={item.shoes}
          brand3={item.brand}
          detail3={item.detail}
          shoes3css="text-[#f1c5c9] font-bold"
          addtocard="border-none rounded-lg p-3 px-7 bg-[#CDA9AC] uppercase text-white font-bold"
        />
      ))}
    </div>
  );
};

export default Component33;
