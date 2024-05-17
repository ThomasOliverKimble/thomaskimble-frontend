import React from "react";
import { useTheme } from "../contexts/ThemeContext";

function Loading() {
  const { mediaPath } = useTheme();

  return (
    <div className="fixed top-0 left-0 2xl:pl-60 w-full h-full bg-fond flex justify-center items-center flex-col">
      <img
        src={`/media/logos/${mediaPath}/logo_tk.svg`}
        alt="Logo"
        className="w-[25rem] h-auto"
      />
      <p className="text-primary text-6xl font-open-sans font-extrabold ml-10 -mt-8">
        loading...
      </p>
    </div>
  );
}

export default Loading;
