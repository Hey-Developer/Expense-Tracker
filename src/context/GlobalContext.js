import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext();

//Now either u can pass the initial State here in the context or later in the provider..

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");

    return localData ? { transactions: JSON.parse(localData) } : initialState;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
