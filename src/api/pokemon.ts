import { PokemonType } from "pokemonTypeColors";

export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

interface Stat {
  name: StatName;
  value: number;
  description: string;
}

interface Pokemon {
  name: string;
  image: string;
  stats: Stat[];
  types: PokemonType[];
  overall: number;
}

export default Pokemon;
