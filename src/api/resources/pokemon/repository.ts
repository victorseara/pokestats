import PokemonAPI from "api/config";
import { GetPokemonResponse } from "api/resources/pokemon/payloads";
import axios, { AxiosError } from "axios";

const POKEMON_URL = `${PokemonAPI.baseUrl}/pokemon`;

class PokemonRepository {
  static async fetchPokemonByName(name: string): Promise<GetPokemonResponse> {
    return axios
      .get<GetPokemonResponse>(`${POKEMON_URL}/${name.toLowerCase()}`)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) {
          error.message = `404: There is no Pokemon called ${name}`;
          throw error;
        }

        throw error;
      });
  }
}

export { POKEMON_URL, PokemonRepository };
