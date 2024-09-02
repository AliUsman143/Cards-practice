"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data); // Update the state with the fetched data
        console.log(response.data); // Log the data to the console
      } catch (error) {
        throw new Error("Error fetching data:", error.message);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, [products]); // Empty dependency array means this useEffect runs once on mount

  return (
    <div>
      <h1 className="items-center text-center font-bold text-3xl py-3 underline">Product List</h1>
      {products.length > 0 ? (
        <ul>
          {products.slice(0,5).map(
            (item, index) => {
              const { id,title, price, description, category } = item;
              return (
                <ul key={index} className="mb-4 px-5">
                  <li ><b>ID:</b> {id}</li>
                  <li ><b>Title:</b> {title}</li>
                  <li><b>Price:</b> {price}</li>
                  <li><b>Descriptio:</b> {description}</li>
                  <li><b>Category:</b> {category}</li>
                </ul>
              );
            }
          )}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export default ProductList;
