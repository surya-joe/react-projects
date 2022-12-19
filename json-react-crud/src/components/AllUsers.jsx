import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteUser, getAllUsers } from '../service/api'

export const AllUsers = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () =>{
       const response = await getAllUsers()
       console.log(response.data)
       setUsers(response.data)
    }

    useEffect(
        () => {
           getUsers()
        },[]
    )

    const handleDelete = async (id) => {
        await deleteUser(id)
        getUsers()
    }

  return (
    <div id='table'>
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>UserName</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(
                        (user,i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`}>
                                        <button className='editBtn'>Edit</button>
                                    </Link>
                                    <button className='deleteBtn' onClick={ () => handleDelete(user.id) }>Delete</button>
                                </td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
