import Loader from "components/Loader/Loader";
import PageLayout from "components/PageLayout/PageLayout";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RouteComponentProps } from "react-router";
import PokemonSearch from "./components/PokemonSearch/PokemonSearch";

const PokemonFallback = React.lazy(
  () => import("components/PokemonFallback/PokemonFallback")
);

const SearchResult = ({ location }: RouteComponentProps) => {
  const query = location.pathname.replace("/", "");

  return (
    <PageLayout>
      <Suspense fallback={Loader}>
        <ErrorBoundary FallbackComponent={PokemonFallback} resetKeys={[query]}>
          <PokemonSearch pokemonName={query} />
        </ErrorBoundary>
      </Suspense>
    </PageLayout>
  );
};

export default SearchResult;
