import React from "react";
import { AddTransaction } from "./components/AddTransaction";
import { ExpenseAndIncome } from "./components/ExpenseAndIncome";
import { Header } from "./components/Header";
import { TotalBalance } from "./components/TotalBalance";
import { TransactionsList } from "./components/TransactionsList";
import { TransactionsProvidor } from "./context/ContextApi";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <TransactionsProvidor>
      <div className={classes.root}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper className={classes.paper}>
              <Header />
              <TotalBalance />
              <ExpenseAndIncome />
              <TransactionsList />
              <AddTransaction />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </TransactionsProvidor>
  );
}

export default App;
