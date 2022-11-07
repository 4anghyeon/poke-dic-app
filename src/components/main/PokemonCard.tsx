import React from "react";
import { Box, Grid } from "@mui/material";
import classes from "./pokemon-card.module.css";
import PokemonType from "../../dataTypes/PokemonType";
import translator from "../../translator";
import TypeBox from "./TypeBox";
import { getPokemonSpecies } from "../../api/pokeApi";

const onClickShowDetailHandler = (pokemon: PokemonType) => {
  getPokemonSpecies(pokemon.id).then((species) => {
    console.log(species);
    console.log(pokemon);
  });
};

function PokemonCard(props: { pokemon: PokemonType }) {
  const { pokemon } = props;
  return (
    <Grid
      container
      item
      xs={6}
      sm={6}
      md={2}
      className={classes.pokemonCard}
      onClick={() => onClickShowDetailHandler(pokemon)}
    >
      <Grid item>
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      </Grid>
      <Grid item className={classes.number}>
        <span>{`No. ${pokemon.id.toString().padStart(3, "0")}`}</span>
      </Grid>
      <Grid item className={classes.name}>
        <h2>{translator.get(pokemon.name) || pokemon.name}</h2>
      </Grid>
      <Grid item className={classes.types}>
        {pokemon.types.map((type) => {
          return <TypeBox key={type.type.name} name={type.type.name} />;
        })}
      </Grid>
    </Grid>
  );
}

export default PokemonCard;
