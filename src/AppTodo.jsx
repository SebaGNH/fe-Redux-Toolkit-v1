import React from 'react'
import { useGetTodosQuery } from './store/apis'


const AppTodo = () => {

  const getAlgo =  useGetTodosQuery();
  //const {data, isLoading} =  useGetTodosQuery();
  console.log(getAlgo)

  return (
    <div className='container'>
      <div className="row mt-3">
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading {!getAlgo.isLoading? "true" : "false" }</h4>
        <pre>
          


        </pre>

        <ul>
          {
            getAlgo.data.map( todo => (
              <li key={todo.id}>
                <strong>{todo.completed ? 'DONE - ':'PENDING - '}</strong>{todo.title}
              </li>
            ))
          }
        </ul>


        <button className='btn btn-primary col-2'>Next Todo</button>
      </div>
    </div>
  )
}

export default AppTodo