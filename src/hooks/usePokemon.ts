import Pokemon from "api/pokemon";
import PokemonRepository from "api/repository";
import useAsync from "./useAsync";

function queryPokemonByName(pokemonName: string) {
  if (!pokemonName) {
    return null;
  }
  return PokemonRepository.fetchPokemonByName(pokemonName)
    .then((response) => {
      const stats = response.stats.map((item) => ({
        name: item.stat.name,
        value: item.base_stat < 100 ? item.base_stat : 100,
      }));

      const types = response.types.map((item) => item.type.name);

      const pokemon: Pokemon = {
        name: response.name,
        image: response.sprites.other["official-artwork"].front_default,
        stats,
        types,
      };

      return pokemon;
    })
    .catch(() => {
      throw new Error(`Não econtramos um pokemon chamado ${pokemonName}`);
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
