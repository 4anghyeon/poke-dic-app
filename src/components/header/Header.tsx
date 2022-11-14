import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import classes from "./header.module.css";
import DetailSearchBar from "./detail/DetailSearchBar";
import translator from "../../helper/translator";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  queryState,
  searchedPokemonListState,
  searchFlagState,
  searchNumberState,
  startIdState,
} from "../../state/atomState";
import { DBPokemonType } from "../../dataTypes/DBPokemonType";

function Header() {
  const [showDetail, setShowDetail] = useState(false);

  const onClickDetailToggleHandler = () => {
    setShowDetail(!showDetail);
  };

  const query = useRecoilValue(queryState);
  const setSearchFlag = useSetRecoilState(searchFlagState);

  const setSearchedPokemonList = useSetRecoilState<DBPokemonType[]>(searchedPokemonListState);

  const searchNumber = useRecoilValue<number[]>(searchNumberState);
  const setStartId = useSetRecoilState(startIdState);

  const [selectedType, setSelectedType] = useState<string[]>([]);

  // 검색 알림 이벤트
  const searchEventHandler = () => {
    fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        startNumber: searchNumber[0],
        endNumber: searchNumber[1],
        selectedType: selectedType.map((type) => translator.get(type)),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) return;
        setStartId(0);
        setSearchFlag(true);
        setSearchedPokemonList(data.data);
      });
  };

  return (
    <Box>
      <AppBar position="static" className={classes.toolBar} sx={{ background: "transparent" }}>
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
              <SearchBar searchEventHandler={searchEventHandler} />
            </Grid>
          </Grid>
        </Toolbar>
        <DetailSearchBar
          showDetail={showDetail}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          searchEventHandler={searchEventHandler}
        />
      </AppBar>
      <Box className={classes.bottom} sx={{ display: "flex", justifyContent: "center" }}>
        <button onClick={onClickDetailToggleHandler}>
          <span>{showDetail ? "닫기" : "열기"}</span>
        </button>
      </Box>
    </Box>
  );
}

export default Header;
