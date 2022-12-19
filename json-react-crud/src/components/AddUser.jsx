import React, { useState } from 'react'
import { addUser } from '../service/api'
import { useNavigate } from 'react-router-dom';

const initialState = {
    name : '',
    username: '',
    email: '',
    phone: '',
} 

export const AddUser = () => {

    const [user, setUser] = useState(initialState)
    const {name, username, email, phone} = user
    const navigate = useNavigate();

    const handleChange = (e) => {
        const onChangeValue = e.target.value
        setUser(
            {
                ...user,
                [e.target.name] : onChangeValue 
            }
        )
    }

    const addUserDetails = async (e) => {
        e.preventDefault()
        await addUser(user)
        navigate('/all');
    }

  return (
    <div id='addUser'>
        <form onSubmit={addUserDetails}>
            <input 
                placeholder='Enter Name'
                name='name'
                value={name}
                onChange={handleChange}
                required
            />
             <input 
                placeholder='Enter UserName'
                name='username'
                value={username}
                onChange={handleChange}
                required
            />
             <input 
                placeholder='Enter Email'
                name='email'
                value={email}
                onChange={handleChange}
                required
            />
             <input 
                placeholder='Enter phone'
                name='phone'
                value={phone}
                onChange={handleChange}
                required
            />
            <button>Add-User</button>
        </form>
    </div>
  )
}
