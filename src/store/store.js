import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todosApi } from './apis'
import { counterSlice } from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer, //Apuntamos al reducer
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware) //middelware es una función que se ejecuta antes que otra
})
