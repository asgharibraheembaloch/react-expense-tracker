import React, { useContext } from "react";
import { TransactionsContext } from "../context/ContextApi";
import { Transaction } from "./Transaction";

export const TransactionsList = () => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <div>
      <h3>Transaction List</h3>

      <div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
