"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const One = () => {
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");

  const animals = [
    { name: "Human", category: "Mammal", Sname: "Homo sapiens" },
    {
      name: "African Elephant",
      category: "Mammal",
      Sname: "Loxodonta africana",
    },
    { name: "Bald Eagle", category: "Bird", Sname: "Haliaeetus leucocephalus" },
    {
      name: "American Alligator",
      category: "Reptile",
      Sname: "Alligator mississippiensis",
    },
    { name: "Atlantic Salmon", category: "Fish", Sname: "Salmo salar" },
    {
      name: "Bengal Tiger",
      category: "Mammal",
      Sname: "Panthera tigris tigris",
    },
    { name: "Blue Whale", category: "Mammal", Sname: "Balaenoptera musculus" },
    {
      name: "California Condor",
      category: "Bird",
      Sname: "Gymnogyps californianus",
    },
    {
      name: "Caribbean Reef Shark",
      category: "Fish",
      Sname: "Carcharhinus perezi",
    },
    { name: "Chimpanzee", category: "Mammal", Sname: "Pan troglodytes" },
    { name: "Cheetah", category: "Mammal", Sname: "Acinonyx jubatus" },
    { name: "Common Ostrich", category: "Bird", Sname: "Struthio camelus" },
    { name: "Corn Snake", category: "Reptile", Sname: "Pantherophis guttatus" },
    {
      name: "Emperor Penguin",
      category: "Bird",
      Sname: "Aptenodytes forsteri",
    },
    {
      name: "Galápagos Tortoise",
      category: "Reptile",
      Sname: "Chelonoidis nigra",
    },
    {
      name: "Giant Panda",
      category: "Mammal",
      Sname: "Ailuropoda melanoleuca",
    },
    {
      name: "Great White Shark",
      category: "Fish",
      Sname: "Carcharodon carcharias",
    },
    { name: "Green Sea Turtle", category: "Reptile", Sname: "Chelonia mydas" },
    { name: "Harpy Eagle", category: "Bird", Sname: "Harpia harpyja" },
    {
      name: "Humpback Whale",
      category: "Mammal",
      Sname: "Megaptera novaeangliae",
    },
    { name: "Indian Cobra", category: "Reptile", Sname: "Naja naja" },
    {
      name: "Javan Rhinoceros",
      category: "Mammal",
      Sname: "Rhinoceros sondaicus",
    },
    { name: "King Cobra", category: "Reptile", Sname: "Ophiophagus hannah" },
    { name: "Koala", category: "Mammal", Sname: "Phascolarctos cinereus" },
    {
      name: "Komodo Dragon",
      category: "Reptile",
      Sname: "Varanus komodoensis",
    },
    {
      name: "Leatherback Sea Turtle",
      category: "Reptile",
      Sname: "Dermochelys coriacea",
    },
    { name: "Lion", category: "Mammal", Sname: "Panthera leo" },
    {
      name: "Monarch Butterfly",
      category: "Insect",
      Sname: "Danaus plexippus",
    },
    {
      name: "Mountain Gorilla",
      category: "Mammal",
      Sname: "Gorilla beringei beringei",
    },
    {
      name: "Nile Crocodile",
      category: "Reptile",
      Sname: "Crocodylus niloticus",
    },
    { name: "Orca", category: "Mammal", Sname: "Orcinus orca" },
    { name: "Peregrine Falcon", category: "Bird", Sname: "Falco peregrinus" },
    { name: "Polar Bear", category: "Mammal", Sname: "Ursus maritimus" },
    { name: "Red Kangaroo", category: "Mammal", Sname: "Macropus rufus" },
    { name: "Red Panda", category: "Mammal", Sname: "Ailurus fulgens" },
    {
      name: "Reticulated Python",
      category: "Reptile",
      Sname: "Malayopython reticulatus",
    },
    {
      name: "Saltwater Crocodile",
      category: "Reptile",
      Sname: "Crocodylus porosus",
    },
    {
      name: "Siberian Tiger",
      category: "Mammal",
      Sname: "Panthera tigris altaica",
    },
    { name: "Snow Leopard", category: "Mammal", Sname: "Panthera uncia" },
    {
      name: "Sperm Whale",
      category: "Mammal",
      Sname: "Physeter macrocephalus",
    },
    { name: "Spotted Hyena", category: "Mammal", Sname: "Crocuta crocuta" },
    { name: "Sumatran Orangutan", category: "Mammal", Sname: "Pongo abelii" },
    {
      name: "Tasmanian Devil",
      category: "Mammal",
      Sname: "Sarcophilus harrisii",
    },
    { name: "Tiger Shark", category: "Fish", Sname: "Galeocerdo cuvier" },
    { name: "Western Gorilla", category: "Mammal", Sname: "Gorilla gorilla" },
    {
      name: "White Rhinoceros",
      category: "Mammal",
      Sname: "Ceratotherium simum",
    },
    { name: "Wolverine", category: "Mammal", Sname: "Gulo gulo" },
    {
      name: "Wood Frog",
      category: "Amphibian",
      Sname: "Lithobates sylvaticus",
    },
    { name: "Yellowfin Tuna", category: "Fish", Sname: "Thunnus albacares" },
  ];

  const filteredItems = animals.filter(
    (ani) =>
      ani.name.toLowerCase().includes(searchTerm1.toLowerCase()) &&
      ani.category.toLowerCase().includes(searchTerm2.toLowerCase()) &&
      ani.Sname.toLowerCase().includes(searchTerm3.toLowerCase())
  );

  return (
    <div className="bg-bgOne w-screen h-screen text-black">
      <div className="grid grid-cols-2 p-20">
        {/* form */}

        <form className="w-[50%] h-48 my-auto">
          <label className="text-3xl font-bold text-white flex gap-2">
            Search
            <FaSearch className="text-emerald-500" />
          </label>
          <input
            className="w-96 h-10 rounded-full my-5 px-4 bg-white"
            placeholder="Search by name"
            value={searchTerm1}
            onChange={(e) => setSearchTerm1(e.target.value)}
          ></input>

          <input
            className="w-96 h-10 rounded-full my-5 px-4 bg-white"
            placeholder="Search by class"
            value={searchTerm2}
            onChange={(e) => setSearchTerm2(e.target.value)}
          ></input>

          <input
            className="w-96 h-10 rounded-full my-5 px-4 bg-white"
            placeholder="Search by scientific name"
            value={searchTerm3}
            onChange={(e) => setSearchTerm3(e.target.value)}
          ></input>
        </form>

        {/* table */}

        <div className="bg-white px-5 text-center h-[70vh] overflow-scroll">
          <h2 className="text-xl text-center text-violet-700 font-bold py-4 sticky top-0 z-50 bg-gray-400 rounded-b-lg">
            Data of Some Animals
          </h2>
          <table className="w-[100%] h-96 overflow-scroll">
            <thead className="sticky top-16 z-50 bg-emerald-500">
              <tr>
                <th>#</th>
                <th>Animal</th>
                <th>Class</th>
                <th>Scientific Name</th>
              </tr>
            </thead>
            <tbody>
              {/* map function */}

              {filteredItems.map((items, index) => {
                const { name, category, Sname } = items;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{Sname}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-emerald-500 font-bold">
              <tr>
                <td colSpan={4}>No more data</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default One;
