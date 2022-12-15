import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { startLoadingPokemons, setPokemons, getPokemons } from './store/slices/pokemon'

const AppPokemon = () => {
  //Son del use Counter
  //const counter = useSelector((state) => state.counter.value)
  //const dispatch = useDispatch();

  


  const dispatch = useDispatch();
  const {page,isLoading,pokemons} = useSelector((state) => state.pokemons);
  //console.log(page)
  useEffect(() => {
    dispatch(getPokemons())
    
  }, [])
  

  return (
    <div className='container'>

      <h1>Pokemon</h1>

      <span>Loading: {!isLoading? "true" : "false" }</span>

      <ul>
        {
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
      <button
        className='btn btn-success'
        disabled={isLoading}
        onClick={()=> dispatch(getPokemons(page))}
      >Next</button>

    </div>
  )
}

export default AppPokemon