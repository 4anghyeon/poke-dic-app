import React, { Fragment } from "react";
import classes from "./detail-search-bar.module.css";
import { Grid } from "@mui/material";

function DetailSearchBar(props: { showDetail: boolean }) {
  return (
    <div className={props.showDetail ? classes.open : classes.close}>
      <Grid container sx={{ padding: "0 24px 12px 24px" }}>
        <Grid item lg={2}></Grid>
        <Grid container item sm={12} md={12} lg={10}>
          <Grid item xs={12} sm={12} md={4}>
            특성2
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            타입
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailSearchBar;
