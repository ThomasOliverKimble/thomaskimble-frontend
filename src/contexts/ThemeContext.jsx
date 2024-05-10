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
const ThemeContext = createContext();

// Custom hook to simplify the use of ThemeContext in components
export function useTheme() {
  return useContext(ThemeContext);
}

// Provider component to wrap application components and provide theme context
export const ThemeProvider = ({ children }) => {
  // Define a default theme
  const defaultTheme = themeMap.blue;

  // Initialize state from localStorage or default
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem("themeColor") || defaultTheme.color);
  const [primaryHighlightColor, setPrimaryHighlightColor] = useState(localStorage.getItem("themeHighlightColor") || defaultTheme.color + "90"); // Assuming the highlight is a 90% opacity version
  const [mediaPath, setMediaPath] = useState(localStorage.getItem("themeMediaPath") || defaultTheme.mediaPath);

  useEffect(() => {
    // Set the CSS properties on the root element
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--primary_highlight", primaryHighlightColor);
  }, [primaryColor, primaryHighlightColor]);

  const changeTheme = (newColor, newMediaPath) => {
    const newHighlightColor = newColor + "90";
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
