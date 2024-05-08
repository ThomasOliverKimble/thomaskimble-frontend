import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

function Logo() {
  const { mediaPath } = useTheme();

  // Navigate to homepage when logo is clicked
  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div
      id="sidebar-logo"
      onClick={goHome}
      className="fixed z-30 h-fit w-60 p-5 cursor-pointer origin-top-left translate-x-3 translate-y-2 scale-[0.35] transition duration-500 ease-in-out md:translate-y-1.5 md:scale-[0.45] 2xl:transform-none [&.active]:transform-none [&.not-scroll]:transform-none"
    >
      <div id="sidebar-logo-container" className="relative h-40 w-full">
        <img
          id="sidebar-logo-container-color"
          src={`/media/logos/${mediaPath}/logo_tk.svg`}
          alt="logo-color"
          className="absolute opacity-100 2xl:opacity-0 [&.active]:opacity-0 transition duration-500 ease-in-out"
        />
        <img
          id="sidebar-logo-container-creme"
          src="/media/logos/creme/logo_tk.svg"
          alt="logo-creme"
          className="absolute opacity-0 2xl:opacity-100 [&.active]:opacity-100 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}

export default Logo;
