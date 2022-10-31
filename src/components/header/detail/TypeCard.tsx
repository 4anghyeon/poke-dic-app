import React from "react";
import { Box, Grid } from "@mui/material";
import classes from "./type-card.module.css";
import translator from "../../../translator";

function TypeCard(props: { name: string }) {
  const { name } = props;
  return (
    <Grid item xs={3} sm={3} md={1.5} className={classes.typeBoxContainer}>
      <div className={classes.typeBox}>
        <img src={`img/poke-types/${name}.png`} alt={name} />
        <span>{translator.get(name) || name}</span>
      </div>
    </Grid>
  );
}

export default TypeCard;
