import React,{useState} from 'react'
import { useGetTodosQuery, useGetTodoQuery } from './store/apis'


const AppTodo = () => {

  const [idTodo, setidTodo] = useState(1)



  const getAlgo =  useGetTodosQuery();
  //const {data, isLoading} =  useGetTodosQuery();
  //console.log(getAlgo)

  //Renombramos data e inicializamos con un arreglo vacío
  const {data: todos = [], isLoading} = getAlgo;
  //console.log(data)


  const getTodoId =  useGetTodoQuery(idTodo);
  //console.log(getTodoId)



  return (
    <div className='container'>
      <div className="row mt-3">
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading {!getAlgo.isLoading? "true" : "false" }</h4>
        <pre>{JSON.stringify(getTodoId)}</pre>

        {
          getTodoId.isLoading? null:
          <code>{getTodoId.data.title}</code>
        }


        <button 
          className='btn btn-secondary col-2'
          onClick={ () => setidTodo( idTodo -1) }
          >Previous Todo</button>

        <button 
          className='btn btn-primary col-2'
          onClick={ () => setidTodo( idTodo +1) }
          >Next Todo</button>

        <ul>
          {
            isLoading? null :             
            todos.map( todo => (
              <li key={ todo.id } >
                <strong>{ todo.completed ? 'DONE - ':'PENDING - ' }</strong>
                { todo.title }
              </li>
            ))
          }
        </ul>


      </div>
    </div>
  )
}

export default AppTodo