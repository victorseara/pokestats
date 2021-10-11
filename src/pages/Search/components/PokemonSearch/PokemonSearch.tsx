import { Box, CircularProgress } from "@mui/material";
import usePokemon from "hooks/usePokemon";
import React from "react";
import { useThemeProvider } from "theme/ThemeProvider";
import PokemonDisplay from "../PokemonDisplay/PokemonDisplay/PokemonDisplay";

interface PokemonSearchProps {
  pokemonName: string;
}

const PokemonSearch = ({ pokemonName }: PokemonSearchProps) => {
  const { data: pokemon, status, error } = usePokemon(pokemonName);
  const { changeColors } = useThemeProvider();

  React.useEffect(() => {
    if (status === "resolved" && pokemon) {
      const type = pokemon.types[0];

      changeColors(type);
    }
  }, [changeColors, pokemon, status]);

  if (error) {
    throw error;
  }

  if (status === "pending" || !pokemon) {
    return (
      <Box
        display="flex"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  return <PokemonDisplay pokemon={pokemon} />;
};

export default PokemonSearch;
