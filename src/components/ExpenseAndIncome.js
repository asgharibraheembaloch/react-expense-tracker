import React, { useContext } from "react";
import { TransactionsContext } from "../context/ContextApi";

import Paper from "@material-ui/core/Paper";

export const ExpenseAndIncome = () => {
  const { transactions } = useContext(TransactionsContext);
  const transactionAmounts = transactions.map(
    (transaction) => transaction.amount
  );
  const expenseFilter = transactionAmounts.filter(
    (transaction) => transaction < 0
  );
  const expense = expenseFilter.reduce((acc, item) => (acc += item), 0);
  const incomeFilter = transactionAmounts.filter(
    (transaction) => transaction > 0
  );
  const income = incomeFilter.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <Paper
        variant="outlined"
        size="small"
        style={{
          margin: 4,
          color: "green",
          display: "inline-block",
          width: "47%",
        }}
        rounded
      >
        <h4>Income</h4>
        <p>$ +{income}</p>
      </Paper>
      <Paper
        variant="outlined"
        size="small"
        style={{
          margin: 4,
          color: "red",
          display: "inline-block",
          width: "47%",
        }}
        rounded
      >
        <h4>Expense</h4>
        <p>$ +{expense}</p>
      </Paper>
    </div>
  );
};
