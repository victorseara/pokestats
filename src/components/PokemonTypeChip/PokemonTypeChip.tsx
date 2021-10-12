import { Chip, useTheme } from "@mui/material";
import { PokemonType } from "api";
import colors from "theme/theme";
import { getPokemonTypeDisplay } from "./pokemonTypes";

interface PokemonTypeChipProps {
  type: PokemonType;
}

const PokemonTypeChip = ({ type }: PokemonTypeChipProps) => {
  const theme = useTheme();
  const color = colors[type];
  const pokemonType = getPokemonTypeDisplay(type);

  return (
    <Chip
      label={pokemonType || type}
      sx={{
        backgroundColor: color ? color.primary.main : "primary",
        color: color
          ? theme.palette.getContrastText(color.primary.main)
          : "textPrimary",
      }}
    />
  );
};

export default PokemonTypeChip;
