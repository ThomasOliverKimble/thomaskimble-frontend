import React from 'react';

function Header() {
  return (
    <>
      <header id='header' className='fixed z-20 h-[5rem] md:h-[6rem] w-full visible opacity-100 xl:invisible xl:opacity-0 transition duration-200 ease-in-out'>
        <span id='header-background' className='absolute h-full w-full bg-[#FFFDD0]'/>
        <span id='header-border' className='absolute top-[100%] h-[3px] w-full bg-[#0000FF] invisible opacity-0 [&.scroll]:visible [&.scroll]:opacity-100 transition duration-200 ease-in-out'/>
        <div id='header-text' className='relative m-auto h-fit w-60 py-6 md:py-8 invisible opacity-0 sm:visible sm:opacity-100 [&.not-scroll]:invisible [&.not-scroll]:opacity-0 transition duration-200 ease-in-out not-scroll'>
          <img id='header-text-logo' src='/media/text/blue/text_thomaskimble.svg' alt='thomaskimble-creme' className='relative'/>
        </div>
      </header>
    </>
  );
}

export default Header;
