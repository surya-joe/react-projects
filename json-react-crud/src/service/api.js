import axios from 'axios'

const URL = 'http://localhost:3001/user'

// get all users
export const getAllUsers = async () => {
    return await axios.get(URL);
}

// add user
export const addUser = async (user) => {
    return await axios.post(URL, user)
}

// delete user
export const deleteUser = async (id) => {
    return axios.delete(`${URL}/${id}`)
}

// update user( get-user + update )
export const getUser = async (id) => {
    return await axios.get(`${URL}/${id}`)
}

export const updateUser = async (id, user) => {
    return await axios.put(`${URL}/${id}`,user);
}