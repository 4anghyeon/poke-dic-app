import PokemonTypeType from "./PokemonTypeType";

export default interface PokemonType {
  name: string;
  enName: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  types: {
    type: PokemonTypeType;
  }[];
}
