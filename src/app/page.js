"use client";

import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import {IoMdCopy} from 'react-icons/io'

function page() {
  const [randomPass, setRandomPass] = useState("Generate New Password");
  const [Password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [range, setRange] = useState(5);
  const [strength, setStrength] = useState("");
  const [poolSize, setPoolSize] = useState(0);

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*(){}$";

  const handleUppercase = () => {
    setUppercase(!uppercase);
    if (uppercase === false) {
      let newPassword = Password + uppercaseLetters;
      setPoolSize((n) => n + 1);
      setPassword(newPassword);
    } else {
      let newPassword = Password.replace(uppercaseLetters, "");
      setPoolSize((n) => n - 1);

      setPassword(newPassword);
    }

    console.log(Password);
  };

  const handleLowercase = () => {
    setLowercase(!lowercase);
    if (lowercase === false) {
      setPoolSize((n) => n + 1);

      let newPassword = Password + lowercaseLetters;
      setPassword(newPassword);
    } else {
      let newPassword = Password.replace(lowercaseLetters, "");
      setPoolSize((n) => n - 1);
      setPassword(newPassword);
    }

    console.log(Password);
  };

  const handleNumber = () => {
    setNumber(!number);
    if (number === false) {
      let newPassword = Password + numbers;
      setPoolSize((n) => n + 1);

      setPassword(newPassword);
    } else {
      let newPassword = Password.replace(numbers, "");
      setPoolSize((n) => n - 1);

      setPassword(newPassword);
    }

    console.log(Password);
  };

  const handleSymbol = () => {
    setSymbol(!symbol);
    if (symbol === false) {
      let newPassword = Password + symbols;
      setPoolSize((n) => n + 1);

      setPassword(newPassword);
    } else {
      let newPassword = Password.replace(symbols, "");
      setPoolSize((n) => n - 1);

      setPassword(newPassword);
    }

    console.log(Password);
  };

  const handleCopyText = () => {
    copy(randomPass);
    alert("copy clipboard ", randomPass);
  };

  function generatePassword() {

    if(Password){
      var pass = "";
      for (let i = 1; i <= range; i++) {
        var char = Math.floor(Math.random() * Password.length + 1);
  
        pass += Password.charAt(char);
      }
      // console.log('pass',pass);
      // console.log('random pass',randomPass)
      setRandomPass(pass);    
    }else{
      alert('Use Options to generate Password')

    }

  
  }

  useEffect(() => {
 
    if( (poolSize>3)&& range>12 ){
           setStrength("Strong");
    }
    else if(((poolSize<=4 && poolSize>=2) && ( range>=8 )) || (range>10 && poolSize>0)){
        setStrength("Moderate");
    }else{
      setStrength("Weak")
    }

  }, [range, poolSize]);

  return (
    <div className="">
      <div className="max-w-3xl mx-auto border rounded-xl shadow-2xl p-8  mt-24 bg-black gradientBackground">
        <h2 className="text-center text-3xl mt-6 text-gray-100 font-semibold" >
          Password Generator
        </h2>
        <div className="flex justify-between mx-4 px-4 py-2 mt-6 border text-gray-100 rounded-lg ">
          <span className="text-lg">{randomPass}</span>
          {/* <input
            type="text"
            name="randomPass"
            value={randomPass}
            className="border-none "
          /> */}
          {/* <span>{randomPass}</span> */}
          <span className="cursor-pointer" onClick={() => handleCopyText()}><IoMdCopy size={25} className=" text-lime-500" /></span>
        </div>
        <div className="border m-4 bg-gray-800 rounded-lg">
          <div className="flex justify-between mx-4 gap-4  my-2  py-2 text-lg">
            <span className="text-gray-100">Character Length</span>
            <span className="text-gray-100 ">{range}</span>
          </div>
          <div className="px-4 mb-4">
            <input
              type="range"
              min="5"
              max="15"
              name="range"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              className="w-full "
            />
          </div>
          <div className="mx-4 mb-6">
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                name="uppercase"
                value={uppercase}
                className="cursor-pointer"
                onClick={() => handleUppercase()}
              />
              <span className="text-gray-100">Include Uppercase Letters</span>
            </div>
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                name="lowercase"
                value={lowercase}
                className="cursor-pointer"
                onClick={() => handleLowercase()}
              />
              <span  className="text-gray-100">Include Lowercase Letters</span>
            </div>
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                name="number"
                value={number}
                className="cursor-pointer"
                onClick={() => handleNumber()}
              />
              <span  className="text-gray-100">Include Numbers</span>
            </div>
            <div className="flex gap-x-2">
              <input
                type="checkbox"
                name="symbol"
                value={symbol}
                className="cursor-pointer"
                onClick={() => handleSymbol()}
              />
              <span  className="text-gray-100">Include Symbols</span>
            </div>
          </div>
          <div className="flex justify-between mx-4 my-4 py-2 px-4 border  rounded-lg ">
            <h4 className="text-gray-50">STRENTH</h4>
            <div className="space-x-1">
              <span className="text-gray-50">{strength}</span>
              <span className="space-x-1">
                {strength==="Strong" &&(<>
                  <span className="  border-4 border-lime-500"></span>
                  <span className="  border-4 border-lime-500"></span>
                  <span className="  border-4 border-lime-500"></span>
                  <span className="  border-4 border-lime-500"></span>

                </>)}

                {strength==="Moderate" &&(<>
                  <span className="  border-4 border-lime-500"></span>
                  <span className="  border-4 border-lime-500"></span>
                  <span className="  border-4 border-gray-400"></span>
                  <span className="  border-4 border-gray-400"></span>

                </>)}

                {strength==="Weak" &&(<>
                  <span className="  border-4 border-lime-500"></span>
                  <span className="  border-4 border-gray-400"></span>
                  <span className="  border-4 border-gray-400"></span>
                  <span className="  border-4 border-gray-400"></span>

                </>)}

             
              </span>
            </div>
          </div>
          <div className="px-4">
            <button
              onClick={() => generatePassword()}
              className="text-center w-full  py-1 bg-lime-500 font-semibold mb-4 rounded-lg"
            >
              Generate{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
