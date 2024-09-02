"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

const LoaderError = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color:"red",
      }}
    >
      <CircularProgress color="inherit" />
    </div>
  );
};

export default LoaderError;
