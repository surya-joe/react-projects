import React,{useState, useEffect} from 'react'
import { addTodo, deleteTodo, getAllTodos } from '../Service/todoApi'
import { FaEdit } from "react-icons/fa";
import { RxCheckCircled } from "react-icons/rx";

import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import '../style.css'

const initialState = {
  task: '',
  completed: false 
}

export const TodoHome = () => {
  const [todos, setTodos] = useState([])

  const [todo, setTodo] = useState(initialState)
  const { task } = todo

  const getTodos = async () => {
    const response = await getAllTodos()
    console.log(response.data)
    setTodos(response.data)
  }
  useEffect(
    () => {
      getTodos()
    }, []
  )

  const handleChange = (e) => {
    const onChangeValue = e.target.value
    setTodo(
      {
        ...todo,
        [e.target.name] : onChangeValue 
      }
    )
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await addTodo(todo)
    await getTodos()
    setTodo(initialState)
  }

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id)
    await getTodos()
  }

  const handleStrikeTodo = (id) => {
    const strikeTodo = todos.map(
      todo => {
        return (
          todo.id === id 
          ? {
              ...todo, 
              completed: !todo.completed 
            } 
          : {...todo})
      }
    )
    setTodos(strikeTodo)
  }

  return (
    <div id='todo'>
        <h2>React + Json-Server Todo</h2>
        <form onSubmit={handleSubmit}>
          <input 
            placeholder='Add todo'
            name='task'
            value = {task}
            onChange={ handleChange }
            required
          />
          <button>Add</button>
        </form>
        <div id='todoList'>
          {
            todos.map(
              (todo, i) => (
                <div className='todoItem' id={todo.completed ? 'strike' : ""} key={i}>
                  <p>{i+1}, {todo.task} </p>
                  <div className='editIcons'>
                    <MdDeleteForever onClick={ () => handleDeleteTodo(todo.id) } />
                    <AiOutlineCheckSquare onClick={() => handleStrikeTodo(todo.id)}/>
                  </div>
                </div>
              )
            )
          }
        </div>
        
    </div>
  )
}
