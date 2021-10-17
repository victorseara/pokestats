import { POKEMON_URL } from "api";
import { rest } from "msw";
import fakePokemon from "testUtils/seeds/pokemon.json";

const handler = [
  rest.get(`${POKEMON_URL}/:query`, (req, res, ctx) => {
    const name = req.params.query;

    const pokemon = { ...fakePokemon, name: decodeURI(name) };

    return res(ctx.status(200), ctx.json(pokemon));
  }),
];

export default handler;
