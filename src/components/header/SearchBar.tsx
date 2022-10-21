import React, { Fragment } from "react";
import { Box, Button } from "@mui/material";
import classes from "./search-bar.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <div className={classes.searchBar}>
      <input placeholder="포켓몬 이름 설명, 특성 키워드를 입력해주세요." />
      <Button variant="contained">
        <SearchIcon />
      </Button>
    </div>
  );
}

export default SearchBar;
