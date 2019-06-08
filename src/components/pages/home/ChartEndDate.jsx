import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const ChartEndDate = ({ input }) => (
  <Grid item xs={2}>
    <TextField
      id="end-date"
      label="End Date"
      type="date"
      InputLabelProps={{
        shrink: true
      }}
      {...input}
    />
  </Grid>
);

export default ChartEndDate;
