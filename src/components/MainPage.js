import React from 'react';
import {  FaBullseye, FaListAlt,FaStar, FaPalette, FaRocket, FaUsers  } from 'react-icons/fa';

const MainPage = () => {
  return (
    <section className="p-2 bg-gray-light rounded-lg mt-0 mb-4 shadow-lg">
      <div className='p-1 rounded-lg bg-gray-500 px-4'>
        <h2 className="font-semibold text-lg text-white">YOUR OVERVIEW</h2>
      </div>
      <div className="grid mt-4 grid-cols-3 gap-4 mb-2">
        <div className="flex flex-col justify-between shadow bg-white h-48 rounded-lg mb-2">
          <h3 className="flex items-center mb-2 text-center justify-center bg-yellow-400 rounded p-2 text-xs text-black">
            <FaStar className="mr-2" /> MY SCORE
          </h3>
          <div className="font-bold text-3xl text-center text-black">6.1</div>
          <p className="text-center rounded pt-2 text-xs pb-2 text-gray-500 bg-yellow-300">AVERAGE SCORE IS 5.6</p>
        </div>
        <div className="flex flex-col justify-between shadow bg-white h-48 rounded-lg">
          <h3 className="flex items-center mb-2 text-center justify-center bg-yellow-400 rounded p-2 text-xs text-black">
            <FaPalette className="mr-2" /> MY COLOR PROFILE
          </h3>
          <div className="flex items-center justify-center mx-auto h-16 w-16 bg-yellow-light rounded-full">
            <img src="../images/profile.png" alt="Color Profile" className="w-16 h-15" />
          </div>
          <p className="text-center rounded pt-2 text-xs pb-2 text-gray-500 bg-yellow-300">MAIN COLOR: YELLOW</p>
        </div>
        <div className="flex flex-col justify-between shadow bg-white h-48 rounded-lg">
          <h3 className="flex items-center mb-2 text-center justify-center bg-yellow-400 rounded p-2 text-xs text-black">
            <FaRocket className="mr-2" /> MY AMBITION
          </h3>
          <div className="font-bold text-3xl text-center">7.5</div>
          <p className="text-center rounded pt-2 text-xs pb-2 text-gray-500 bg-yellow-300">AMBITION GAP: 1.4</p>
        </div>
        <div className="flex flex-col justify-between shadow bg-white h-48 rounded-lg">
          <h3 className="flex items-center mb-2 text-center justify-center bg-yellow-400 rounded p-2 text-xs text-black">
            <FaBullseye className="mr-2" /> MY TARGET
          </h3>
          <div className="font-bold text-3xl text-center">10 
            <p className='text-center'>QUESTIONS</p>
          </div>
          <p className="text-center rounded pt-2 text-xs pb-2 text-gray-500 bg-yellow-300">2 QUESTIONS LEFT OPEN </p>
        </div>
        <div className="flex flex-col justify-between shadow bg-white h-48 rounded-lg">
          <h3 className="flex items-center mb-2 text-center justify-center bg-yellow-400 rounded p-2 text-xs text-black">
            <FaListAlt className="mr-2" /> MY PRIORITY LIST
          </h3>
          <div className="font-bold text-3xl text-center">6 
            <p className='text-center'>TO-DOS</p>
          </div>
          <p className="text-center rounded pt-2 text-xs pb-2 text-gray-500 bg-yellow-300">10% COMPLETED</p>
        </div>
        <div className="flex flex-col justify-between shadow bg-white h-48 rounded-lg">
          <h3 className="flex items-center mb-2 text-center justify-center bg-yellow-400 rounded p-2 text-xs text-black">
            <FaUsers className="mr-2" /> MY BUDDIES
          </h3>
          <div className="font-bold text-3xl text-center">6
            <p className='text-center'>BUDDIES</p>
          </div>
          <p className="text-center rounded pt-2 text-xs pb-2 text-gray-500 bg-yellow-300">CAN GIVE YOU ADVICE</p>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
