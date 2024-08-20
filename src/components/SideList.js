import React from 'react';
import { FaDirections, FaChartLine ,FaHome, FaMapMarkerAlt, } from 'react-icons/fa'; 

const SideList = () => {
  return (
    <div className="bg-white w-64 p-4 h-30px shadow-lg">
         <h1 className="text-2xl font-bold text-gray-600 flex items-center">
          PRAI
          <span className="relative flex items-center justify-center mx-1">
            <span className="text-yellow-500 z-10">O</span>
            <span className="absolute rounded-full h-8 w-8 border-4 border-dotted border-red-500"
                  ></span>
          </span>
          RITIZE
        </h1>
        <h2 className='text-center text-sm  pt-2 text-gray-700 pb-4 mb-4 '>Move Your Organization</h2>
      <div className="flex items-center mb-8">
        <img src="../images/Bitmoji.png" alt="Logo" className="h-11 w-11 rounded-full border-2  border-yellow-500" />
        <div className="ml-4">
          <h2 className="text-sm font-bold">[FIRST NAME]</h2>
          <p className="text-xs text-gray-500">[ROLE]</p> 
          <p className="text-xs text-gray-500">[TEAM]</p>
        </div>
      </div>
      <nav className="space-y-4">
        <a href=" " className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaHome className="text-lg"/>
        <span className='text-sm'>WHERE AM I NOW?</span>
        </a>
        <a href=" " className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaMapMarkerAlt className="text-lg" />
        <span className='text-sm'>WHERE TO GO?</span>
        </a>
        <a href=" " className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaDirections className="text-lg" />
        <span className='text-sm'>HOW TO GET THERE?</span>
        </a>
        <a href=' ' className="flex items-center space-x-3 text-gray-dark hover:text-yellow-primary">
        <FaChartLine className="text-lg" />
        <span className='text-sm'>AM I ON TRACK?</span>
        </a>
      </nav>
    </div>
  );
};

export default SideList;