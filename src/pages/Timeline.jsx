import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PostTimeline from "../components/pages/timeline/PostTimeline";
import CreatePost from "../components/pages/timeline/CreatePost";
import Axios from "axios";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "40px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Timeline extends Component {
  componentDidMount() {
    const a = Axios.post("http://localhost:8080/postqueues", {
      postId: 1
    }).then(response => console.log(response));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={40} justify="center">
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={4}>
            <CreatePost />
            <PostTimeline />
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Timeline);
