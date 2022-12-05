import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount } from './store/slices/counter/counterSlice'


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
        className="btn btn-info me-3"
        onClick={() => dispatch(decrement())}
        >restar
      </button>

      <button 
        className="btn btn-success me-3"
        onClick={() => dispatch(incrementByAmount(2))}
        >+ 2
      </button>
      
      <button 
        className="btn btn-success me-3"
        onClick={() => dispatch(decrementByAmount(2))}
        >- 2
      </button>
    </main>
    
    </>
  )
}

export default App