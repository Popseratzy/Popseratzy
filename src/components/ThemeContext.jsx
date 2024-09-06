import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const UpdateThemeContext = React.createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useUpdateThemeContext = () => {
  return useContext(UpdateThemeContext);
};

export const ThemeProvider = ({ value, children }) => {
  const [theme, setTheme] = useState(value);
  return (
    <ThemeContext.Provider value={theme}>
      <UpdateThemeContext.Provider value={setTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
