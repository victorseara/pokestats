import { PokemonType } from "theme";

interface Stats {
  name: string;
  value: number;
}
interface Pokemon {
  name: string;
  image: string;
  stats: Stats[];
  types: PokemonType[];
}

export default Pokemon;
