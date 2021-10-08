import axios from "axios";
import { PokemonType } from "theme";
import PokemonAPI from ".";

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
        name: string;
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
      .get<FetchPokemonByNameResponse>(`${BASE_URL}/${name}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default PokemonRepository;
