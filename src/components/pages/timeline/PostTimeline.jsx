import React, { Component } from "react";
import { connect } from "react-redux";
import { Paper, Grid, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import man from "assets/images/man.png";
import postImage from "assets/images/post.jpg";

import { fetchPostTimeline } from "store/actions/timeline-actions";

const styles = theme => ({
  postHeader: {
    padding: "10px 20px"
  },
  avatarImg: {
    width: "40px"
  },
  title: {
    fontSize: "1em",
    color: "#385898",
    fontWeight: "bolder"
  },
  subtitle: {
    fontSize: "0.7em",
    color: "gray",
    fontWeight: "bolder"
  },
  postImage: {
    width: "100%"
  },
  userInteraction: {
    textAlign: "center",
    padding: "10px 0px"
  },
  userInteractionButton: {
    fontWeight: "bolder"
  },
  postBody: {
    padding: "10px 20px",
    fontWeight: "lighter"
  }
});

class PostTimeline extends Component {
  async componentDidMount() {
    const a = this.props.fetchPostTimeline();
    console.log(a);
  }

  renderPost = () => {
    const { classes, posts } = this.props;
    return (
      posts && (
        <React.Fragment>
          {posts.map(() => (
            <Paper>
              <Grid
                className={classes.postHeader}
                container
                justify="space-between"
              >
                <Grid item xs={2}>
                  <img src={man} className={classes.avatarImg} />
                </Grid>
                <Grid xs={10} item>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        color="inherit"
                        className={classes.title}
                      >
                        Andrea Anjing
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className={classes.subtitle}
                        color="inherit"
                        noWrap
                      >
                        1 hr
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <Grid className={classes.postBody}>
                <Typography
                  className={classes.userInteractionButton}
                  color="inherit"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat, laborum, ad obcaecati saepe aperiam sequi similique
                  suscipit voluptatibus aliquid debitis eveniet sunt distinctio
                  natus sit in totam ea modi voluptates?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <img src={postImage} className={classes.postImage} />
              </Grid>
              <Divider />
              <Grid
                item
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid className={classes.userInteraction} container>
                  <Grid item xs={4}>
                    <Typography
                      className={classes.userInteractionButton}
                      color="inherit"
                    >
                      Like
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      className={classes.userInteractionButton}
                      color="inherit"
                    >
                      Comment
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      className={classes.userInteractionButton}
                      color="inherit"
                    >
                      Share
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
        </React.Fragment>
      )
    );
  };

  render() {
    const { classes } = this.props;

    return <div>{this.renderPost(classes)}</div>;
  }
}

const mapStateToProps = ({ timelineState }) => {
  return {
    posts: timelineState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostTimeline: () => dispatch(fetchPostTimeline())
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostTimeline)
);
