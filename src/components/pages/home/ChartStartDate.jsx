import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const ChartStartDate = ({ input }) => (
  <Grid item xs={2}>
    <TextField
      id="start-date"
      label="Start Date"
      type="date"
      InputLabelProps={{
        shrink: true
      }}
      {...input}
    />
  </Grid>
);

export default ChartStartDate;
