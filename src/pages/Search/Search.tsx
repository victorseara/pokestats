import { Box, Container, Divider, LinearProgress, Stack } from "@mui/material";
import Pokemon from "api/pokemon";
import PokemonRepository from "api/repository";
import SearchDisplay from "components/SearchDisplay/SearchDisplay";
import SearchForm from "components/SearchForm/SearchForm";
import useAsync from "hooks/useAsync";
import React from "react";
import { RouteComponentProps } from "react-router";
/* import response from "testUtils/data/fetchPokemonByName.json"; */

function queryPokemonByName(name: string): Promise<Pokemon> {
  /*   const stats = response.stats.map((item) => ({
    name: item.stat.name,
    value: item.base_stat < 100 ? item.base_stat : 100,
  }));

  const pokemon: Pokemon = {
    name: response.name,
    image: response.sprites.other["official-artwork"].front_default,
    stats,
  };

  return Promise.resolve(pokemon); */
  return PokemonRepository.fetchPokemonByName(name)
    .then((response) => {
      const stats = response.stats.map((item) => ({
        name: item.stat.name,
        value: item.base_stat < 100 ? item.base_stat : 100,
      }));

      const types = response.types.map((item) => item.type.name);

      const pokemon: Pokemon = {
        name: response.name,
        image: response.sprites.other["official-artwork"].front_default,
        stats,
        types,
      };

      return pokemon;
    })
    .catch(() => {
      throw new Error(`Não foi possivel encontrar um pokemon chamado ${name}`);
    });
}

const SearchResult = ({ location }: RouteComponentProps) => {
  const query = location.pathname.replace("/", "");

  const { data, status, error } = useAsync<Pokemon>(
    () => {
      if (!query) {
        return null;
      }
      return queryPokemonByName(query);
    },
    { status: query ? "pending" : "idle" },
    query
  );

  return (
    <Box height="100%">
      <LinearProgress
        sx={{ visibility: status === "pending" ? "visible" : "hidden" }}
      />
      <Stack spacing={5} pt={4}>
        <Container>
          <SearchForm variant="inline" initialPokemonName={query} />
        </Container>
        <Divider />
      </Stack>
      <Box display="flex" height="100%" py={8}>
        <Container>
          <SearchDisplay pokemon={data} error={error} />
        </Container>
      </Box>
    </Box>
  );
};

export default SearchResult;
