import { ChangeCircle } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Pokemon from "api/pokemon";
import notFound from "assets/img/notfound.png";
import PokemonTypeChip from "components/PokemonTypeChip/PokemonTypeChip";
import StatDisplay from "components/StatDisplay/StatDisplay";
import Img from "react-cool-img";
import { useHistory } from "react-router";

interface PokemonDisplayProps {
  pokemon: Pokemon;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const PokemonDisplay = ({ pokemon }: PokemonDisplayProps) => {
  const history = useHistory();

  const randomize = () => {
    const max = 898;
    const min = 1;
    const pokemonId = getRandomInt(min, max);
    history.push(pokemonId.toString());
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      pb={{ xs: 4, md: 0 }}
    >
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
        alignItems="center"
        justifyContent="center"
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
        <Box position="absolute" top={0} left={0}>
          <IconButton title="Get a random pokemon" onClick={randomize}>
            <ChangeCircle />
          </IconButton>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={{ xs: 8 }}
        >
          <Img
            src={pokemon.image}
            alt={pokemon.name}
            height={400}
            placeholder={notFound}
            error={notFound}
          />
        </Box>
        <Stack
          direction="row"
          spacing={1}
          position="absolute"
          bottom={24}
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

export default PokemonDisplay;
