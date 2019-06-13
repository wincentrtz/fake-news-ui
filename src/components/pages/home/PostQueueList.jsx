import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

import { fetchQueuePosts } from "store/actions/dashboard-actions";

const styles = theme => ({
  list: {
    width: "100%"
  },
  progress: {
    width: "30%"
  }
});

class PostQueueList extends Component {
  status = {
    0: "Not Yet",
    1: "In Progress"
  };

  componentDidMount = () => {
    this.props.fetchQueuePosts();
  };
  renderQueuePosts = classes =>
    this.props.queuePosts.map(post => (
      <div key={post.id}>
        <ListItem button>
          <ListItemText primary={post.post_title} />
          <Chip
            label={this.status[post.status]}
            clickable
            className={classes.chip}
          />
        </ListItem>
        <Divider />
      </div>
    ));

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.list}>
        <h2>Queue Posts</h2>
        <List component="nav">
          <Divider />
          {this.renderQueuePosts(classes)}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({ dashboardReducers }) => {
  return {
    queuePosts: dashboardReducers.queuePosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQueuePosts: () => dispatch(fetchQueuePosts())
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostQueueList)
);
