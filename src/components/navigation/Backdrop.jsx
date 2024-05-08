import React from "react";
import { useUI } from "../../contexts/UIContext";

function Backdrop() {
  const { toggleUI } = useUI();

  return (
    <>
      <div
        id="backdrop"
        onClick={toggleUI}
        className="fixed bg-fond_transparent z-20 h-full w-full backdrop-blur-sm invisible opacity-0 [&.active]:visible [&.active]:opacity-100 transition duration-500 ease-in-out"
      />
    </>
  );
}

export default Backdrop;
