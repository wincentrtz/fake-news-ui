import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  progress: {
    width: "30%"
  }
});

const PostQueueList = ({ classes }) => {
  return (
    <div className={classes.list}>
      <h2>Queue Posts</h2>
      <List component="nav">
        <Divider />
        <ListItem button>
          <ListItemText primary="Lorem Ipsum Title" />
          <LinearProgress
            className={classes.progress}
            variant="determinate"
            value={50}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Lorem Ipsum Title" />
          <LinearProgress
            className={classes.progress}
            variant="determinate"
            value={0}
          />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default withStyles(styles)(PostQueueList);
