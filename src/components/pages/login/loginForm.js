import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Form, Field, reduxForm } from "redux-form";

import PasswordTextField from "./passwordTextField";
import UsernameTextField from "./usernameTextField";

const styles = theme => ({
  root: {
    height: "100vh"
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
  },
  forget: {
    textDecoration: "none",
    color: "#2196f3"
  }
});

const LoginForm = ({ classes, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        item
        xs={10}
        md={5}
        direction="column"
        className={classes.box}
      >
        <h1>Login</h1>
        <Field name="username" component={UsernameTextField} />
        <Field name="password" component={PasswordTextField} />
        <Grid container direction="row" justify="space-between">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Login
          </Button>
          <Link className={classes.forget} to="/login">
            <h4>Forget Password ?</h4>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Form>
);

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  reduxForm({
    form: "login"
  })(LoginForm)
);
