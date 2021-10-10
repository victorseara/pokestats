import { SearchOutlined } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import Brand from "components/Brand/Brand";
import SearchInput from "components/SearchInput/SearchInput";
import React, { FormEvent } from "react";
import { useHistory, useLocation } from "react-router";

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const initialPokemonName = pathname.replace("/", "");

  const [pokemonName, setPokemonName] = React.useState(initialPokemonName);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push(pokemonName);
  };

  return (
    <Container>
      <Stack
        component="form"
        onSubmit={onSubmit}
        direction="row"
        alignItems="center"
        spacing={4}
      >
        <Brand fontSize="3vmin" />
        <SearchInput
          name="pokemonName"
          size="small"
          endAdornment={<SearchOutlined />}
          value={pokemonName}
          onChange={onChange}
          fullWidth
          sx={{ maxHeight: "44px" }}
        />
      </Stack>
    </Container>
  );
};

export default Header;
