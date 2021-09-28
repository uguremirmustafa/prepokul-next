import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [active, setActive] = useState(-1);

  return <AppContext.Provider value={{ active, setActive }}>{children}</AppContext.Provider>;
};
export const useApp = () => {
  return useContext(AppContext);
};
