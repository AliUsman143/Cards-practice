"use client";
import React, { useState } from "react";
import {  Textarea } from "flowbite-react";
import { Button } from "flowbite-react";

const TextArea = (props) => {
  const [textvalue, settextvalue] = useState("Enter the text here...");

  const handleupcase = () => {
    console.log("Convert to uppercase: " );
    let newtext = textvalue.toUpperCase();
    settextvalue(newtext);
  };

  const handleonchange = (event) => {
    console.log("Handle to change");
    settextvalue(event.target.value);
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <h1 className="font-bold text-3xl">{props.heading}</h1>
        <div className="max-w-md">
          <Textarea
            id="mybox"
            value={textvalue}  // Bind textvalue state to Textarea
            onChange={handleonchange}  // Use onChange event instead of onClick
            placeholder="Enter the text here..."
            required
            rows={8}
          />
        </div>
        <Button className="mt-5 " color="blue" onClick={handleupcase}>
          Convert to UpperCase
        </Button>
      </div>
    </>
  );
};

export default TextArea;
