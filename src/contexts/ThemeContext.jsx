import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

// Map of theme colors and associated media paths
const themeMap = {
  blue: { color: "#0000FF", mediaPath: "blue" },
  red: { color: "#FF0000", mediaPath: "red" },
  green: { color: "#008800", mediaPath: "green" },
  orange: { color: "#FFBB00", mediaPath: "orange" },
  purple: { color: "#9933EE", mediaPath: "purple" },
};

// Create a context for theme management with default values
const ThemeContext = createContext({
  primaryColor: "var(--primary)",
  primaryHighlightColor: "var(--primary_highlight)",
  mediaPath: "blue",
  changeTheme: () => {},
  getRandomTheme: () => {},
});

// Custom hook to simplify the use of ThemeContext in components
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider component to wrap application components and provide theme context
export const ThemeProvider = ({ children }) => {
  // Initialize state from localStorage or default
  const initColor = localStorage.getItem("themeColor") || "var(--primary)";
  const initHighlightColor = localStorage.getItem("themeHighlightColor") || "var(--primary_highlight)";
  const initMediaPath = localStorage.getItem("themeMediaPath") || "blue";

  const [primaryColor, setPrimaryColor] = useState(initColor);
  const [primaryHighlightColor, setPrimaryHighlightColor] = useState(initHighlightColor);
  const [mediaPath, setMediaPath] = useState(initMediaPath);

  useEffect(() => {
    // Apply initial theme colors to CSS root variables
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--primary_highlight", primaryHighlightColor);
  }, [primaryColor, primaryHighlightColor]);

  const changeTheme = (newColor, newMediaPath) => {
    const newHighlightColor = newColor + "90";  // Assuming you want a transparency of 90%
    // Update CSS variables
    document.documentElement.style.setProperty("--primary", newColor);
    document.documentElement.style.setProperty("--primary_highlight", newHighlightColor);
    setPrimaryColor(newColor);
    setPrimaryHighlightColor(newHighlightColor);
    setMediaPath(newMediaPath);

    // Save to localStorage
    localStorage.setItem("themeColor", newColor);
    localStorage.setItem("themeHighlightColor", newHighlightColor);
    localStorage.setItem("themeMediaPath", newMediaPath);
  };

  // Function to retrieve a random theme that is different from the current theme
  const getRandomTheme = (currentColor) => {
    let keys = Object.keys(themeMap);
    let newTheme;
    do {
      newTheme = themeMap[keys[Math.floor(Math.random() * keys.length)]];
    } while (newTheme.color === currentColor);
    return newTheme;
  };

  const value = useMemo(() => ({
    primaryColor,
    primaryHighlightColor,
    mediaPath,
    changeTheme,
    getRandomTheme,
    themeMap,
  }), [primaryColor, primaryHighlightColor, mediaPath]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
