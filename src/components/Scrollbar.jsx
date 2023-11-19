import React from 'react';

function Scrollbar(props) {
  if (props.isMobile) {
    return (
      <>
        <span id='scrollbar' className='invisible'></span>
      </>
    );
  } else {
    return (
      <>
        <span id='scrollbar' className='fixed z-10 -top-[calc(100%-5rem)] md:-top-[calc(100%-6rem)] xl:-top-full right-0 h-full w-2 md:w-3 bg-[#0000FF] transition duration-100 ease-in-out'></span>
      </>
    );
  }
}

export default Scrollbar;
