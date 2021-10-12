import axios, { AxiosError } from "axios";
import { PokemonType } from "pokemonTypeColors";
import PokemonAPI from ".";
import { StatName } from "./pokemon";

const BASE_URL = `${PokemonAPI.baseUrl}/pokemon`;

interface FetchPokemonByNameResponse {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: [
    {
      base_stat: number;
      stat: {
        name: StatName;
      };
    }
  ];
  types: [
    {
      type: {
        name: PokemonType;
      };
    }
  ];
}

class PokemonRepository {
  static async fetchPokemonByName(
    name: string
  ): Promise<FetchPokemonByNameResponse> {
    return axios
      .get<FetchPokemonByNameResponse>(`${BASE_URL}/${name.toLowerCase()}`)
      .then((response) => response.data)
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) {
          error.message = `There is no Pokemon called ${name}`;
          throw error;
        }

        throw error;
      });
  }
}

export default PokemonRepository;
