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

export const detailSearchFlagState = atom<boolean>({
  key: "detailSearchFlag",
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
