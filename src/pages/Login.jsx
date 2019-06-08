import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import LoginForm from "components/pages/login/LoginForm";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const submit = values => {
  console.log(values);
};

function Login(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={0} square={true}>
        <LoginForm onSubmit={submit} />
      </Paper>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
