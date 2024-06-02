"use client"
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div id='testimonial'>
      <h2 className='font-clash-display text-center font-medium mt-[120px] text-tomato'>TESTIMONIALS</h2>
      <h2 className='font-clash-display text-center font-extrabold text-[50px]  '>What Our Users Say About Us?</h2>
      <div className='flex flex-row'>
        <img src="Frame 8.png" alt="Frame 8" className='mx-10'/>
        <div className='w-[600px] mt-20 font-clash-display flex flex-col '>
          <Slider {...settings}>
            <div>
              <h3 className='text-[25px]'>The Best Financial Accounting App Ever!</h3>
              <p className='text-[19px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
              <img src="Group 28.png" alt="" className='h-[40px]'/>
            </div>
            <div>
              <h3 className='text-[25px]'>The Best Financial Accounting App Ever!</h3>
              <p className='text-[19px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
              <img src="Group 28.png" alt="" className='h-[40px]'/>
            </div>
            <div>
              <h3 className='text-[25px]'>The Best Financial Accounting App Ever!</h3>
              <p className='text-[19px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
              <img src="Group 28.png" alt="" className='h-[40px]'/>
            </div>
            <div>
              <h3 className='text-[25px]'>The Best Financial Accounting App Ever!</h3>
              <p className='text-[19px]'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
              <img src="Group 28.png" alt="" className='h-[40px]'/>
            </div>
          </Slider>
          <img src="Star 8.png" alt="" className='h-16 w-16 mt-40'/>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
