import usePokemon from "hooks/usePokemon";
import PokemonDisplay from "../PokemonDisplay/PokemonDisplay/PokemonDisplay";

interface PokemonSearchProps {
  pokemonName: string;
}

const PokemonSearch = ({ pokemonName }: PokemonSearchProps) => {
  const { data: pokemon, status, error } = usePokemon(pokemonName);

  if (error) {
    throw error;
  }

  if (status === "pending" || !pokemon) {
    return <div>Loading fallback</div>;
  }

  return <PokemonDisplay pokemon={pokemon} />;
};

export default PokemonSearch;
