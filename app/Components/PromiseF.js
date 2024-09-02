"use client";
const PromiseFunction = () => {
  const mypromise = new Promise((resolve, reject) => {
    const ntu = true;
    if (ntu == true) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
  mypromise
    .then((university) => {
      console.log(university);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div>PromiseFunction</div>;
};

export default PromiseFunction;

// const mypromise =  new Promise((resolve, reject) => {
//     const tuf  = false

//     if (tuf == true) {
//       resolve("jhjvjjgg")

//     } else {
//       reject()

//     }
//   })

//   mypromise.then((university)=>{
//     console.log(university)
//   }).catch((error)=>{
//     console.log(error);

//   })
