import React from 'react';
import '../../App.css';
import Hero from '../Hero';

function Home() {
  return (
    <>
      <div id='home-page' className='page'>
        <div id="home-page-content" className='max-w-[1536px] m-auto'>
          <Hero></Hero>
        </div>
      </div>
      {/* <div className='page'>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
      </div> */}
    </>
  )
}

export default Home;