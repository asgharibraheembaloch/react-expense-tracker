import { Typography } from "@material-ui/core";
import React from "react";

export const Header = () => {
  return (
    <div>
      <Typography color="textPrimary" variant="h7" component="h2" gutterBottom>
        Expense Tracker App
      </Typography>
    </div>
  );
};
