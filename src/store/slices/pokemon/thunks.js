import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // realizar petición http
    //dispatch(setPokemons());
  }
}

//https://pokeapi.co/api/v2/pokemon?offset=0&limit=10