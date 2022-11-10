import { atom } from "recoil";
import { DBPokemonType } from "../dataTypes/DBPokemonType";
import PokemonType from "../dataTypes/PokemonType";
import PokemonTypeType from "../dataTypes/PokemonTypeType";
import { PokemonSpeciesType } from "../dataTypes/PokemonSpeciesType";

export const searchedPokemonListState = atom<DBPokemonType[]>({
  key: "searchedPokemonList",
  default: [],
});

export const isLoadingState = atom<boolean>({
  key: "isLoading",
  default: false,
});

export const startIdState = atom<number>({
  key: "startId",
  default: 0,
});

export const searchFlagState = atom<boolean>({
  key: "searchFlag",
  default: false,
});

export const queryState = atom<string>({
  key: "query",
  default: "",
});

export const searchNumberState = atom<number[]>({
  key: "searchNumber",
  default: [1, 905],
});

export const openModalState = atom<boolean>({
  key: "openModal",
  default: false,
});

export const selectedPokemonState = atom<{
  pokemon: PokemonType;
  pokemonSpecies: PokemonSpeciesType;
}>({
  key: "selectedPokemon",
  default: {
    pokemon: {
      name: "",
      enName: "",
      id: 0,
      sprites: {
        other: {
          "official-artwork": {
            front_default: "",
          },
        },
      },
      types: [],
      weight: 0,
      height: 0,
    },
    pokemonSpecies: {
      genera: [
        {
          genus: "",
          language: {
            name: "",
          },
        },
      ],
      flavor_text_entries: [
        {
          flavor_text: "",
          language: {
            name: "",
          },
        },
      ],
    },
  },
});
