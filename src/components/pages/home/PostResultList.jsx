import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

import { fetchResultPosts } from "store/actions/dashboard-actions";

const styles = theme => ({
  list: {
    width: "100%"
  },
  progress: {
    width: "30%"
  }
});

class PostResultList extends Component {
  componentDidMount = () => {
    this.props.fetchResultPosts();
  };

  isHoax(hoax) {
    return hoax ? "secondary" : "primary";
  }

  renderHoaxLabel(hoax) {
    return hoax ? "Hoax" : "Not Hoax";
  }

  renderResultPosts = classes =>
    this.props.resultPosts.map(post => (
      <div key={post.id}>
        <ListItem button>
          <ListItemText primary={post.title} />
          <Chip
            label={this.renderHoaxLabel(post.hoax)}
            clickable
            className={classes.chip}
            color={this.isHoax(post.hoax)}
            deleteIcon={<DoneIcon />}
          />
        </ListItem>
        <Divider />
      </div>
    ));
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.list}>
        <h2>Latest Classification</h2>
        <List component="nav">
          <Divider />
          {this.renderResultPosts(classes)}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({ dashboardReducers }) => {
  return {
    resultPosts: dashboardReducers.resultPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchResultPosts: () => dispatch(fetchResultPosts())
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostResultList)
);
