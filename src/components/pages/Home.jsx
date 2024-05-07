import React, { useEffect } from 'react';
import '../../App.css';
import Hero from '../Hero';

function Home() {
  useEffect(() => {
    document.title = "Home - Thomas Kimble";
  }, []);

  return (
    <>
      <div id='home-page' className='page'>
        <div id="home-page-content" className='max-w-[1536px] m-auto pt-[6rem] 2xl:pt-0'>
          <Hero></Hero>
        </div>
      </div>
    </>
  )
}

export default Home;