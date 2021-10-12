import { ChangeCircle } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import notFound from "assets/img/notfound.png";
import Img from "react-cool-img";
import { FallbackProps } from "react-error-boundary";
import { useHistory } from "react-router";

const PokemonFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const history = useHistory();

  const randomize = () => {
    const max = 898;
    const min = 1;
    const pokemonId = getRandomInt(min, max);
    history.push(pokemonId.toString());
  };

  return (
    <Stack height="100%" spacing={2} alignItems="center" py={4}>
      <Img alt="not found" src={notFound} height={300} />
      <Typography variant="h6">{error.message}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={resetErrorBoundary}>
          Retry
        </Button>
        <Button
          variant="outlined"
          onClick={randomize}
          startIcon={<ChangeCircle />}
        >
          Random
        </Button>
      </Stack>
    </Stack>
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default PokemonFallback;
