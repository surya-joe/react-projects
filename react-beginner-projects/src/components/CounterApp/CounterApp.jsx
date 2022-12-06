import React,{ useState } from 'react'

export const CounterApp = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='counterApp'>
        <h2>Counter-App</h2>
        <h1>{count}</h1>
        <button onClick={ () => { setCount(pc => pc + 1) } }> Increment </button>
        <button onClick={ () => { setCount(pc => pc - 1) } }> Decrement </button>
        <button onClick={ () => { setCount(0) } }> Reset </button>
    </div>
  )
}
