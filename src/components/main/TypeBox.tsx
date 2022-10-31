import React from "react";
import { Grid } from "@mui/material";
import classes from "./type-box.module.css";
import translator from "../../translator";

function TypeBox(props: { name: string }) {
  let backgroundColor = "#92999f";
  switch (props.name) {
    case "grass":
      backgroundColor = "#7ab766";
      break;
    case "poison":
      backgroundColor = "#a16ec2";
      break;
    case "fire":
      backgroundColor = "#efa061";
      break;
    case "flying":
      backgroundColor = "#95a8d9";
      break;
    case "dragon":
      backgroundColor = "#336cbe";
      break;
    case "water":
      backgroundColor = "#608fcf";
      break;
    case "bug":
      backgroundColor = "#9bbf48";
      break;
    case "dark":
      backgroundColor = "#585365";
      break;
    case "electric":
      backgroundColor = "#edd259";
      break;
    case "psychic":
      backgroundColor = "#e57879";
      break;
    case "ground":
      backgroundColor = "#ca7c50";
      break;
    case "fairy":
      backgroundColor = "#dc94e1";
      break;
    case "steel":
      backgroundColor = "#678d9e";
      break;
    case "fighting":
      backgroundColor = "#bc4b6a";
      break;
    case "rock":
      backgroundColor = "#c3b78f";
      break;
    case "ice":
      backgroundColor = "#8dccc0";
      break;
    case "ghost":
      backgroundColor = "#5769a7";
  }
  return (
    <Grid
      container
      className={classes.typeBoxContainer}
      sx={{ backgroundColor: backgroundColor }}
    >
      <Grid item>{translator.get(props.name) || props.name}</Grid>
    </Grid>
  );
}

export default TypeBox;
