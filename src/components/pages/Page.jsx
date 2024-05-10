import React from 'react';

function Page({ children }) {
  return (
    <div className='h-[2000px] absolute z-0 w-full 2xl:w-[calc(100%-15rem)] min-w-20 transform translate-x-0 2xl:translate-x-60 translate-y-20 md:translate-y-24 2xl:translate-y-0 p-5 md:p-20 2xl:p-10 m-auto transition-all duration-500 ease-in-out'>
      {children}
    </div>
  );
}

export default Page;
