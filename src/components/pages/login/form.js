import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    backgroundColor: "#E4E5E6",
    height: "100vh"
  },
  textField: {
    width: "100%"
  },
  box: {
    backgroundColor: "#FFFFFF",
    maxHeight: "600px",
    padding: "20px 40px"
  },
  margin: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit,
    padding: "10px 20px"
  }
});

class Form extends Component {
  state = {
    showPassword: false
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    const { showPassword } = this.state;
    return (
      <div>
        <Grid
          className={classes.root}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs="5" direction="column" className={classes.box}>
            <h1>Login</h1>
            <TextField
              id="outlined-bare"
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
            />
            <TextField
              id="outlined-bare"
              className={classes.textField}
              placeholder="Username"
              margin="normal"
              variant="outlined"
              type={this.state.showPassword ? "text" : "password"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Grid container direction="row" justify="space-between">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Login
              </Button>
              <h4>Reset Password ?</h4>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
