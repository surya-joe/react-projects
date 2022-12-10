import axios from 'axios'
import React,{useState, useEffect} from 'react'

export const ListOfPosts = () => {
    const [posts, setPosts] = useState([])
    const [isSubmited, setIsSubmited] = useState(false)
    const handleGetPosts = () => {
        setIsSubmited(!isSubmited)
    }
    useEffect(
        () => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( 
                r => {
                    console.log(r.data)
                    setPosts(r.data)
                }
            )
            .catch( er => console.log(er))
        },[]
    )
  return (
    <div>
        <h2>List of Posts form JsonPlaceholder</h2>
        <button onClick={handleGetPosts}>Get Posts</button>
        <ul>
            {
                isSubmited ?
                posts.map(
                    post => <li key={post.id}>{post.title}</li>
                ) : null
            }
        </ul>
    </div>
  )
}
