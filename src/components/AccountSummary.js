import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState'

export const AccountSummary = () => {
    const {transactions} = useContext(GlobalContext);
    const transactionsAmounts = transactions.map(transaction=>transaction.transactionAmount);
    const Income = Math.abs(transactionsAmounts
        .filter(transaction=>transaction>0)
        .reduce((total, transaction)=>(total+=transaction),0)
        .toFixed(2));

    console.log(Income);
    const expense = Math.abs(transactionsAmounts
        .filter(transaction=>transaction<0)
        .reduce((total, transaction)=>(total+=transaction),0)
        .toFixed(2));
    console.log(expense);
    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">
                    ${Income}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">
                    %{expense}
                </p>
            </div>
        </div>
    )
}