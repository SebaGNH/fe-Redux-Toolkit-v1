import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/slices/counter/counterSlice'


const App = () => {

  //const counter = useSelector((state) => state.counter.value)
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <> 
    <header>
      <h1>Counter {counter}</h1>
    </header>
    <main>

      <button 
        className="btn btn-primary me-3"
        onClick={() => dispatch(increment())}
        >sumar
      </button>
      <button 
        className="btn btn-info"
        onClick={() => dispatch(decrement())}
        >restar
      </button>
    </main>
    
    </>
  )
}

export default App