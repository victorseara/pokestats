import Pokemon from "api/pokemon";
import PokemonRepository from "api/repository";
import useAsync from "./useAsync";

const statIcon = {
  hp: "❤️",
  attack: "🥊",
  defense: "🙅",
  "special-attack": "⚔️",
  "special-defense": "🛡️",
  speed: "💨",
};

function queryPokemonByName(pokemonName: string) {
  return PokemonRepository.fetchPokemonByName(pokemonName).then((response) => {
    const stats = response.stats.map((item) => ({
      name: item.stat.name,
      value: item.base_stat,
      description: `${statIcon[item.stat.name]} ${item.stat.name}`,
    }));

    const types = response.types.map((item) => item.type.name);

    const overall =
      stats.reduce((acc, curr) => (acc += curr.value), 0) / stats.length;

    const pokemon: Pokemon = {
      name: response.name,
      image: response.sprites.other["official-artwork"].front_default,
      stats,
      types,
      overall,
    };

    return pokemon;
  });
}

function usePokemon(pokemonName: string) {
  const state = useAsync<Pokemon>(
    () => queryPokemonByName(pokemonName),
    { status: pokemonName ? "pending" : "idle" },
    [pokemonName]
  );

  return state;
}

export default usePokemon;
