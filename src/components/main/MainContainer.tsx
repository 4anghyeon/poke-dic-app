import Grid from "@mui/material/Grid";
import React, { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Box, LinearProgress } from "@mui/material";
import { getPokemonListByIdRange } from "../../api/pokeApi";
import PokemonType from "../../dataTypes/PokemonType";
import classes from "./main-container.module.css";

function MainContainer() {
  const [defaultPokemonList, setDefaultPokemonList] = useState<PokemonType[]>(
    []
  );
  const [startId, setStartId] = useState(0);
  const [endId, setEndId] = useState(30);
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

  // 기본 포켓몬 목록 불러오기
  useEffect(() => {
    if ((isScrollEnd && !isLoading) || startId === 0) {
      setIsLoading(true);
      getPokemonListByIdRange(startId, endId).then((data) => {
        setDefaultPokemonList((prev) => [...prev, ...data]);
        setStartId((prev) => prev + 30);
        setEndId((prev) => prev + 30);
        setIsLoading(false);
        setIsScrollEnd(false);
      });

      if (mainContainerRef && mainContainerRef.current) {
        document.addEventListener("scroll", scrollEventHandler);
      }
    }
  }, [isScrollEnd, isLoading]);

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
