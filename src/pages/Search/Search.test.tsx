import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { GetPokemonResponse, PokemonRepository } from "api";
import { MemoryRouter, Route } from "react-router";
import fakePokemon from "testUtils/seeds/pokemon.json";
import Search from "./Search";

describe("Search Page", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("should search for a pokemon and show the results properly", async () => {
    PokemonRepository.fetchPokemonByName = jest.fn(() =>
      Promise.resolve(fakePokemon as GetPokemonResponse)
    );

    render(
      <MemoryRouter initialEntries={[`/${fakePokemon.name}`]}>
        <Route component={Search} />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("circular-progress")
    );

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText(fakePokemon.name)).toBeVisible();
    expect(screen.getByRole("img", { name: fakePokemon.name })).toBeVisible();

    fakePokemon.stats.forEach((item) => {
      expect(
        screen.getByRole("progressbar", { name: item.stat.name })
      ).toHaveAttribute("aria-valuenow", item.base_stat.toString());
    });
  });

  it("should display an error message when a pokemon was not founded", async () => {
    console.error = jest.fn();
    const error = new Error(`404: There is no Pokemon called dog`);

    PokemonRepository.fetchPokemonByName = jest.fn(() => Promise.reject(error));

    render(
      <MemoryRouter initialEntries={[`/${fakePokemon.name}`]}>
        <Route component={Search} />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByTestId("circular-progress")
    );

    await waitFor(() => expect(screen.getByText(error.message)).toBeVisible());
  });
});
