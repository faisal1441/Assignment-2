import Image from "next/image";
import React from "react";
import Link from "next/link";
<script src="https://cdn.tailwindcss.com"></script>

export default function Home() {
  return(
    <div className="bg-black min-h-screen text-white">
      <header className="flex items-center justify-between p-6">
        <div className="text-lg font-bold w-152px h-32px top-13px hover:text-blue-600" >Brand Name</div>
      
      <nav className="flex gap-8">
          <Link href="#home"    className="hover: text-blue-400">   Home</Link>
          <Link href="#Product" className="hover: text-blue-400">Contact</Link>
          <Link href="#Pricing" className="hover: text-blue-500">Pricing</Link>
          <Link href="#Contact" className="hover: text-blue-400"> Contact</Link>
             
        </nav>
      <div className="flex gap-4">
       <button className="text-sm hover:text-blue-600">Log In</button>
       <button className="text-white bg-blue-400 px-4 py-2 rounded hover:text-blue-950">Join Us</button> 
            </div>
      </header>
      
      <main className="text-center px-8 py-20">
        <h1 className="f-Montserrat hover:text-blue-600 font-bold text-3xl">Welcome</h1>
        <h2 className=" text-center mx-auto font-bold py-12 w-1/2 text-8xl f-Montserrat p-8">Selling on the Internet like a Pro</h2>
        
        <p className="font-bold text-lg mt-4">We know that about the things, but thngs on a small scale
          just do not act that way</p>
        
        <div className="flex justify-center gap-2 mt-16">
        <button className="bg-blue-600 rounded hover:text-pink-900 ">Get Quote Now</button>
        <button className="border border-gray-400 px-6 py-3 rounded hover:text-blue-600">Learn More</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 h-72 w-3/4 pl-96 ">
        
          <div className="p-8 bg-gray-100 text-red-300 rounded">
            <div className="box-border h-12 w-12 bg-red-300"></div>
            <h3 className="font-semibold text-left pl-18 mt-10 text-black">Training Courses</h3>
            <h4 className="text-left pl-18">_______</h4>
            <p className="text-gray-700 text-left">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>

          <div className="p-6 bg-gray-100 text-red-300 rounded">
          <div className="box-border h-12 w-12 mt-2 bg-green-400"></div>
            <h3 className="text-left pl-18 mt-10 text-black ">2,769 Online Courses</h3>
            <h4 className="text-left pl-18">______</h4>
            <p className="text-gray-700 text-left">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
          <div className="p-6 bg-blue-500 text-white rounded">
          <div className="box-border h-12 w-12 mt-2 bg-white"></div>
            <h3 className="font-semibold text-left pl-18 mt-10">Training Courses</h3>
            <h4 className="text-left pl-18">_______</h4> 
            <p className="text-white text-left">The gradual accumulation of information about atomic and small-scale behaviour...</p>
          </div>
       </div>
   
      </main>  
      </div>
    
  );
}