"use client"
import React, { useState } from "react";
const SimpleForm = () => {
  // Initialize state variables for name and age
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    setSubmittedData({ name, age });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen usestatscard">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Enter Your Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Age:
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-8 border-[1px] p-8 bg-slate-200 ">
          <h3 className="text-xl font-bold">Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleForm;



// const arry = [
//   {
//     img: "img/shoes.png",
//     shoes: "Women's Running Shoe",
//     brand: "Nike Epic React Flyknit",
//     price: "$150",
//     detail:
//       "The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
//   },
//   {
//     img: "img/shoes.png",
//     shoes: "Women's Running Shoe",
//     brand: "Nike Epic React Flyknit",
//     price: "$150",
//     detail:
//       "The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
//   },
//   {
//     img: "img/shoes.png",
//     shoes: "Women's Running Shoe",
//     brand: "Nike Epic React Flyknit",
//     price: "$150",
//     detail:
//       "The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
//   },
//   {
//     img: "img/shoes.png",
//     shoes: "Women's Running Shoe",
//     brand: "Nike Epic React Flyknit",
//     price: "$150",
//     detail:
//       "The Nike Epic React Flyknit foam cushioning is responsive yet light-weight, durable yet soft. This creates a sensation that not only enhances the feeling of moving forward, but makes running feel fun, too.",
//   },
// ];



// const [count, setCount] = useState(0);

// const increment = () => {
//   setCount(count + 1);
// };
// const decrement = () => {
//   setCount(count - 1);
// };
// useEffect(() => {
//   console.log("ali usman");
// }, [count]);

// <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
//       <div className="space-x-4">
//         <button
//           onClick={decrement}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//         >
//           Decrement
//         </button>
//         <button
//           onClick={increment}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//         >
//           Increment
//         </button>
//       </div>
//     </div>