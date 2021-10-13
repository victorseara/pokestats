import { PokemonType, StatName } from "./types";

export interface GetPokemonStat {
  base_stat: number;
  stat: {
    name: StatName;
  };
}

export interface GetPokemonType {
  type: {
    name: PokemonType;
  };
}

export interface GetPokemonResponse {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: GetPokemonStat[];
  types: GetPokemonType[];
}
