import React from "react";
import Chart from "react-apexcharts";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Form, Field, reduxForm } from "redux-form";

import ChartEndDate from "./ChartEndDate";
import ChartStartDate from "./ChartStartDate";

const dateFormating = date => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() + 1 < 10 ? "0" + date.getDate() : date.getDate();
  return year + "-" + month + "-" + day;
};

const PostChart = ({ options, series, date, handleSubmit }) => {
  const startDate = date.startDate ? date.startDate : new Date();
  startDate.setDate(startDate.getDate() - 7);
  const formatStartDate = dateFormating(startDate);
  const endDate = date.endDate ? date.endDate : new Date();
  const formatEndDate = dateFormating(endDate);
  return (
    <Grid container item xs={10} direction="row" justify="center">
      <Form onSubmit={handleSubmit}>
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
    </Grid>
  );
};

export default reduxForm({
  form: "chart",
  enableReinitialize: true
})(PostChart);
