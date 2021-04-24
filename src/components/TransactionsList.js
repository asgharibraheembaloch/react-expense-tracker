import { Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { TransactionsContext } from "../context/ContextApi";
import { Transaction } from "./Transaction";

export const TransactionsList = () => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Paper variant="outlined" round>
      <Typography color="textPrimary" variant="h7" component="h3" gutterBottom>
        Transaction List
      </Typography>

      <div>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </Paper>
  );
};
