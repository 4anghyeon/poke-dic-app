import { atom } from "recoil";
import { DBPokemonType } from "../dataTypes/DBPokemonType";

export const searchedPokemonListState = atom<DBPokemonType[]>({
  key: "searchedPokemonList",
  default: [],
});

export const searchFlagState = atom<boolean>({
  key: "searchFlag",
  default: false,
});
