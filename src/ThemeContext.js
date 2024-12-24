// ThemeContext.js
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [textColor, setTextColor] = useState('#3a0250');
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);

  const toggleColorMenu = () => {
    setIsColorMenuOpen(!isColorMenuOpen);
  };

  const changeTextColor = (color) => {
    setTextColor(color);
    setIsColorMenuOpen(false);
  };

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, textColor, changeTextColor, isColorMenuOpen,  toggleColorMenu   }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}