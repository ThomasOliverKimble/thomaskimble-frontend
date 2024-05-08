// src/contexts/ColorContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export function useColor() {
    return useContext(ColorContext);
}

export const ColorProvider = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState('var(--primary)');

    const changeColor = (newColor) => {
        document.documentElement.style.setProperty('--primary', newColor);
        setPrimaryColor(newColor);
    };

    return (
        <ColorContext.Provider value={{ primaryColor, changeColor }}>
            {children}
        </ColorContext.Provider>
    );
};
