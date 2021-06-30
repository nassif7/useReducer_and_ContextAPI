import React, { createContext, useContext } from "react";

export const AppContext = createContext({ dark: false });

export const useTheme = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [state, setState] = React.useState({ darkMode: false });

  return (
    <AppContext.Provider
      value={{ state, onUpdate: (v) => setState({ darkMode: v }) }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
