import PokemonRepository from "./api/repository";

function queryPokemonByName(name: string) {
  return PokemonRepository.fetchPokemonByName(name)
    .then((response) => response)
    .catch(() => {
      throw new Error(`Não foi possivel encontrar um pokemon chamado ${name}`);
    });
}

export { queryPokemonByName };
