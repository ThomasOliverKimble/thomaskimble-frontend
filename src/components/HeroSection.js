import React from 'react';
import '../App.css'
import './HeroSection.css';

function HeroSection() {
  return (
    <>
      <div className='hero-container'>
        <video src='/videos/animation_light.mp4' autoPlay muted></video>
        <div className='full-image'></div>
      </div>
    </>
  )
}

export default HeroSection