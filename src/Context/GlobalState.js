import React, { createContext, useReducer, useState, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: JSON.parse(localStorage.getItem("income")) || [], // if a have data a i stored else return empty array
  expenseTransactions: JSON.parse(localStorage.getItem("expense")) || [],
};

export const GlobalContext = createContext(initialState);
export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState); //initialstate=action // Appreducer= state

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(state.incomeTransactions));
    localStorage.setItem("expense", JSON.stringify(state.expenseTransactions)); //set in local storage (affichage )
  });
  const addIncome = (incomeTransactions) => {
    dispatch({
      type: "ADD_INCOME", //action
      payload: incomeTransactions,
      //will hold the new income transaction create
    });
  };
  const addexpense = (expenseTransactions) => {
    dispatch({
      type: "ADD_EXPENSE", //action
      payload: expenseTransactions,
      //will hold the new income transaction create
    });
  };
  const deletetransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION", //we will delete by id
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome, //we passe it to AppReducer
        addexpense,
        deletetransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
