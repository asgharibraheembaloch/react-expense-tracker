import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, description: "project income", amount: 1000 },
    { id: 2, description: "expence 1", amount: -100 },
    { id: 3, description: "expence 2", amount: -100 },
    { id: 4, description: "expence 3", amount: -100 },
    { id: 5, description: "expence 4", amount: -100 },
    { id: 6, description: "expence 5", amount: -100 },
  ],
};

export const TransactionsContext = createContext(initialState);

export const TransactionsProvidor = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log({ ...state.transactions });

  function addTransaction(transactionObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactionObj,
    });
  }

  function updateTransaction(id, description, amount) {
    console.log({ id, description, amount });
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: { id, description, amount },
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        updateTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
