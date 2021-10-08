import { colors } from "@mui/material";

export type PokemonType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying";

interface PokemonTheme {
  name: PokemonType;
  display: string;
  primaryColor: string;
  secondaryColor: string;
}

const pokemonTheme: PokemonTheme[] = [
  {
    name: "bug",
    display: "🪲 bug",
    primaryColor: colors.green[500],
    secondaryColor: "black",
  },
  {
    name: "dark",
    display: "😡 dark",
    primaryColor: "black",
    secondaryColor: "white",
  },
  {
    name: "dragon",
    display: "🐲 dragon",
    primaryColor: colors.teal[500],
    secondaryColor: "black",
  },
  {
    name: "electric",
    display: "⚡ electric",
    primaryColor: colors.yellow[500],
    secondaryColor: "black",
  },
  {
    name: "fairy",
    display: "🧚 fairy",
    primaryColor: colors.pink[500],
    secondaryColor: "black",
  },
  {
    name: "fighting",
    display: "👊 fighting",
    primaryColor: colors.orange[500],
    secondaryColor: "black",
  },
  {
    name: "fire",
    display: "🔥 fire",
    primaryColor: colors.red[500],
    secondaryColor: "white",
  },
  {
    name: "flying",
    display: "🪂 flying",
    primaryColor: colors.blueGrey[500],
    secondaryColor: "black",
  },
];

export default pokemonTheme;
