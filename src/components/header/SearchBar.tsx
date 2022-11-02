import React, { ChangeEvent } from "react";
import { Box, Button } from "@mui/material";
import classes from "./search-bar.module.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const queryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    fetch("http://localhost:3001/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: e.target.value.trimEnd(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Box className={classes.searchBar} sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          placeholder="포켓몬 이름 설명, 특성 키워드를 입력해주세요."
          onChange={queryChangeHandler}
        />
        <Button variant="contained">
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
