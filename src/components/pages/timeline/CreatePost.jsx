import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Divider,
  Grid,
  InputBase,
  Chip
} from "@material-ui/core";
import FaceIcon from "@material-ui/icons/Face";
import man from "assets/images/man.png";

const styles = theme => ({
  root: {
    marginBottom: "40px"
  },
  avatarImg: {
    width: "40px"
  },
  postHeader: {
    padding: "5px 20px",
    fontWeight: "bolder",
    backgroundColor: "#f5f6f7"
  },
  postForm: {
    padding: "20px"
  },
  postInput: {
    width: "100%"
  },
  chip: {
    fontWeight: "bolder",
    marginRight: "15px"
  },
  postFooter: {
    padding: "20px",
    display: "flex",
    overflowY: "scroll"
  }
});

const CreatePost = ({ classes }) => {
  return (
    <Paper className={classes.root}>
      <Typography className={classes.postHeader} color="inherit" noWrap>
        Create Post
      </Typography>
      <Divider />
      <Grid
        container
        className={classes.postForm}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={2}>
          <img src={man} className={classes.avatarImg} />
        </Grid>
        <Grid item xs={10}>
          <InputBase
            className={classes.postInput}
            placeholder="What's on your mind, Andrea?"
            margin="normal"
          />
        </Grid>
      </Grid>
      <Divider />
      <div className={classes.postFooter + " disable-scrollbars"}>
        <Chip
          icon={<FaceIcon />}
          label="Photo / Videos"
          clickable
          className={classes.chip}
        />
        <Chip
          icon={<FaceIcon />}
          label="Photo / Videos"
          clickable
          className={classes.chip}
        />
        <Chip
          icon={<FaceIcon />}
          label="Photo / Videos"
          clickable
          className={classes.chip}
        />
        <Chip
          icon={<FaceIcon />}
          label="Photo / Videos"
          clickable
          className={classes.chip}
        />
      </div>
    </Paper>
  );
};

export default withStyles(styles)(CreatePost);
