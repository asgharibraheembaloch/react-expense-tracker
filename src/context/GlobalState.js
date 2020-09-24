import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

// create initial state for showing temp data on app

const initialState = {
    transactions: [{id:1, description:'income', transactionAmount: 1000}]
}
// create a global context
export const GlobalContext = createContext(initialState)

// create  a providor for global context
export const GlobalProvidor = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function delTransaction(id){
        dispatch (
            {
                type: 'DELETE_TRANSACTION',
                payload: id
            }
        )
    }
    function addTransaction(newTransaction){
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                payload: newTransaction
            }
        )
    }
    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                delTransaction,
                addTransaction 
            }
        }>
            {children}
        </GlobalContext.Provider>  
)}