import { SearchOutlined } from "@mui/icons-material";
import {
  Button,
  OutlinedInput,
  Stack,
  styled,
  svgIconClasses,
} from "@mui/material";
import Brand from "components/Brand/Brand";
import React, { FormEvent } from "react";
import { useHistory } from "react-router";

interface SearchFormProps {
  initialPokemonName?: string;
}

const SearchForm = ({ initialPokemonName = "" }: SearchFormProps) => {
  const history = useHistory();
  const [pokemonName, setPokemonName] = React.useState(initialPokemonName);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push(pokemonName);
  };

  const randomize = () => {
    const max = 898;
    const min = 1;
    const pokemonId = getRandomInt(min, max);
    history.push(pokemonId.toString());
  };

  return (
    <Stack width="100%" alignItems="center" spacing={2}>
      <Brand />
      <Stack spacing={5} width="100%" component="form" onSubmit={onSubmit}>
        <StyledInput
          name="pokemonName"
          value={pokemonName}
          onChange={onChange}
          size="small"
          startAdornment={<SearchOutlined />}
          sx={{ maxHeight: "44px" }}
          fullWidth
        />
        <Stack direction="row" spacing={5} justifyContent="center">
          <Button type="submit">Search Pokemon</Button>
          <Button onClick={randomize}>Randomize</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: 24,
  paddingLeft: 12,
  paddingRight: 24,

  [`& > .${svgIconClasses.root}`]: {
    color: theme.palette.grey[500],
  },
}));

export default SearchForm;
