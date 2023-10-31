import React from 'react';
import '../App.css'
import './HeroSection.css';

function HeroSection() {
  return (
    <>
      <div className='hero'>
        <div className='hero-left'>
          <div className='hero-title'>
            <h1>Welcome to my space.</h1>
          </div>
          <div className='hero-description'>
            <h2 className='text-inline'>
              Welcome to my digital realm, a place where the <div className='text-inline text-strike'>lines</div> between
              engineering and design
            </h2>
            <div className='text-inline'><span className='blur'/><h2 className='text-inline'> blur </h2></div>
            <h2 className='text-inline'>
                into a symphony of creativity.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection