"use client"
import { useState } from "react";
import React from "react";
import App from "./components/App"; 
export default function Home(){
  const[label,setLabel]=useState("continue");
  const clickme=()=>{
    alert("Hello");
  };
  return(
    <div>
      <App />    
    </div>
  )
}


