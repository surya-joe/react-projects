import axios from "axios";

const TODO_URL = 'http://localhost:3001/todo'

// getAllTodos
export const getAllTodos = async () => {
    return axios.get(TODO_URL)
}

// add todo
export const addTodo = async (todo) => {
    return await axios.post(TODO_URL, todo)
}

// delete todo
export const deleteTodo = async (id) => {
    return await axios.delete(`${TODO_URL}/${id}`)
}