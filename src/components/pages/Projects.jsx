import React, { useEffect } from 'react';
import '../../App.css';
import Hero from '../Hero';

function Home() {
  useEffect(() => {
    document.title = "Projects - Thomas Kimble";
  }, []);

  return (
    <>
      <div id='project-page' className='page'>
        <div id="project-page-content" className='max-w-[1536px] m-auto pt-[6rem] 2xl:pt-0'>
          <Hero></Hero>
        </div>
      </div>
    </>
  )
}

export default Home;