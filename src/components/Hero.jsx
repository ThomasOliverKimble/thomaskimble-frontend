import React from 'react';
import Typed from 'react-typed';
import '../App.css'
import './Hero.css';

function Hero() {
  return (
    <>
    <div className='w-full h-screen mx-auto px-20 pt-15 blob blob-2'>
      <div className='text-[#FFFDD0]'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <h1 className='text-[#FFFDD0] font-bold p-2 md:text-8xl sm:text-6xl text-5xl'>Welcome <br></br>to my space.</h1>
          <div className='mt-5'>
            <p className='mx-20 text-[#FFFDD0] md:text-2xl sm:text-xl text-l'>
              Welcome to my digital realm, a place where the <p className='text-inline text-strike'>lines</p> between <Typed className='text-[#AAAAFF] font-bold' strings={['engineering', 'design', 'robotics', 'AI', 'data', 'music']} typeSpeed={80} backSpeed={200} loop></Typed> <p className='text-inline text-blur'>blur</p> into a symphony of creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero