import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";



const Hero = () => {
    return (
        <div>
            <div className='flex flex-row'>
                <div className="relative">
                    <img src="Group 35896.svg" className="w-[500px] h-[450px] mx-[250px] mt-[-70px]" alt="Group 35896" />
                    <div className="absolute inset-0 flex items-center justify-center mt-[350px]">
                        <img src="Star 3.svg" alt="Star 3" className='mt-[-900px] mx-16' />
                        <div className='flex flex-col '>
                            <div className='flex flex-col gap-[20px]'>
                                <span className='font-clash-display mx-[20px] mt-[-150px] text-[66px] font-extrabold'>Make The Best Financial Decisions</span>
                                <span className='font-clash-display-r mx-[20px] '>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus <br />tincidunt eu adipiscing sociis arcu lorem porttitor.</span>
                                <div className='flex flex-row'>
                                    <button className="cursor-pointer [border:none] mx-[15px] py-4 mt-5 px-[46px] bg-black rounded flex flex-row items-start justify-start z-[8] hover:bg-darkslategray">
                                        <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
                                        <a className="[text-decoration:none] relative text-lg leading-[28px] capitalize font-medium font-clash-display text-white text-left inline-block  z-[1]">
                                            Get Started <FaArrowRightLong className='absolute mx-2 mt-1' />
                                        </a>
                                    </button>
                                    <button className="cursor-pointer [border:none] mx-[15px] py-4 mt-5 px-[46px] bg-white rounded flex flex-row items-start justify-start z-[8] hover:bg-gray-200 ">
                                        <div className="h-[60px] w-[180px] relative rounded bg-white hidden" />
                                        <a className="[text-decoration:none] relative text-lg leading-[28px] capitalize font-medium font-clash-display text-black text-left inline-block  z-[1]">
                                            Watch Video <FaPlayCircle className='absolute mx-2 mt-1' />
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <img src="Frame 5.png" alt="Frame 5" className='w-[569px] h-[357.74px] ' />
                        </div>
                    </div>
                </div>
                <div >
                    <img src="Ellipse 2.png" alt="Ellipse 2" className=' w-[427px] mt-[240px] mx-[-50px]' />
                    <img src="Frame 4.png" alt="Group 35887" className='relative  w-[555px] h-[732] mt-[-590px] mx-[-150px]' />
                </div>
            </div>
        </div>
    );
};

export default Hero;