import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { fetchPostSummary } from "store/actions/dashboard-actions";
import PostChart from "../components/pages/home/PostChart";
import PostQueueList from "../components/pages/home/PostQueueList";
import PostResultList from "../components/pages/home/PostResultList";

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: "50px"
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
        data: []
      }
    ]
  };

  componentDidMount() {
    this.props.fetchPostSummary();
  }

  submit = values => {
    console.log(values);
  };

  static getDerivedStateFromProps({ charts }, { options, series }) {
    if (charts.yAxis.length !== 0 && charts.xAxis.length !== 0) {
      const newOptions = options;
      const newSeries = series;
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
    const { options, series } = this.state;
    return (
      <Grid
        className={classes.root}
        container
        item
        xs={12}
        direction="row"
        justify="center"
      >
        <Grid container item xs={10} direction="row" justify="center">
          <PostChart
            options={options}
            series={series}
            date={{ startDate: undefined, endDate: undefined }}
            onSubmit={this.submit}
          />
        </Grid>
        <Grid container item xs={10} md={4} direction="row">
          <PostQueueList />
        </Grid>
        <Grid container item xs={10} md={1} direction="row" />
        <Grid container item xs={10} md={4} direction="row">
          <PostResultList />
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
