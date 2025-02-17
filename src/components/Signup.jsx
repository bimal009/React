import { Link } from "react-router";
import "./signup.css";
import { useState } from "react";
export const Signup = () => {


  return (
    <>
    <div className="container-main h-screen flex justify-center items-center   w-full ">
    <div className="form flex flex-col bg-sky-600 drop-shadow-2xl h-1/2 w-1/4  items-center justify-center mx-4">
      <h2 className="font-bold text-white">Sign Up Now</h2>
      <div className="  inputfields flex flex-col mx-2 my-2 justify-center">
    <h4 className="px-2 font-medium text-[10px] text-white">Username</h4>
    <input  className=" w-44 rounded-full  bg-white text-black  font-medium text-[8px] py-1 px-2 outline-0" type="text" placeholder="Entre Your Name" />
      </div>
      <div className="  inputfields flex flex-col mx-2 my-2 justify-center">
    <h4 className="px-2 font-medium text-[10px] text-white">Email</h4>
    <input className=" w-44 rounded-full  bg-white text-black  font-medium text-[8px] py-1 px-2 outline-0" type="email" placeholder="Entre Your Email" />
      </div>
      <div className="  inputfields2 flex flex-col mx-2 my-2 justify-center">
    <h4 className="px-2 font-medium text-[10px] text-white">Password</h4>
    <input  className=" w-44 rounded-full  bg-white text-black  font-medium text-[8px] py-1 px-2 outline-none" type="password" placeholder="Entre Your Password" />
      </div>
      <div className="button bg-white my-2 rounded-full text-[12px] font-medium px-6 text-sky-700 hover:scale-105"><button >Sign Up</button></div>
      <span className="text-[8px] text-white">Already Have Account? </span>

      
      
      
    </div>
  
    {/* <div className="img w-1/2 h-screen object-cover"><img src={cartpng} alt="cartpng"/></div> */}
    
    </div>
    </>
  )
}
