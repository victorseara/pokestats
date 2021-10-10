import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PokemonTypeChip from "components/PokemonTypeChip/PokemonTypeChip";
import StatDisplay from "components/StatDisplay/StatDisplay";
import usePokemon from "hooks/usePokemon";
import React from "react";
import Img from "react-cool-img";

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

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={4} pb={4}>
      <Stack width="100%" spacing={2} order={{ xs: 2, md: 1 }}>
        <Box>
          <Typography color="primary" fontWeight="fontWeightBold" variant="h4">
            {pokemon.name}
          </Typography>
        </Box>
        <Stack spacing={3}>
          {pokemon.stats.map((item) => (
            <StatDisplay
              key={item.name}
              name={item.description}
              value={item.value}
            />
          ))}
        </Stack>
      </Stack>
      <Stack
        width="100%"
        position="relative"
        order={{ xs: 1, md: 2 }}
        justifyContent="baseline"
      >
        <Stack alignItems="center" position="absolute" top={0} right={0}>
          <Typography
            color="primary"
            fontWeight="fontWeightBold"
            variant="h2"
            component="h5"
          >
            {pokemon.overall.toFixed(2)}
          </Typography>
          <Typography variant="overline">Overall</Typography>
        </Stack>
        <Box display="flex" alignSelf="center" alignItems="center">
          <Img src={pokemon.image} alt={pokemon.name} height="100%" />
        </Box>
        <Stack
          direction="row"
          spacing={1}
          position="absolute"
          bottom={0}
          right={0}
        >
          {pokemon.types.map((item) => (
            <PokemonTypeChip type={item} key={item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PokemonSearch;
