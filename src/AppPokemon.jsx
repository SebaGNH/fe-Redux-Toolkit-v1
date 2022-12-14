import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { startLoadingPokemons, setPokemons, getPokemons } from './store/slices/pokemon'

const AppPokemon = () => {
  //Son del use Counter
  //const counter = useSelector((state) => state.counter.value)
  //const dispatch = useDispatch();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  

  return (
    <div className='container'>

    Pokemon

    </div>
  )
}

export default AppPokemon