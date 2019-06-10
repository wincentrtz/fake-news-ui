import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LinearProgress from "@material-ui/core/LinearProgress";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const styles = theme => ({
  list: {
    width: "100%"
  },
  progress: {
    width: "30%"
  }
});

const PostResultList = ({ classes }) => {
  return (
    <div className={classes.list}>
      <h2>Latest Classification</h2>
      <List component="nav">
        <Divider />
        <ListItem button>
          <ListItemText primary="Lorem Ipsum Title" />
          <Chip
            label="Hoax"
            clickable
            className={classes.chip}
            color="secondary"
            deleteIcon={<DoneIcon />}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Lorem Ipsum Title" />
          <Chip
            label="Not Hoax"
            clickable
            className={classes.chip}
            color="primary"
            deleteIcon={<DoneIcon />}
          />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default withStyles(styles)(PostResultList);
