import React, { Fragment } from "react";
import classes from "./detail-search-bar.module.css";
import { Grid } from "@mui/material";

function DetailSearchBar() {
  return (
    <Grid container className={classes.container}>
      <Grid container item xs={12} md={12} lg={12} xl={12}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={10}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container className={classes.detail}>
            <Grid md={4}>특성</Grid>
            <Grid md={8}>타입</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DetailSearchBar;
