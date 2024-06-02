import React from 'react';
import { FaApple } from "react-icons/fa6";

const FAQ = () => {
  const faqs = [
    {
      question: 'The Best Financial Accounting App Ever!',
      answer: 'Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan,Ultricies,In Ultricies Malesuada Elit Mauris.',
    },
    {
      question: 'The Best Financial Accounting App Ever!',
      answer: 'Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan,Ultricies,In Ultricies Malesuada Elit Mauris.',
    },
    {
      question: 'The Best Financial Accounting App Ever!',
      answer: 'Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan,Ultricies,In Ultricies Malesuada Elit Mauris.',
    },
    {
      question: 'The Best Financial Accounting App Ever!',
      answer: 'Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan,Ultricies,In Ultricies Malesuada Elit Mauris.',
    },
    {
      question: 'The Best Financial Accounting App Ever!',
      answer: 'Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan,Ultricies,In Ultricies Malesuada Elit Mauris.',
    },
    {
      question: 'The Best Financial Accounting App Ever!',
      answer: 'Arcu At Dictum Sapien, Mollis, Vulputate Sit Id Accumsan,Ultricies,In Ultricies Malesuada Elit Mauris.',
    },
  ];

  return (
    <div className="bg-white mb-20 relative">
      <h2 className="font-clash-display mx-52 font-medium text-tomato">FAQ</h2>
      <h2 className="font-clash-display mx-52 font-bold text-[50px]">Frequently Asked Questions <img src="Star 11.png" alt="Star 11" className='mx-20 mt-[-100px]' /></h2>
      <div className="grid grid-cols-2 gap-4 max-w-5xl mx-52">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border p-4 ${[0, 3, 4].includes(index) ? 'bg-tomato text-white hover:scale-105' : 'bg-white text-black hover:scale-105'}`}
          >
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="relative">
        <img src="Frame 10.png" alt="Frame 10" className='mx-16' />
        <div className='flex flex-row'>
            <img src="Star 10.png" alt="Star 10" className='mt-[-400px] mx-10 h-16 w-16'/>
        <div className='absolute top-5 left-0 right-60 bottom-0 flex flex-col items-center justify-center'>
          <span className='font-extrabold text-[40px] text-white'>Ready To Get Started?</span>
          <span className='text-[15px] text-white'>Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</span>
          <button className="cursor-pointer [border:none] mx-[15px] py-4 mt-5 px-[30px] bg-white rounded item-center flex flex-row  z-[8] hover:bg-gray-200 hover:scale-105">
            <div className="h-[60px] w-[180px] relative rounded bg-white hidden" />
            <a className="[text-decoration:none] relative text-lg leading-[28px] capitalize font-medium font-clash-display text-black text-left inline-block  z-[1]">
              Download App<FaApple className='absolute mx-2 mt-1' />
            </a>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQ;