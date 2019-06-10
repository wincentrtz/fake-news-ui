import React from "react";
import Chart from "react-apexcharts";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Form, Field, reduxForm } from "redux-form";

import ChartEndDate from "./ChartEndDate";
import ChartStartDate from "./ChartStartDate";

const styles = () => ({
  chart: {
    width: "100%"
  }
});

const dateFormating = date => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate();
  return year + "-" + month + "-" + day;
};

const PostChart = ({ classes, options, series, date, handleSubmit }) => {
  const startDate = date.startDate ? date.startDate : new Date();
  startDate.setDate(startDate.getDate() - 7);
  const formatStartDate = dateFormating(startDate);
  const endDate = date.endDate ? date.endDate : new Date();
  const formatEndDate = dateFormating(endDate);
  return (
    <Form className={classes.chart} onSubmit={handleSubmit}>
      <Grid container item justify="flex-end">
        <Field name="startDate" component={ChartStartDate} />
        <Field name="endDate" component={ChartEndDate} />
        <Grid item xs={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Send
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Chart options={options} series={series} type="line" height="400px" />
      </Grid>
    </Form>
  );
};

export default withStyles(styles)(
  reduxForm({
    form: "chart",
    enableReinitialize: true
  })(PostChart)
);
