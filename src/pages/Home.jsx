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
        categories: []
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

  static getDerivedStateFromProps({ charts }, { options, series }) {
    if (charts.xAxis != options.xaxis.categories) {
      const newOptions = { ...options };
      const newSeries = [...series];
      newOptions.xaxis.categories = charts.xAxis;
      newSeries[0].data = charts.yAxis;
      return {
        options: newOptions,
        series: newSeries
      };
    }
    return null;
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
