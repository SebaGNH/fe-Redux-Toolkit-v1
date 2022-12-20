import { pokemonAPI } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // realizar petición http
    //Data Pokemons
    //dispatch(setPokemons());
    

    //fetch
    //const resp = await fetch (`https://pokeapi.co/api/v2/pokemon?offset=${page*10}&limit=10`);
    //const data = await resp.json();
    //console.log(data)

    //const data = await pokemonAPI.get(`/pokemon?offset=${page*10}&limit=10`);
    const {data} = await pokemonAPI.get(`/pokemon?offset=${page*9}&limit=9`);
    console.log(data.results)


    dispatch(setPokemons({pokemons: data.results, page: page+1}));
  }
}

//https://pokeapi.co/api/v2/pokemon?offset=0&limit=10

///import axios from 'axios';
//const resultado = await axios.get(urlAPI);