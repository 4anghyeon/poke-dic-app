import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import classes from "./search-bar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useRecoilState } from "recoil";
import { queryState } from "../../state/atomState";

function SearchBar(props: { searchEventHandler: Function }) {
  const [query, setQuery] = useRecoilState(queryState);

  const { searchEventHandler } = props;

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchEventHandler();
    }
  };

  const queryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trimEnd());
  };

  const searchButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    searchEventHandler();
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
          onKeyUp={onKeyPressHandler}
        />
        <Button variant="contained" onClick={searchButtonClickHandler}>
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
