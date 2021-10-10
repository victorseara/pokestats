import PageLayout from "components/PageLayout/PageLayout";
import React from "react";
import { RouteComponentProps } from "react-router";
import PokemonSearch from "./components/PokemonSearch/PokemonSearch";

const SearchResult = ({ location }: RouteComponentProps) => {
  const query = location.pathname.replace("/", "");

  return (
    <PageLayout>
      <PokemonSearch pokemonName={query} />
    </PageLayout>
  );
};

export default SearchResult;
