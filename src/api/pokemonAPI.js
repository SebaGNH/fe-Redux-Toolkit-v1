import axios from 'axios';

//create me permite crear una instancia para no tener que repetir código
export const pokemonAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
});
