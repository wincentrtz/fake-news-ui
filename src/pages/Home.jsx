import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chart from "react-apexcharts";

import { fetchPostSummary } from "store/actions/dashboard-actions";

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: "50px"
  },
  chart: {
    margin: "0 auto"
  }
});

class Home extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  };

  componentDidMount() {
    this.props.fetchPostSummary();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} justify="center">
        <Grid item xs={10}>
          <Chart
            className={classes}
            options={this.state.options}
            series={this.state.series}
            type="line"
            height="400px"
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = ({ dashboardReducers }) => {
  return {
    charts: dashboardReducers.charts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPostSummary: () => dispatch(fetchPostSummary())
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
