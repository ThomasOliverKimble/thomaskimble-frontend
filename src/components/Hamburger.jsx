import React from 'react';
import { useUI } from '../contexts/UIContext';
import './Hamburger.css';

function Hamburger() {
  const { toggleUI } = useUI();

  return (
    <>
      <div id='hamburger' onClick={toggleUI} className='fixed z-40 right-0 h-10 w-10 m-5 md:-translate-x-2 md:translate-y-2 cursor-pointer visible opacity-100 lg:invisible lg:opacity-0 transition duration-200 ease-in-out'>
        <span id='hamburger-top'/>
        <span id='hamburger-middle'/>
        <span id='hamburger-bottom'/>
      </div>
    </>
  );
}

export default Hamburger;
