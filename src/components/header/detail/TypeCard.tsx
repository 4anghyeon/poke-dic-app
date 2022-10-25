import React from "react";
import { Box, Grid } from "@mui/material";
import classes from "./type-card.module.css";

function TypeCard() {
  return (
    <Grid item xs={3} sm={3} md={1.5} className={classes.typeBoxContainer}>
      <div className={classes.typeBox}>
        <img src="img/pokeball.png" alt={""} />
        <span>text</span>
      </div>
    </Grid>
  );
}

export default TypeCard;
