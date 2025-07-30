import React, { createContext, useState, useEffect } from 'react';

// Create context with just light theme
export const ThemeContext = createContext({
  theme: 'light'
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Always set to light theme
    setTheme('light');
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const value = {
    theme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
