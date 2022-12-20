import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Pokemon } from './components/Pokemon';
import { startLoadingPokemons, setPokemons, getPokemons } from './store/slices/pokemon'


const AppPokemon = () => {
  //Son del use Counter
  //const counter = useSelector((state) => state.counter.value)
  //const dispatch = useDispatch();

  


  const dispatch = useDispatch();
  const {page,isLoading,pokemons} = useSelector((state) => state.pokemons);
  console.log(page)
  useEffect(() => {
    dispatch(getPokemons())
    
  }, [])
  

  return (
    <div className='container'>
      <div className="row">
      <h1>Pokemon</h1>

      <span>Loading: {!isLoading? "true" : "false" }</span>

      <div className="d-flex justify-content-arround flex-wrap">

        {
          pokemons.map((pokemon) => (
            <Pokemon key={pokemon.name} pokemon={pokemon}/>
          ))
        }
      </div>

      <button
        className='btn btn-success'
        disabled={isLoading}
        onClick={()=> dispatch(getPokemons(page))}
      >Next</button>

    </div>
    </div>
  )
}

export default AppPokemon