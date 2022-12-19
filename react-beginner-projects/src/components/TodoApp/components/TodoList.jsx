import React from 'react'
import { deleteTodo} from '../Service/todoApi';
import { getTodos } from './TodoHome'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({todoList, getTodos} ) => {

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id)
    await getTodos()
  }

  return (
    <div>
       {
        todoList.map(
          (todo, i) => (
            <div className='todoItem'>
              <p key={i}>{i+1}, {todo.task}</p>
              <div className='editIcons'>
                <MdDeleteForever onClick={ () => handleDeleteTodo(todo.id) } />
                <FaEdit />
              </div>
            </div>
          )
        )
       }
    </div>
  )
}
