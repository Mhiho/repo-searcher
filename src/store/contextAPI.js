
import React, { createContext, useState } from 'react'


const defaultState = {

}

export const ThemeContext = createContext(defaultState)

export const ThemeProvider = ({ children }) => {

  return (
    <ThemeContext.Provider value={{ }} >
      {children}
    </ThemeContext.Provider>
  );
}