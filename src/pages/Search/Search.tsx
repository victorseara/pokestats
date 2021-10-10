import { Box, Container, Divider, Stack } from "@mui/material";
import SearchDisplay from "components/SearchDisplay/SearchDisplay";
import SearchForm from "components/SearchForm/SearchForm";
import usePokemon from "hooks/usePokemon";
import React from "react";
import { RouteComponentProps } from "react-router";

const SearchResult = ({ location }: RouteComponentProps) => {
  const query = location.pathname.replace("/", "");
  const { data } = usePokemon(query);

  return (
    <Box height="100%">
      <Stack spacing={5} pt={4}>
        <Container>
          <SearchForm variant="inline" initialPokemonName={query} />
        </Container>
        <Divider />
      </Stack>
      <Box display="flex" height="100%" py={8}>
        <Container>{data && <SearchDisplay pokemon={data} />}</Container>
      </Box>
    </Box>
  );
};

export default SearchResult;
