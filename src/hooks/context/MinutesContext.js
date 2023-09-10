import React, { createContext, useState, useContext } from 'react';

const MinutesContext = createContext();

export const MinutesProvider = ({ children }) => {
  const [minutesData, setMinutesData] = useState(null);

  return (
    <MinutesContext.Provider value={{ minutesData, setMinutesData }}>
      {children}
    </MinutesContext.Provider>
  );
}

export const useMinutes = () => useContext(MinutesContext);