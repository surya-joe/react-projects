import React,{useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state 
    }
} 

export const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Counter-App using useReducer</h2>
        <p>{count}</p>
        <button onClick={ () => dispatch('increment') }>Inc</button>
        <button onClick={ () => dispatch('decrement') }>Dec</button>
        <button onClick={ () => dispatch('reset') }>Reset</button>
    </div>
  )
}
