import React from 'react';
import '../../App.css';
import Hero from '../Hero';

function Home() {
  return (
    <>
      <div id='home-page' className='page'>
        <div id="home-page-content" className='max-w-[1536px] m-auto pt-[6rem] xl:pt-0'>
          <Hero></Hero>
          <Hero></Hero>
        </div>
      </div>
    </>
  )
}

export default Home;