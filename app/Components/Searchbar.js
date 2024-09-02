"use client";
import { useState } from "react";

const Searchitem = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    { id: 1, name: "John Doe", fatherName: "Robert Doe", category: "Male" },
    {
      id: 2,
      name: "Jane Smith",
      fatherName: "Richard Smith",
      category: "Female",
    },
    {
      id: 3,
      name: "Michael Johnson",
      fatherName: "James Johnson",
      category: "Male",
    },
    {
      id: 4,
      name: "Emily Davis",
      fatherName: "John Davis",
      category: "Female",
    },
    {
      id: 5,
      name: "Chris Brown",
      fatherName: "Michael Brown",
      category: "Male",
    },
    {
      id: 6,
      name: "Jessica Wilson",
      fatherName: "Thomas Wilson",
      category: "Female",
    },
    {
      id: 7,
      name: "Daniel Garcia",
      fatherName: "David Garcia",
      category: "Male",
    },
    {
      id: 8,
      name: "Laura Martinez",
      fatherName: "Joseph Martinez",
      category: "Female",
    },
    { id: 9, name: "David Lee", fatherName: "William Lee", category: "Male" },
    {
      id: 10,
      name: "Sarah White",
      fatherName: "Charles White",
      category: "Female",
    },
    {
      id: 11,
      name: "James Harris",
      fatherName: "George Harris",
      category: "Male",
    },
    {
      id: 12,
      name: "Linda Clark",
      fatherName: "Henry Clark",
      category: "Female",
    },
    {
      id: 13,
      name: "Robert Lewis",
      fatherName: "Edward Lewis",
      category: "Male",
    },
    {
      id: 14,
      name: "Patricia Walker",
      fatherName: "Frank Walker",
      category: "Female",
    },
    {
      id: 15,
      name: "Charles Hall",
      fatherName: "Walter Hall",
      category: "Male",
    },
    {
      id: 16,
      name: "Barbara Allen",
      fatherName: "Albert Allen",
      category: "Female",
    },
    {
      id: 17,
      name: "Thomas Young",
      fatherName: "Arthur Young",
      category: "Male",
    },
    { id: 18, name: "Mary King", fatherName: "Paul King", category: "Female" },
    {
      id: 19,
      name: "Mark Wright",
      fatherName: "Andrew Wright",
      category: "Male",
    },
    {
      id: 20,
      name: "Susan Hill",
      fatherName: "Raymond Hill",
      category: "Female",
    },
  ];

  const filteredItems = items.filter((item) => {
    const searctstring = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(searctstring) ||
      item.fatherName.toLowerCase().includes(searctstring) ||
      item.category.toLowerCase().includes(searctstring)
    );
  });
  // const filteredItems = items.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="bg-black w-screen h-screen  py-32">
      <div className="max-w-md h-96 bg-white mx-auto p-4 border-[1px] overflow-scroll">
        <h1 className="text-2xl font-bold mb-4 text-center">Search Items</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 w-full mb-4 sticky top-0 z-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="list-disc pl-5  ">
          {filteredItems.map((item) => (
            <li key={item.id} className="mb-2">
              <p>Name: {item.name}</p>
              <p>Father Name: {item.fatherName}</p>
              <p>Category: {item.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchitem;
