import React from 'react';
import { FaBars, FaArrowRight, FaChartLine } from 'react-icons/fa'; 

const Header = () => {
  return (
    <header className=" py-4 px-6  bg-white">
    
      <div className="flex items-center justify-between mb-4">
       
        <div className="flex flex-col">
          <h1 className="text-black font-bold text-lg mb-2"><span className='text-yellow-400'>PERSONAL</span> VIRTUAL CONSULTANT</h1>
          <span className="text-gray-500">THIS IS THE ASSESSMENT TITLE - LONG TITLES WILL BE..</span>
        </div>

        
        <div className="flex items-center mx-4 border-2 border-yellow-400 rounded">
  <button className="bg-yellow-light text-black py-2 px-4 rounded-l flex items-center">
    <FaChartLine className="mr-2" />
    JOURNEY
  </button>
  <button className="bg-yellow-400 text-gray-dark py-2 px-4 rounded-r flex items-center">
    <FaArrowRight className="mr-2" /> 
    DASHBOARD
  </button>
     </div>


       
        <button className="text-yellow-400 p-2 rounded">
          <FaBars className="text-3xl" />
        </button>
      </div>

    
      <div className="border-b border-yellow-300 mb-4"></div>

     
    </header>
  );
};

export default Header;