// "use client"


import axios from "axios";
const StudentCardUni = async () => {
  const apiData = async () => {
    try {
      const res = await axios.get(
        "https://mocki.io/v1/0924981e-d49a-4e34-ab3c-8abe48a5b932"
      );

      // if (!res.ok) {
      //   throw new Error("network response");
        
        
      // }
      return res.data;
    } catch (error) {
      console.log("🚀 ~ apiData ~ error:", error.message);
    }
  };
  const mypromise = new Promise((resolve, reject) => {
    const card = true;
    if (card==true) {
      resolve(apiData());
    } else {
      reject("Error in fetching data!");
    }
  });
  mypromise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  let store = await apiData();
  return (
    <div>
      <div className="bg-white h-screen py-24 px-3">
        {store?.slice(0,1).map((item) => {
          const { name, reg, ntu, dep, blood } = item;
          return (
            <div className="max-w-lg mx-auto h-80 border-[1px] mb-20 relative rounded-lg bg-gray-100" key={item.id}>
              <div className="flex">
                <div class="bg-green-500 absolute   h-80 text-white p-2 w-8 rounded-l-lg">
                  <p class="vertical-text text-sm">Under Grd Student</p>
                </div>
                <div className="text-center flex ml-9">
                  {/* logo */}
                  <div className="w-24 h-20">
                    <img
                      className="w-full h-full"
                      src="img/ntulogo.png"
                      alt=""
                    />
                  </div>
                  <p className="text-center items-center font-sans md:text-2xl text-md mt-6  font-bold">
                    National Textile University
                  </p>
                </div>
              </div>
              <hr className="w-full border-[2px] border-green-500" />
              <div className="ml-9 ">
                <div className="grid grid-cols-[29%_auto]">
                  <div className="md:w-32 md:h-36 mt-1 object-top object-cover overflow-hidden ">
                    <img className="md:h-48 md:w-full" src="img/ali.jpg" alt="" />
                  </div>
                  <div className="mt-2 md:ml-0 ml-7">
                    <p className="font-bold md:text-xl text-sm">{name}</p>
                    <p className="font-bold  md:text-xl text-sm ">
                     {reg}
                    </p>
                    <p className="font-bold  md:text-xl text-sm">{ntu}</p>
                    <p className="font-bold  md:text-xl text-sm ">
                     {dep}
                    </p>
                    <p className="font-bold  md:text-xl text-sm ">{blood}</p>
                  </div>
                </div>
              </div>
              <div className="ml-9">
                <div className="grid md:grid-cols-[29%_auto] grid-cols-[40%_auto]">
                  <div className="flex flex-col  text-center items-center">
                    <img className="w-44" src="img/signature.png" alt="" />
                    <hr className="w-20 border-black items-center " />
                    <p className="text-xs text-[10px] mt-2 font-semibold">
                      Issuing Authority
                    </p>
                    <p className="text-xs text-[10px] mt-1 font-semibold">
                      Director Admissions
                    </p>
                  </div>
                  <div className="flex flex-col mt-5 items-center">
                    <div>
                      <div className="flex">
                        <p className="font-semibold md:text-sm text-[10px]">Date of Issue:</p>
                        <p className="font-semibold md:text-sm text-[10px] ml-6">01-11-2022</p>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div className="flex">
                        <p className="font-semibold md:text-sm text-[10px]">Validity:</p>
                        <p className="font-semibold md:text-sm text-[10px] ml-6">31-12-2022</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCardUni;
