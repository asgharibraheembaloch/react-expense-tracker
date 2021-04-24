import React, { useContext, useRef, useState } from "react";
import { TransactionsContext } from "../context/ContextApi";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";
import CancelIcon from "@material-ui/icons/Cancel";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Transaction = ({ transaction }) => {
  const classes = useStyles();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const inputRef = useRef();
  const { deleteTransaction } = useContext(TransactionsContext);
  const { updateTransaction } = useContext(TransactionsContext);
  let [edit, setEdit] = useState(false);

  return (
    <List className={classes.root}>
      {edit ? (
        <ListItem>
          <TextField
            label="Description"
            variant="outlined"
            style={{ margin: 4 }}
            size="small"
            ref={inputRef}
            type="text"
            placeholder={transaction.description}
            onChange={(event) => setDescription(event.target.value)}
          ></TextField>
          <TextField
            label="Amount"
            style={{ margin: 8 }}
            size="small"
            variant="outlined"
            ref={inputRef}
            type="number"
            placeholder={transaction.amount}
            onChange={(event) => setAmount(event.target.value)}
          ></TextField>
        </ListItem>
      ) : (
        <ListItem>
          <Typography color='textPrimary' variant="h4" component="h2" gutterBottom>
          <ListItemText
            primary={transaction.description}
            secondary={`$  ${transaction.amount}`}
          />
          </Typography>
        </ListItem>
      )}
      <ListItem divider={true}>
        {edit ? (
          <Button
            variant="contained"
            size="small"
            style={{ margin: 8, color: "brown" }}
            startIcon={<UpdateIcon />}
            onClick={() => {
              updateTransaction(transaction.id, description, amount);
              setEdit(!edit);
            }}
          >
            update
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ margin: 8 }}
            startIcon={<EditIcon />}
            onClick={() => setEdit(!edit)}
          >
            Edit
          </Button>
        )}
        {edit ? (
          <Button
            variant="contained"
            size="small"
            style={{ margin: 8 }}
            startIcon={<CancelIcon />}
            onClick={() => setEdit(!edit)}
          >
            cancel
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ margin: 8 }}
            startIcon={<DeleteIcon />}
            onClick={() => deleteTransaction(transaction.id)}
          >
            Delete
          </Button>
        )}
      </ListItem>
    </List>
  );
};
