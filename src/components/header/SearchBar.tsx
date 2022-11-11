import React, { ChangeEvent } from "react";
import { Box, Button } from "@mui/material";
import classes from "./search-bar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useSetRecoilState } from "recoil";
import { queryState } from "../../state/atomState";

function SearchBar(props: { searchEventHandler: Function }) {
  const setQuery = useSetRecoilState(queryState);

  const { searchEventHandler } = props;

  const onKeyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchEventHandler();
    }
  };

  const queryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trimEnd());
  };

  const searchButtonClickHandler = (_e: React.MouseEvent<HTMLButtonElement>) => {
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
