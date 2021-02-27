import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false);
  return (
    <ThemeContext.Provider value={[light, setLight]}>
      {children}
    </ThemeContext.Provider>
  );
};
