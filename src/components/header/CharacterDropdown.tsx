import React, { RefObject, useState } from "react";
import ReactDOM from "react-dom";
import { Box, Grid } from "@mui/material";
import classes from "./detail-search-bar.module.css";

function CharacterDropdown(props: { dropdownRef: RefObject<HTMLDivElement> }) {
  const current = props.dropdownRef.current;
  const [characterTypeList, setCharacterTypeList] = useState([
    "전체",
    "테스트",
  ]);

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        left: current?.offsetLeft,
        top: current?.offsetTop,
      }}
    >
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item className={classes.dropdownBox}>
          <input type="text" />
        </Grid>
      </Grid>
      {characterTypeList.map((data) => {
        return (
          <Grid container>
            <Grid item md={2}></Grid>
            <Grid item className={classes.dropdownBox}>
              <span>{data}</span>
            </Grid>
          </Grid>
        );
      })}
    </div>,
    document.getElementById("portal")!
  );
}

export default CharacterDropdown;
