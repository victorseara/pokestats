export type PokemonType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "fairy"
  | "dark";

export type StatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export interface Stat {
  name: StatName;
  value: number;
  description: string;
}

export interface Pokemon {
  name: string;
  image: string;
  stats: Stat[];
  types: PokemonType[];
  overall: number;
}

export default Pokemon;
