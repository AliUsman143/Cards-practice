// "use client"

import axios from "axios";
// import { resolve } from 'styled-jsx/css'

const StudentsRecord = async () => {
  const apiData = async () => {
    try {
      const res = await axios.get(
        "https://mocki.io/v1/c3fa495d-4995-48aa-858a-42a25489c1dc"
      );
      return res.data;
    } catch (error) {
      console.log("🚀 ~ apiData ~ error:", error.message);
    }
  };

  const mypromsie = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve(apiData());
    } else {
      reject("Error in fetching data!");
    }
  });

  mypromsie
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });

  let store = await apiData();

  return (
    <div className="text-white p-12">
      <h1 className="italic text-5xl text-cyan-300 font-bold text-center uppercase">
        class test results
      </h1>
      <div className="py-20">
        {store.map((items) => {
          const { id, name, father_name, email, age, results } = items;
          return (
            <div
              key={id}
              className="studentBox hover:bg-cyan-900 border-4 border-cyan-800 p-20 m-12"
            >
              <div className="flex justify-between">
                <h2 className="text-center text-4xl font-semibold w-36 my-auto">
                  E24{id}
                </h2>
                <div className="w-1/8 text-red-800 text-3xl font-bold my-7">
                  <div>
                    Student: <span className="text-gray-500">{name}</span>
                  </div>
                  <div>
                    Son of:{" "}
                    <span className="pl-5 text-gray-500">{father_name}</span>
                  </div>
                </div>
                <div className="w-36 h-36 border rounded-full">
                  <img
                    className="h-full rounded-full"
                    src="https://imgs.search.brave.com/1WFIpUNAOtVXo51SuasJnMAgOsPwQQXErqrO6H1Ps1M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzk4LzFk/LzZiLzk4MWQ2YjJl/MGNjYjVlOTY4YTA2/MThjOGQ0NzY3MWRh/LmpwZw"
                    alt="Error...!"
                  />
                </div>
              </div>
              <div className="flex w-1/8 text-red-800 text-xl font-bold justify-center pt-7 gap-12">
                <div>
                  Email: <span className="text-gray-500">{email}</span>
                </div>
                <div>
                  Age: <span className="pl-5 text-gray-500">{age}</span>
                </div>
              </div>

              {/* result */}

              <div className="group">
                <div className="max-w-fit p-4 mt-4 bg-transparent hover:bg-indigo-400 rounded-lg text-lg font-semibold mx-auto cursor-pointer">
                  Result
                  <span> &#x25BC;</span>
                </div>
                <ul className="hidden group-hover:flex gap-5 justify-center my-5">
                  <li>Math: {results.math}</li>
                  <li>Science: {results.science}</li>
                  <li>History: {results.history}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentsRecord;

// let arr = []

// const invoke = (e) => {
//   arr.push(e.target.value)
//     // console.log("🚀 ~ invoke ~ e:", e.target.value)
// }
//   return (
//     <div>

//         <form>  <input className="w-96 h-10 rounded-full my-5 px-4 bg-white" placeholder="Search by scientific name"
//                             onChange={invoke}></input></form>
//     </div>
//   )
// }
