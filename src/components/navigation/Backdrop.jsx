import React from "react";
import { useUI } from "../../contexts/UIContext";

function Backdrop() {
  const { toggleUI } = useUI();

  // Renders a full-screen backdrop that toggles UI visibility on click
  return (
    <div
      id="backdrop"
      onClick={toggleUI}
      className="fixed bg-fond_transparent z-20 h-full w-full backdrop-blur-sm invisible opacity-0 transition duration-500 ease-in-out [&.active]:visible [&.active]:opacity-100"
    />
  );
}

export default Backdrop;
