import { Chip } from "@mui/material";
import React from "react";
import pokemonTheme, { PokemonType } from "theme";

interface PokemonTypeChipProps {
  type: PokemonType;
}

const PokemonTypeChip = ({ type }: PokemonTypeChipProps) => {
  const pokemonType = pokemonTheme.find((item) => item.name === type);

  if (!pokemonType) {
    return null;
  }

  return (
    <Chip
      label={pokemonType.display}
      sx={{ backgroundColor: pokemonType.primaryColor }}
    />
  );
};

export default PokemonTypeChip;
