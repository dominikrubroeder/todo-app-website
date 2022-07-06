import React, { createContext, useState } from 'react';
import { ThemeContextType, Theme } from '../data';

// 1. Create the context Type `ThemeContextType`
// 2. Create the actual context
const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(Theme.DARK);

  const toggleThemeHandler = () => {
    setTheme((previousState) => {
      return previousState === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
