import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// create initial state for showing temp data on app

const initialState = {
    transactions: [
        {id:1, description:'project 1 income', transactionAmount:2000},
        {id:2, description:'project 2 income', transactionAmount:4000},
        {id:3, description:'project 1 salary', transactionAmount:-500},
        {id:4, description:'project 2 salary', transactionAmount:-1000}
    ]
}
// create a global context
export const GlobalContext = createContext(initialState)

// create  a providor for global context
export const GlobalProvidor = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>    )
}