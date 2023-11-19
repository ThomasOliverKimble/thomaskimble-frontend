import React, { useState } from 'react';

function Backdrop() {
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

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    document.body.classList.toggle("no-scroll");
    for (const id of active_toggle_elements) {
      document.getElementById(id).classList.toggle("active")
    }
  }

  return (
    <>
      <div id='backdrop' onClick={handleClick} className='fixed bg-[#FFFDD030] z-30 h-full w-full backdrop-blur-sm invisible opacity-0 [&.active]:visible [&.active]:opacity-100 transition duration-500 ease-in-out'/>
    </>
  );
}

export default Backdrop;