import React, { Fragment } from "react";
import { Box, Button, Grid } from "@mui/material";
import classes from "./search-bar.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Box className={classes.searchBar} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input placeholder="포켓몬 이름 설명, 특성 키워드를 입력해주세요." />
        <Button variant="contained">
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
