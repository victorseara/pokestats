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
  variant?: "inline" | "block";
  initialPokemonName?: string;
}

const SearchForm = ({
  variant = "block",
  initialPokemonName = "",
}: SearchFormProps) => {
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

  if (variant === "inline") {
    return (
      <VariantInline
        value={pokemonName}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <VariantBlock
      value={pokemonName}
      onChange={onChange}
      onSubmit={onSubmit}
      randomize={randomize}
    />
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface VariantProps {
  onSubmit: (e: FormEvent) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  randomize?: () => void;
}

const VariantBlock = ({
  onSubmit,
  onChange,
  value,
  randomize,
}: VariantProps) => {
  return (
    <Stack width="100%" alignItems="center" spacing={2}>
      <Brand />
      <Stack spacing={5} width="100%" component="form" onSubmit={onSubmit}>
        <StyledInput
          name="pokemonName"
          value={value}
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

const VariantInline = ({ onSubmit, value, onChange }: VariantProps) => {
  return (
    <Stack
      component="form"
      onSubmit={onSubmit}
      direction="row"
      alignItems="center"
      spacing={4}
    >
      <Brand fontSize="3vmin" />
      <StyledInput
        name="pokemonName"
        value={value}
        onChange={onChange}
        size="small"
        endAdornment={<SearchOutlined />}
        fullWidth
        sx={{ maxHeight: "44px" }}
      />
    </Stack>
  );
};

const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: 24,
  paddingLeft: 12,
  paddingRight: 24,

  [`& > .${svgIconClasses.root}`]: {
    color: theme.palette.grey[500],
  },
}));

export default SearchForm;
