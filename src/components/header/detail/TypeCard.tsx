import React, { Dispatch, SetStateAction, useState } from "react";
import { Box, Grid } from "@mui/material";
import classes from "./type-card.module.css";
import translator from "../../../translator";

function TypeCard(props: {
  name: string;
  selectedType: string[];
  setSelectedType: Dispatch<SetStateAction<string[]>>;
}) {
  const [check, setCheck] = useState(false);
  const { name, selectedType, setSelectedType } = props;
  const onClickTypeHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedType.includes(name)) {
      setSelectedType((prev) => prev.filter((d) => d !== name));
      setCheck(false);
    } else {
      setSelectedType((prev) => {
        prev.push(name);
        return prev;
      });
      setCheck(true);
    }
  };
  return (
    <Grid
      item
      xs={3}
      sm={3}
      md={1.5}
      className={classes.typeBoxContainer}
      onClick={onClickTypeHandler}
    >
      <div
        className={`${classes.typeBox} ${check ? classes.checkTypeBox : ""}`}
      >
        {check ? (
          <img src={`img/pokeball.png`} alt={name} />
        ) : (
          <img src={`img/poke-types/${name}.png`} alt={name} />
        )}
        <span>{translator.get(name) || name}</span>
      </div>
    </Grid>
  );
}

export default TypeCard;
