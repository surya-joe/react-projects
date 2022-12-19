import React, { useEffect, useState } from 'react'
import { updateUser, getUser } from '../service/api'
import { useParams, useNavigate } from 'react-router-dom'

const initialValue = {
  name: "",
  username : "",
  email: "",
  phone: "",
}

export const UpdateUser = () => {
  const [user, setUser] = useState(initialValue);
  const {name, username, email, phone} = user; 
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line
  },[]);

  const loadUserData = async () =>{
      const response = await getUser(id);
      setUser(response.data);
  }

  const handleChange = (e) => {
    const onChangeValue = e.target.value
        setUser(
            {
              ...user,
              [e.target.name] : onChangeValue 
            }
        )
        console.log(user)
  }

  const updateUserDetails = async () =>{
    await updateUser(id,user);
    navigate('/all');
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateUserDetails()
  }


  return (
    <div id='updateUser'>
      <form onSubmit={handleSubmit}>
          <input 
              name='name'
              value={name}
              onChange={ handleChange }
          />
          <input 
              name='username'
              value={username}
              onChange={ handleChange }
          />
          <input 
              name='email'
              value={email}
              onChange={ handleChange }
          />
          <input 
              name='phone'
              value={phone}
              onChange={ handleChange }
          />
          <button id='updateBtn' type='submit'>Update</button>
          <button id='cancelBtn' onClick={ () => navigate('/all')} >Cancel</button>
     
      </form>
  </div>
  )
}

