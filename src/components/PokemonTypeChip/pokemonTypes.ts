import { PokemonType } from "pokemonTypeColors";

interface PokemonTheme {
  name: PokemonType;
  display: string;
}

const pokemonTypes: PokemonTheme[] = [
  {
    name: "bug",
    display: "🪲 bug",
  },
  {
    name: "dark",
    display: "😡 dark",
  },
  {
    name: "dragon",
    display: "🐲 dragon",
  },
  {
    name: "electric",
    display: "⚡ electric",
  },
  {
    name: "fairy",
    display: "🧚 fairy",
  },
  {
    name: "fighting",
    display: "👊 fighting",
  },
  {
    name: "fire",
    display: "🔥 fire",
  },
  {
    name: "flying",
    display: "🪂 flying",
  },
  {
    name: "flying",
    display: "🪂 flying",
  },
  {
    name: "normal",
    display: "🙂 normal",
  },
  {
    name: "ghost",
    display: "👻 ghost",
  },

  {
    name: "grass",
    display: "🌿 grass",
  },
  {
    name: "ice",
    display: "🧊 ice",
  },
  {
    name: "ground",
    display: "🟤 ground",
  },
  {
    name: "poison",
    display: "💀 poison",
  },
  {
    name: "psychic",
    display: "🧙 phychic",
  },
  {
    name: "water",
    display: "💧 water",
  },
  {
    name: "steel",
    display: "🤖 steel",
  },
  {
    name: "rock",
    display: "🪨 rock",
  },
  {
    name: "fighting",
    display: "🥊 fighting",
  },
];

export const getPokemonTypeDisplay = (type: PokemonType) => {
  return pokemonTypes.find(
    (item) => item.name.toLowerCase() === type.toLowerCase()
  )?.display;
};
