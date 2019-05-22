import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = theme => ({
  textField: {
    width: "100%"
  }
});

const UsernameTextField = ({ classes, input, ...custom }) => {
  return (
    <TextField
      className={classes.textField}
      placeholder="Username"
      margin="normal"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        )
      }}
      {...input}
      {...custom}
    />
  );
};

export default withStyles(styles)(UsernameTextField);
