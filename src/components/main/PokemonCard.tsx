import React from "react";
import { Box, Grid } from "@mui/material";
import classes from "./pokemon-card.module.css";
import PokemonType from "../../dataTypes/PokemonType";

function PokemonCard(props: { pokemon: PokemonType }) {
  const { pokemon } = props;
  return (
    <Grid item xs={6} sm={6} md={2} className={classes.pokemonCard}>
      <Box>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </Box>
    </Grid>
  );
}

export default PokemonCard;
