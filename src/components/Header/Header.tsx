import { Brightness5, SearchOutlined } from "@mui/icons-material";
import { Container, IconButton, Stack } from "@mui/material";
import Brand from "components/Brand/Brand";
import SearchInput from "components/SearchInput/SearchInput";
import React, { FormEvent } from "react";
import { useHistory, useLocation } from "react-router";
import { useThemeProvider } from "theme/ThemeProvider";

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const query = pathname.replace("/", "");
  const { toggleColorMode } = useThemeProvider();

  const [pokemonName, setPokemonName] = React.useState(query);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    history.push(pokemonName);
  };

  React.useEffect(() => {
    if (pokemonName !== query) {
      setPokemonName(query);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <Container>
      <Stack
        component="form"
        onSubmit={onSubmit}
        direction="row"
        alignItems="center"
        spacing={4}
      >
        <Brand fontSize="4vmin" />
        <SearchInput
          name="pokemonName"
          size="small"
          endAdornment={<SearchOutlined />}
          value={pokemonName}
          onChange={onChange}
          fullWidth
          sx={{ maxHeight: "44px" }}
        />
        <IconButton title="Change theme" onClick={toggleColorMode}>
          <Brightness5 />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Header;
