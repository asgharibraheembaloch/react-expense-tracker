import React, { useContext } from "react";
import { TransactionsContext } from "../context/ContextApi";
import Paper from "@material-ui/core/Paper";

export const TotalBalance = () => {
  const { transactions } = useContext(TransactionsContext);
  const transactionAmounts = transactions.map(
    (transaction) => transaction.amount
  );
  const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0);
  return (
    <Paper
      variant="outlined"
      size="small"
      style={{ margin: 8, color: "blue", display: "block" }}
      rounded
    >
      <h4>Total Balance</h4>
      <p>$ {balance}</p>
    </Paper>
  );
};
