import React,{ useState, useEffect} from 'react'
import axios from 'axios'

export const OnSubmitUseEffect = () => {
    const [id, setId] = useState(1)
    const [post, setPost] = useState({})
    const [idFromBtn, setIdFromBtn] = useState(1)
    
    const handleSubmit = () => {
        setIdFromBtn(id)
    }

    useEffect(
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtn}`)
            .then(
                r => {
                    console.log(r)
                    setPost(r.data)
                }
            )
            .catch( er => console.log(er) )
        },[idFromBtn]
    )

  return (
    <div>
        <h2>Get a post using it's 'id' on button click</h2>
        <input 
            type='text'
            placeholder='Enter id'
            value={id}
            onChange={ e => setId(e.target.value) }
        />
        <button onClick={handleSubmit}>Get-Post</button>
        <div>
            {post.title}
        </div>
    </div>
  )
}
