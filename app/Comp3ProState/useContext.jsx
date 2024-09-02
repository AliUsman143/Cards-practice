"use client"
import React, { useContext } from "react";
import { GlobalContext } from "../UseContaxt";

const CompoContext = () => {
  const { Stat, setStat } = useContext(GlobalContext);
  return (
    <div>
      <div className="text-black w-screen">
        <p>{Stat}</p>
        <button
          className="border[1px] rounded-md bg-black text-white p-2 ml-5"
          onClick={() => setStat("new value")}
        >
          Change Value
        </button>
      </div>
    </div>
  );
};

export default CompoContext;
