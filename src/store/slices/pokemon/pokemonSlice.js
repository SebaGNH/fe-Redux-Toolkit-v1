import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState : {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: { //estos son los llamados reducers
    startLoadingPokemons: (state) => { //Acciones
      state.isLoading = true  //Mutamos el state
    },
    setPokemons: (state, action) => {
      console.log(action);//puede ser un objeto o un valor
    }
  },
})


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions

