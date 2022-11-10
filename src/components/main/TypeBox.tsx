import React from "react";
import { Grid } from "@mui/material";
import classes from "./type-box.module.css";
import translator from "../../helper/translator";
import findColor from "../../helper/typeColorFinder";

function TypeBox(props: { name: string }) {
  let backgroundColor = findColor(props.name);
  return (
    <Grid container className={classes.typeBoxContainer} sx={{ backgroundColor: backgroundColor }}>
      <Grid item>{translator.get(props.name) || props.name}</Grid>
    </Grid>
  );
}

export default TypeBox;
