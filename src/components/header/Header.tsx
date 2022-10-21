import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import classes from "./header.module.css";
import DetailSearchBar from "./DetailSearchBar";

function Header() {
  return (
    <Box>
      <AppBar position="static" className={classes.toolBar}>
        <Toolbar>
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
        <Toolbar>
          <DetailSearchBar />
        </Toolbar>
      </AppBar>
      <Grid
        item
        className={classes.bottom}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box className={`${classes.close}`}>
          <span>닫기</span>
        </Box>
      </Grid>
    </Box>
  );
}

export default Header;
