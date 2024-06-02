"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CiLocationArrow1 } from 'react-icons/ci';
import { motion } from 'framer-motion';

export const Pricing = () => {
  return (
    <div id='pricing' className="bg-white py-10">
      <h2 className='font-clash-display text-center font-semibold text-[60px] text-tomato'>Select Your Ideal Plan</h2>
      <div className="flex flex-row sm:flex-row gap-10 justify-center text-center mb-20 mt-10">
        <div className="text-xl mt-14 rounded-xl border border-gray-300 bg-gray-100 bg-opacity-30 p-6 sm:p-10 w-[300px] sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-gray-200">
          <div className="text-blue-600 font-bold">Basic Plan</div>
          <div className="text-2xl sm:text-4xl my-5 font-light text-black">$600</div>
          <div className="text-black text-xl sm:text-2xl mt-10 font-bold">Features</div>
          <div className="text-black mt-4 text-base sm:text-[18px] flex flex-col items-center">
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />First feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Second feature</div>
          </div>
          <a href="#" target='blank' className="mt-20 block">
            <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 border-2 border-blue-600 rounded-2xl focus:outline-none hover:bg-blue-500 active:bg-blue-700 transition-transform duration-200">
              Purchase
              <CiLocationArrow1 className='ml-2' />
            </button>
          </a>
        </div>
        <div className="text-xl mt-14 rounded-xl border border-gray-300 bg-gray-100 bg-opacity-30 p-6 sm:p-10 w-[300px] sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-gray-200">
          <div className="text-purple-600 font-bold">Standard Plan</div>
          <div className="text-2xl sm:text-4xl my-5 font-light text-black">$900</div>
          <div className="text-black text-xl sm:text-2xl mt-10 font-bold">Features</div>
          <div className="text-black mt-4 text-base sm:text-[18px] flex flex-col items-center">
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />First Feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Second Feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Third Feature</div>
          </div>
          <a href="#" target='blank' className="mt-16 block">
            <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-purple-600 border-2 border-purple-600 rounded-2xl focus:outline-none hover:bg-purple-500 active:bg-purple-700 transition-transform duration-200">
              Purchase
              <CiLocationArrow1 className='ml-2' />
            </button>
          </a>
        </div>
        <div className="text-xl mt-14 rounded-xl border border-gray-300 bg-gray-100 bg-opacity-30 p-6 sm:p-10 w-[300px] sm:w-80 transform transition duration-500 hover:scale-105 hover:bg-gray-200">
          <div className="text-yellow-600 font-bold">Premium Plan</div>
          <div className="text-2xl sm:text-4xl my-5 font-light text-black">$1800</div>
          <div className="text-black text-xl sm:text-2xl mt-10 font-bold">Features</div>
          <div className="text-black mt-4 text-base sm:text-[18px] flex flex-col items-center">
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />First Feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Second Feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Third Feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Fourth Feature</div>
            <div className="flex items-center"><FontAwesomeIcon icon={faCheck} className="mr-2 text-green-900" />Fifth Feature</div>
          </div>
          <a href="#" className="mt-8 block">
            <button className="flex flex-row animate-border text-center justify-center items-center mx-auto mt-8 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-yellow-600 border-2 border-yellow-600 rounded-2xl focus:outline-none hover:bg-yellow-500 active:bg-yellow-700 transition-transform duration-200">
              Purchase
              <CiLocationArrow1 className='ml-2' />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};