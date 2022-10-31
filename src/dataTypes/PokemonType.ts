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
}
