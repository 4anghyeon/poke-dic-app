import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";
import React, { useRef, useState } from "react";
import SearchBar from "./SearchBar";
import classes from "./header.module.css";
import DetailSearchBar from "./detail/DetailSearchBar";

function Header() {
  const [showDetail, setShowDetail] = useState(false);

  const onClickDetailToggleHandler = () => {
    setShowDetail(!showDetail);
  };

  return (
    <Box>
      <AppBar
        position="static"
        className={classes.toolBar}
        sx={{ background: "transparent" }}
      >
        <Toolbar sx={{ pb: 2 }}>
          <Grid container>
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
            >
              <img src="img/pokeball.png" alt="logo" width={32} />
              <h1>포켓몬 도감</h1>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={10}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #495057",
              }}
              className={classes.searchBar}
            >
              <SearchBar />
            </Grid>
          </Grid>
        </Toolbar>
        <DetailSearchBar showDetail={showDetail} />
      </AppBar>
      <Box
        className={classes.bottom}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <button onClick={onClickDetailToggleHandler}>
          <span>{showDetail ? "닫기" : "열기"}</span>
        </button>
      </Box>
    </Box>
  );
}

export default Header;
