import React, { useState } from "react";
import { useColor } from "../contexts/ColorContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';

function ThemeChange() {
  const colors = ["#0000FF", "#FF0000", "#008800", "#FF00FF", "#000000"];
  const [swipe, setSwipe] = useState(false);
  const { primaryColor, changeColor } = useColor();

  const toggleTheme = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === primaryColor);

    setSwipe(true);
    setTimeout(() => {
      setSwipe(false);
    }, 1000);
    setTimeout(() => {
      changeColor(newColor);
    }, 100);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 z-50 bg-primary text-white font-bold py-2 px-4 rounded shadow hover:bg-black transition-colors"
      >
        <FontAwesomeIcon icon={faPaintBrush} />
      </button>
      {swipe && <div className="color-swipe bg-primary"></div>}
    </>
  );
}

export default ThemeChange;
