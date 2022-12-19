import React, { useEffect } from 'react'
import axios from 'axios'

export const ReactJsonServer = () => {
    useEffect(
        () => {
            axios.get('http://localhost:3001/products')
            .then( res => console.log(res.data))
            .catch( err => console.log(err))
        }
    )
  return (
    <div>
        <h2>React & Json Server</h2>

    </div>
  )
}
