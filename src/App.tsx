import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Routes from "routes";

/* interface PokemonFormProps {
  onSubmit: (name: string) => void;
}

function PokemonForm({ onSubmit }: PokemonFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as EventTarget & { pokemonName: { value: string } };
    onSubmit(target.pokemonName.value);
  };

  return (
    <FormContainer component="form" onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        name="pokemonName"
        size="small"
        placeholder="Search for a pokemon (ex: pikachu)"
        label="Pokemon Name"
        fullWidth
      />
      <Button variant="contained" type="submit">
        <SearchOutlined titleAccess="search-button" />
      </Button>
    </FormContainer>
  );
}

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  "& > div": {
    marginRight: theme.spacing(2),
  },
}));

interface PokemonDataViewProps {
  pokemon: Pokemon | null;
}

function PokemonDataView({ pokemon }: PokemonDataViewProps) {
  if (!pokemon) {
    return null;
  }

  return (
    <Box>
      <Box>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={{ maxWidth: "100%", maxHeight: "375px" }}
        />
      </Box>
    </Box>
  );
}

interface PokemonInfoProps {
  pokemonName: string;
}

interface PokemonInfoState {
  status: "idle" | "pending" | "rejected" | "resolved";
  data: Pokemon | null;
  error: string | null;
}
function PokemonInfo({ pokemonName }: PokemonInfoProps) {
  const initialState: PokemonInfoState = {
    status: "idle",
    data: null,
    error: null,
  };
  const [state, setState] = React.useState<PokemonInfoState>(initialState);

  React.useEffect(() => {
    if (!pokemonName) {
      return;
    }

    setState((prev) => ({ ...prev, status: "pending" }));
    const promise = queryPokemonByName(pokemonName);

    promise
      .then((data) =>
        setTimeout(() => {
          setState((prev) => ({ ...prev, status: "resolved", data }));
        }, 4000)
      )
      .catch((error) =>
        setState((prev) => ({
          ...prev,
          status: "rejected",
          error: error.message,
        }))
      );
  }, [pokemonName]);

  const { data, error, status } = state;

  if (status === "pending") {
    return (
      <Box>
        Loading <CircularProgress size={24} />
      </Box>
    );
  }

  if (status === "rejected") {
    return <Box>{error}</Box>;
  }

  return <PokemonDataView pokemon={data} />;
}

function Main() {
  const [pokemonName, setPokemonName] = React.useState("");

  const onSubmit = (name: string) => {
    setPokemonName(name);
  };

  return (
    <>
      <CssBaseline />
      <AppContainer>
        <Box width="60%">
          <PokemonForm onSubmit={onSubmit} />
          <PokemonInfo pokemonName={pokemonName} />
        </Box>
      </AppContainer>
    </>
  );
} */

const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

function App() {
  return (
    <AppContainer>
      <CssBaseline />
      <Routes />
    </AppContainer>
  );
}

export default App;
