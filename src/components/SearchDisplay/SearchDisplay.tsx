import { Box, Stack, Typography } from "@mui/material";
import Pokemon from "api/pokemon";
import loadingImg from "assets/img/loading.gif";
import PokemonTypeChip from "components/PokemonTypeChip/PokemonTypeChip";
import StatDisplay from "components/StatDisplay/StatDisplay";
import Img from "react-cool-img";

interface SearchDisplayProps {
  pokemon: Pokemon;
}

const SearchDisplay = ({ pokemon }: SearchDisplayProps) => {
  const overall =
    pokemon.stats.reduce((acc, curr) => (acc += curr.value), 0) /
    pokemon.stats.length;

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h2"
            color="primary"
            component="h1"
            fontWeight="fontWeightBold"
          >
            {pokemon.name}
          </Typography>
          <Stack alignItems="center" spacing={-1}>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              fontWeight="fontWeightBold"
            >
              {overall.toPrecision(4)}
            </Typography>
            <Typography variant="overline">Overall</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={4} sx={{ height: "100%" }}>
        <Box width="60%">
          <Stack spacing={2}>
            {pokemon.stats.map((item) => (
              <StatDisplay
                key={JSON.stringify(item)}
                name={item.name}
                value={item.value}
              />
            ))}
          </Stack>
        </Box>
        <Box
          width="40%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box>
            <Img
              src={pokemon.image}
              alt={pokemon.name}
              style={{ marginLeft: "300px" }}
              placeholder={loadingImg}
            />
          </Box>
          <Stack
            direction="row"
            spacing={1}
            alignSelf="flex-end"
            position="absolute"
            right={0}
            bottom={0}
          >
            {pokemon.types.map((item) => (
              <PokemonTypeChip type={item} key={item} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SearchDisplay;
