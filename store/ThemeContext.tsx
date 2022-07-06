import React, { createContext, useEffect, useState } from 'react';
import { ThemeContextType, Theme } from '../data';

// 1. Create the context Type `ThemeContextType`
// 2. Create the actual context
export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.DARK,
  toggleTheme: () => {},
});

type ThemeProviderProps = {
  children?: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(Theme.DARK);

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
      document.body.classList.remove(Theme.LIGHT);
    }

    if (theme === Theme.LIGHT) {
      document.body.classList.add(Theme.LIGHT);
      document.body.classList.remove(Theme.DARK);
    }
  }, [theme]);

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
