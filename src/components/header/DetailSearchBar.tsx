import React, { Fragment, useRef, useState } from "react";
import classes from "./detail-search-bar.module.css";
import { Box, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactDOM from "react-dom/client";
import CharacterDropdown from "./CharacterDropdown";

function DetailSearchBar(props: { showDetail: boolean }) {
  const [showCharacter, setShowCharacter] = useState(false);

  const characterDropDownRef = useRef<HTMLDivElement>(null);

  const onClickShowCharacterHandler = () => {
    setShowCharacter(!showCharacter);
  };

  return (
    <div className={props.showDetail ? classes.open : classes.close}>
      <Grid container sx={{ padding: "0 24px 12px 24px" }}>
        <Grid item lg={2}></Grid>
        <Grid container item sm={12} md={12} lg={10}>
          <Grid item xs={12} sm={12} md={4}>
            <Grid container sx={{ position: "relative" }}>
              <Grid item md={2}>
                <span>특성</span>
              </Grid>
              <Grid
                item
                md={10}
                onClick={onClickShowCharacterHandler}
                className={classes.box}
              >
                <span style={{ width: "100%", textAlign: "center" }}>전체</span>
                <span style={{ float: "right", paddingRight: "10px" }}>
                  <ExpandMoreIcon />
                </span>
                <Grid
                  item
                  md={10}
                  sx={{ position: "absolute" }}
                  className={classes.dropdownBox}
                >
                  <input type="text" />
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item md={2}>
                <span>지방</span>
              </Grid>
              <Grid
                item
                md={10}
                className={classes.box}
                onClick={onClickShowCharacterHandler}
              >
                <span style={{ width: "100%", textAlign: "center" }}>전체</span>
                <span style={{ float: "right", paddingRight: "10px" }}>
                  <ExpandMoreIcon />
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={8} sx={{ paddingLeft: "15px" }}>
            <Grid container>
              <Grid item>
                <span>타입</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailSearchBar;
