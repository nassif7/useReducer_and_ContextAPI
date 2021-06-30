import React, { createContext, useContext } from "react";

export const AppContext = createContext({
  state: { darkMode: false },
  actions: {}
});

const appContextReducer = (state, action) => {
  switch (action.type) {
    case "CHNAGE_THEME": {
      return {
        ...state,
        darkMode: !state.darkMode
      };
    }
    default: {
      return state;
    }
  }
};

export const useTheme = () => useContext(AppContext);

const AppContextProvider = ({ children, initialState }) => {
  const [state, dispatch] = React.useReducer(appContextReducer, initialState);

  console.log("context", state);
  const changeTheme = React.useCallback(
    () => dispatch({ type: "CHNAGE_THEME" }),
    []
  );

  const actions = { changeTheme };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
