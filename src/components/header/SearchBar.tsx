import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import classes from "./search-bar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { selector, useRecoilState } from "recoil";
import {
  searchedPokemonListState,
  searchFlagState,
} from "../../state/atomState";
import PokemonType from "../../dataTypes/PokemonType";
import { DBPokemonType } from "../../dataTypes/DBPokemonType";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchedPokemonList, setSearchedPokemonList] = useRecoilState<
    DBPokemonType[]
  >(searchedPokemonListState);

  const [searchFlag, setSearchFlag] = useRecoilState(searchFlagState);

  const queryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trimEnd());
  };

  const searchButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch("http://localhost:3001/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSearchFlag(true);
        setSearchedPokemonList(data.data);
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
        <Button variant="contained" onClick={searchButtonClickHandler}>
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
