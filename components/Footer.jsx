import React from "react";
import { RxDiscordLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center text-black border-t border-gray-400 overflow-hidden font-clash-display mx-auto py-8">
      <div className="w-full max-w-6xl text-gray-200 shadow-lg p-4 sm:p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="w-full flex flex-row sm:flex-row items-start justify-around flex-wrap">
            <div className="min-w-[200px] h-auto flex flex-col items-start mb-6 sm:mb-0 ">
              <a href="#">
                <img src="Group.png" alt="Logo" />
              </a>
              <a href="mailto:Help@Frybix.Com" className="no-underline">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <MdEmail className="text-tomato" />
                  <span className="text-sm font-medium sm:text-[15px] ml-[6px] text-black">
                    Help@Frybix.Com
                  </span>
                </p>
              </a>
              <a href="/" className="no-underline">
                <p className="flex flex-row items-center my-[10px] sm:my-[15px] cursor-pointer">
                  <FaPhoneAlt className="text-tomato" />
                  <span className="text-sm font-medium sm:text-[15px] ml-[6px] text-black">
                    +123456789
                  </span>
                </p>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-start font-clash-display mb-6 sm:mb-0">
              <div className="font-medium text-[30px] text-black sm:text-[16px]">Links</div>
              <a href="#" className="no-underline text-black font-medium">
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Home</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">About Us</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Booking</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Blog</span>
                </p>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-start font-clash-display mb-6 sm:mb-0">
              <div className="font-medium text-[30px] text-black sm:text-[16px]">Legal</div>
              <a href="#" className="no-underline text-black font-medium">
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Terms Of Use</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Privacy Policy</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Cookie Policy</span>
                </p>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-start font-clash-display mb-6 sm:mb-0">
              <div className="font-medium text-[30px] text-black sm:text-[16px]">Product</div>
              <a href="#" className="no-underline text-black font-medium">
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Take Tour</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Live Chat</span>
                </p>
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Reviews</span>
                </p>
              </a>
            </div>
            <div className="min-w-[200px] h-auto flex flex-col items-start font-clash-display mb-6 sm:mb-0">
              <div className="font-medium text-[30px] text-black sm:text-[16px]">Newsletter</div>
              <a href="#" className="no-underline text-black font-medium">
                <p className="my-[10px] sm:my-[15px] cursor-pointer">
                  <span className="text-sm sm:text-[15px]">Stay Up To Date</span>
                </p>
              </a>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email"
                  className="border border-gray-400 rounded-l-md py-2 px-4 mr-2 text-gray-600"
                />
                <button className="bg-tomato text-black rounded-r-md py-2 px-4 hover:scale-95">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-sm sm:text-[15px] text-center">
            &copy; Copyright 2022 Uifry.Com All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
