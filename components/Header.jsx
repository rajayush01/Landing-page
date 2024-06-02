"use client"
import PropTypes from "prop-types";
import { useState } from "react";

const FrameComponent3 = ({ className = "" }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header
      className={`w-[1198px] flex flex-row mt-5 mx-20 items-start justify-center max-w-full text-left text-8xs-2 text-black font-clash-display-r ${className}`}
    >
      <div className="w-[982px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="w-[427px] flex flex-col items-start justify-start pt-[40px] px-0 pb-0 box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
            <div className="flex flex-col items-start justify-start px-0 pb-0">
              <img src="Group.png" className="mt-[-7px]"></img>
            </div>
            <nav className="m-0 flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full text-left text-xl text-black font-clash-display-r mq750:hidden">
              <a
                href="/"
                className={`[text-decoration:none] relative leading-[26px] capitalize  inline-block min-w-[60px] z-[8] ${
                  activeLink === "home"
                    ? "text-tomato font-clash-display font-extrabold"
                    : "text-black font-medium"
                }`}
                onClick={() => handleLinkClick("home")}
              >
                home
              </a>
              <a
                href="#about"
                className={`[text-decoration:none] flex-1 relative leading-[26px] capitalize text-[inherit] inline-block min-w-[89px] whitespace-nowrap z-[8] ${
                  activeLink === "about"
                    ? "text-tomato font-clash-display font-extrabold"
                    : "text-black font-medium"
                }`}
                onClick={() => handleLinkClick("about")}
              >
                about us
              </a>
              <a
                href="#pricing"
                className={`[text-decoration:none] relative leading-[26px] capitalize text-[inherit] inline-block min-w-[68px] z-[8] ${
                  activeLink === "pricing"
                    ? "text-tomato font-clash-display font-extrabold"
                    : "text-black font-medium"
                }`}
                onClick={() => handleLinkClick("pricing")}
              >
                pricing
              </a>
              <a
                href="#features"
                className={`[text-decoration:none] flex-1 relative leading-[26px] capitalize text-[inherit] inline-block min-w-[89px] z-[8] ${
                  activeLink === "features"
                    ? "text-tomato font-clash-display font-extrabold"
                    : "text-black font-medium"
                }`}
                onClick={() => handleLinkClick("features")}
              >
                features
              </a>
            </nav>
          </div>
        </div>
        <button className="cursor-pointer [border:none] mx-[-100px] py-4 mt-5 px-[46px] bg-black rounded flex flex-row items-start justify-start z-[8] hover:bg-darkslategray mq750:hidden">
          <div className="h-[60px] w-[180px] relative rounded bg-black hidden" />
          <a className="[text-decoration:none] relative text-lg leading-[28px] capitalize font-medium font-clash-display-r text-white text-left inline-block min-w-[88px] z-[1] ">
            download
          </a>
        </button>
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;