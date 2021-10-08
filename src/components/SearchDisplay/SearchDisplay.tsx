import { Box, Stack, Typography } from "@mui/material";
import Pokemon from "api/pokemon";
import StatDisplay from "components/StatDisplay/StatDisplay";
import Img from "react-cool-img";

interface SearchDisplayProps {
  pokemon: Pokemon | null;
  error: string | null;
}

const SearchDisplay = ({ pokemon, error }: SearchDisplayProps) => {
  if (error) {
    return <Box>{error}</Box>;
  }

  if (!pokemon) {
    return null;
  }

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h2" component="h1" fontWeight="fontWeightBold">
          {pokemon.name}
        </Typography>
      </Box>
      <Stack direction="row" spacing={2} sx={{ height: "100%" }}>
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
          p={4}
        >
          <Box>
            <Img width="100%" src={pokemon.image} alt={pokemon.name} />
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default SearchDisplay;
