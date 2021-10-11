import { Chip } from "@mui/material";
import pokemonTheme, { PokemonType } from "pokemonTypeColors";
import React from "react";

interface PokemonTypeChipProps {
  type: PokemonType;
}

const PokemonTypeChip = ({ type }: PokemonTypeChipProps) => {
  const pokemonType = pokemonTheme.find((item) => item.name === type);

  if (!pokemonType) {
    return null;
  }

  return <Chip label={pokemonType.display} color="primary" />;
};

export default PokemonTypeChip;
