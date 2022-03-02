import axios from "axios";
import { useQuery } from "react-query";


const fetchPokemon = (pokemon:string) => {
  axios
    .post(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function (response) {
      console.log('response axios');
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

const usePokemon = (pokemon: string) =>
  useQuery("pokemon", () => fetchPokemon(pokemon), {
    refetchOnWindowFocus: false,
  });

export { usePokemon };

