import React from "react";

function App() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#0000FF] flex justify-center items-center">
      <div
        id="container"
        className="w-fit h-auto p-10 flex flex-col items-center"
      >
        <img src="/logo.svg" alt="Logo" className="max-w-full h-auto" />
        <p className="relative text-[#FFFDD0] m-auto text-4xl -mt-6 sm:text-7xl font-open-sans font-extrabold sm:-mt-12 text-center">
          coming soon
        </p>
        <p className="text-[#FFFDD0] mt-10 text-center">
          in the meantime, check out the
        </p>
        <a
          href="https://legacy.thomaskimble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-[#0000FF] bg-[#FFFDD0] font-bold py-2 px-4 rounded mt-2">
            legacy website
          </button>
        </a>
      </div>
    </div>
  );
}

export default App;
