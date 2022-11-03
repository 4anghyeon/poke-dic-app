import Grid from "@mui/material/Grid";
import React, { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Box, LinearProgress } from "@mui/material";
import { getPokemonById, getPokemonListByIdRange } from "../../api/pokeApi";
import PokemonType from "../../dataTypes/PokemonType";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  searchedPokemonListState,
  searchFlagState,
} from "../../state/atomState";
import { DBPokemonType } from "../../dataTypes/DBPokemonType";

function MainContainer() {
  const [defaultPokemonList, setDefaultPokemonList] = useState<PokemonType[]>(
    []
  );

  // 검색 버튼 이벤트 발생 여부
  const [searchFlag, setSearchFlag] = useRecoilState(searchFlagState);

  // 검색된 포켓몬 목록 (DB에서 가져옴)
  const searchedPokemonList = useRecoilValue<DBPokemonType[]>(
    searchedPokemonListState
  );

  const [startId, setStartId] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  // 무한 스크롤
  const scrollEventHandler = (e: Event) => {
    const body = document.scrollingElement!;
    const debounce = setTimeout(() => {
      if (body.clientHeight + body.scrollTop >= body.scrollHeight) {
        setIsScrollEnd(true);
      }
    }, 10);
    return () => clearTimeout(debounce);
  };

  // 포켓몬 목록 불러오기
  const setDisplayPokemonList = (list: PokemonType[]) => {
    setDefaultPokemonList((prev) => [...prev, ...list]);
    setStartId((prev) => prev + 30);
    setIsLoading(false);
    setIsScrollEnd(false);
  };

  useEffect(() => {
    setIsLoading(true);
    if ((isScrollEnd && !isLoading) || startId === 0) {
      if (searchedPokemonList.length === 0) {
        getPokemonListByIdRange(startId).then((data) => {
          setDisplayPokemonList(data);
        });
      } else {
        let resultPokemonList: PokemonType[] = [];
        let queryData = searchedPokemonList.slice(startId);
        if (queryData.length === 0) {
          setIsLoading(false);
          setIsScrollEnd(false);
        }
        for (let i = 0; i < queryData.length; i++) {
          getPokemonById(queryData[i].number).then((data) => {
            resultPokemonList.push(data);
            if (i === queryData.length - 1) {
              setDisplayPokemonList(resultPokemonList);
            }
          });
        }
      }
      if (mainContainerRef && mainContainerRef.current) {
        document.addEventListener("scroll", scrollEventHandler);
      }
    }
  }, [isScrollEnd, isLoading]);

  // 검색 이벤트
  useEffect(() => {
    if (searchFlag) {
      setStartId(0);
      setDefaultPokemonList([]);
      setIsLoading(true);
    }

    return () => {
      setSearchFlag(false);
    };
  }, [searchFlag]);

  return (
    <Box ref={mainContainerRef}>
      <Grid container></Grid>
      <Grid container>
        {defaultPokemonList.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </Grid>
      {isLoading && (
        <Grid container>
          <Box
            sx={{ width: "100%", marginTop: "100px", marginBottom: "100px" }}
          >
            <LinearProgress />
          </Box>
        </Grid>
      )}
    </Box>
  );
}

export default MainContainer;
