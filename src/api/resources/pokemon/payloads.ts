import { PokemonType, StatName } from "./types";

export interface GetPokemonResponse {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: StatName;
      };
    }
  ];
  types: [
    {
      type: {
        name: PokemonType;
      };
    }
  ];
}
