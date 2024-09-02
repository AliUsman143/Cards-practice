"use client";
import React, { useState } from "react";
import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";
const Resultstudent = () => {
  const studentArray = [
    {
      rollNo: "101",
      name: "Ali Usman",
      age: 20,
      class: "12th",
      marks: {
        phy: 45,
        math: 56,
        eng: 75,
      },
    },
    {
      rollNo: "102",
      name: "Usman",
      age: 20,
      class: "12th",
      marks: {
        phy: 45,
        math: 56,
        eng: 75,
      },
    },
    {
      rollNo: "103",
      name: "Zavi",
      age: 20,
      class: "12th",
      marks: {
        phy: 45,
        math: 56,
        eng: 75,
      },
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleSearch = () => {
    const foundStudent = studentArray.find(
      (student) => student.rollNo === searchTerm.trim()
    );
    if (foundStudent) {
      setStudentData(foundStudent);
      setShowToast(false);
    } else {
      setStudentData(null);
      setShowToast(true);
    }
  };
  const calculateTotalMarks = (marks) => {
    return marks.phy + marks.math + marks.eng;
  };
  return (
    <>
      <div className="flex flex-col relative justify-center h-screen bg-gray-100">
        <div className="absolute top-10 left-1/2">
          <img className="w-96" src="img/ntulogo.png" alt="" />
          <p className="font-bold text-3xl ml-14">Check Your Result</p>
        </div>
        <div className="mb-6 ml-14">
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg shadow-sm"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white p-2 rounded-lg shadow-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {showToast && (
          <div className="fixed top-5 left-5">
            <Toast>
              <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
                <HiExclamation className="h-5 w-5" />
              </div>
              <div className="ml-3 text-sm font-normal">
                No student found with roll number {searchTerm}
              </div>
              <Toast.Toggle onClick={() => setShowToast(false)} />
            </Toast>
          </div>
        )}
        {studentData && (
          <div className="bg-white p-6 ml-14 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              <b>Name: </b> {studentData.name}
            </h2>
            <p className="text-gray-600 mb-2">Roll No: {studentData.rollNo}</p>
            <p className="text-gray-600 mb-2">Age: {studentData.age}</p>
            <p className="text-gray-600 mb-2">Class: {studentData.class}</p>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Marks:</h3>
              <table className="border-[1px] w-72">
                <tbody>
                  <tr>
                    <td className="border-[1px] p-3"> Physics</td>
                    <td className="border-[1px] p-3">
                      {studentData.marks.phy}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[1px] p-3">Math</td>
                    <td className="border-[1px] p-3">
                      {studentData.marks.math}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-[1px] p-3">English </td>
                    <td className="border-[1px] p-3">
                      {studentData.marks.eng}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="font-bold mt-4">
            Total Marks: {calculateTotalMarks(studentData.marks)}
          </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resultstudent;
