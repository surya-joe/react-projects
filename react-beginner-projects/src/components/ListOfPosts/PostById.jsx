import axios from 'axios'
import React,{useEffect, useState} from 'react'

export const PostById = () => {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    useEffect(
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(
                r => {
                    console.log(r.data)
                    setPost(r.data)
                }
            )
            .catch(
                er => console.log(er)
            )
        },[id]
    )
  return (
    <div>
        <h2>Get Post using Id</h2>
        <input 
            type='text'
            placeholder='Enter Id'
            value={id}
            onChange={ e => setId(e.target.value)}
        />
        <div>
            { post.title }
        </div>
    </div>
  )
}
