import React from 'react';
import Typed from 'react-typed';
import '../App.css'
import './Hero.css';

function Hero() {
  return (
    <>
    <div className='relative z-0 w-full h-full max-h-[1280px] mx-auto p-20'>
      <div className='w-full h-full blob blob-2'>
        {/* <div className='w-full h-[55%] px-20 pt-20 flex items-end'>
          <img src='/media/text/creme/text_welcome.svg' className='w-full' alt='Welcome'></img>
        </div>
        <div className='w-full h-[45%] px-40 pt-10'>
          <p className='text-[#FFFDD0] text-center text-2xl'>
            Welcome to my digital realm, a place where the lines between <Typed className='text-[#AAAAFF] font-bold' strings={['engineering', 'design', 'robotics', 'AI', 'data', 'music']} typeSpeed={80} backSpeed={200} loop></Typed> blur into a symphony of creativity.
          </p>
        </div> */}
      </div>
    </div>
    </>
  )
}

export default Hero;