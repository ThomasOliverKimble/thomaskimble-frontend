import React, { useEffect } from 'react';
import '../../App.css';
import Hero from '../Hero';

function Home() {
  useEffect(() => {
    document.title = "About - Thomas Kimble";
  }, []);

  return (
    <>
      <div id='about-page' className='page'>
        <div id="about-page-content" className='max-w-[1536px] m-auto pt-[6rem] 2xl:pt-0'>
          <Hero></Hero>
        </div>
      </div>
    </>
  )
}

export default Home;