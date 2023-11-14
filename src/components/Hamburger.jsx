import React, { useState } from 'react';
import './Hamburger.css';

function Hamburger() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    document.body.classList.toggle("no-scroll");
    for (const id of active_toggle_elements) {
      document.getElementById(id).classList.toggle("active")
    }
  }

  const active_toggle_elements = [
    "navbar-background",
    "navbar-logo",
    "navbar-logo-container-creme",
    "navbar-logo-container-blue",
    "navbar-menu",
    "navbar-text",
    "hamburger",
    "backdrop"
  ]

  return (
    <>
      <div id='hamburger' onClick={handleClick} className='fixed z-40 right-0 h-10 w-10 m-5 md:m-7 cursor-pointer visible opacity-100 xl:invisible xl:opacity-0 transition duration-200 ease-in-out'>
        <span id='hamburger-top'/>
        <span id='hamburger-middle'/>
        <span id='hamburger-bottom'/>
      </div>
    </>
  );
}

export default Hamburger;
