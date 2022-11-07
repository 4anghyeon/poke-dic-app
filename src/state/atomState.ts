import { atom } from "recoil";
import { DBPokemonType } from "../dataTypes/DBPokemonType";

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
