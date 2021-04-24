import React, { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";
import { TransactionsContext } from "../context/ContextApi";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const inputRef = useRef();
  const { addTransaction } = useContext(TransactionsContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const transactionObj = {
      id: new Date().getTime(),
      description,
      amount: +amount,
    };
    addTransaction(transactionObj);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Description"
          variant="outlined"
          style={{ margin: 4 }}
          size="small"
          ref={inputRef}
          type="text"
          placeholder="please enter description here"
          onChange={(event) => setDescription(event.target.value)}
        ></TextField>
        <br />
        <TextField
          label="Amount"
          variant="outlined"
          style={{ margin: 4 }}
          size="small"
          ref={inputRef}
          type="number"
          placeholder="please enter amount here"
          onChange={(event) => setAmount(event.target.value)}
        ></TextField>
        <br />
        <Button
          variant="contained"
          size="small"
          style={{ margin: 4, color: "green" }}
          startIcon={<AddIcon />}
          onClick={handleSubmit}
        >
          Add Transaction
        </Button>
      </form>
    </div>
  );
};
