import React from 'react';
import Typed from 'react-typed';
import '../App.css'

function Hero() {
  return (
    <>
    <div id='hero' className='relative z-0 h-[calc(100vh-6rem)] xl:h-screen max-h-[80rem]'>
      <div id='hero-wrapper' className='absolute flex w-full h-full min-h-[40rem] xl:min-h-[60rem]'>
        <div id='hero-containter' className='relative w-full m-auto'>
          <div id='hero-blob-container' className='relative blob blob-2 w-full h-auto py-[calc(3/4*100%/2)] px-[7%] md:px-[10%]'>
            <div id='hero-welcome-container' className='absolute w-[86%] md:w-[80%] h-[72%] md:h-[60%] top-0 flex items-end pb-5'>
              <img id='hero-welcome' src='/media/text/creme/text_welcome.svg' className='w-full' alt='welcome'></img>
            </div>
            <div id='hero-text-container' className='absolute justify-center hidden md:block pt-5 lg:pt-8 w-[80%] h-[40%] bottom-0'>
              <p id='hero-text-creme' className='text-[#FFFDD0] text-center text-xl lg:text-2xl'>
                Welcome to my digital portfolio, a place where the lines between <Typed className='text-[#AAAAFF] font-bold' strings={['engineering', 'design', 'robotics', 'AI', 'data', 'cloud', 'music']} typeSpeed={80} backSpeed={200} loop></Typed> blur into a showcase of my passions.
              </p>
              <div id='hero-button-container' className='flex items-center justify-center'>
                <button className='bg-[#FFFDD0] text-[#0000FF] text-lg lg:text-xl xl:text-2xl font-bold py-3 px-6 mt-5 xl:py-4 xl:px-10 xl:mt-8 rounded hover:bg-[#AAAAFF] transition duration-200 ease-in-out'>Explore</button>
              </div>
            </div>
          </div>
          <p id='hero-text-blue' className='text-[#0000FF] block md:hidden text-center text-xl px-[5%] pt-5'>
            Welcome to my digital portfolio, a place where the lines between <Typed className='text-[#AAAAFF] font-bold' strings={['engineering', 'design', 'robotics', 'AI', 'data', 'cloud', 'music']} typeSpeed={80} backSpeed={200} loop></Typed> blur into a showcase of my passions.
          </p>
          <div id='hero-button-container' className='flex items-center justify-center'>
            <button className='bg-[#0000FF] text-[#FFFDD0] block md:hidden text-lg lg:text-xl xl:text-2xl font-bold py-3 w-[90%] mt-5 rounded hover:bg-[#AAAAFF] transition duration-200 ease-in-out'>Explore</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero;