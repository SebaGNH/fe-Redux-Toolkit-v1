import { useSelector, useDispatch } from 'react-redux'
import { startLoadingPokemons, setPokemons } from './store/slices/pokemon'

const AppPokemon = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='container'>

    Pokemon

    </div>
  )
}

export default AppPokemon