
// Home.js
"use client"
import React, { useEffect, useState } from 'react'
import { ApidataFetch } from './apidata';
import LoaderError from './loader';
// import { FacebookIcon } from 'lucide-react';
const DisplayApi = () => {
  const [loading, setLoading] = useState(true)  // Start with loading as true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApidataFetch();  // Fetch data
        console.log(data);  // Do something with the data (e.g., log it)
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false)  // Set loading to false after the data is fetched or an error occurs
      }
    };

    fetchData();
  }, []);  // Empty dependency array to run effect on mount

  if (loading) return <LoaderError/>  // Show loader while loading is true

  return (
    <>
      <div>DisplayApi</div>
      {/* Other components or content can go here */}
    </>
  )
}

export default DisplayApi