"use client"
import React, { createContext, useContext, useState } from "react";
export const GlobalContext = createContext();
const GlobalState = ({ children }) => {
  const [Stat, setStat] = useState("Old Value");
  const obj = {
    Stat,
    setStat,
  };
  return (
    <GlobalContext.Provider value={obj}>{children}</GlobalContext.Provider>
  );
};
export default GlobalState;
export const UseContext = () => {
  return useContext(GlobalContext);
};
