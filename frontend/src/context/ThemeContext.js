// ThemeContext.js

import React, { createContext, useContext, useState } from "react";

// Create the ThemeContext
const ThemeContext = createContext();

// Create a ThemeProvider component to wrap your app
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access the theme context
export function useTheme() {
  return useContext(ThemeContext);
}
