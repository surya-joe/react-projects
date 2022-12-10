// We can use MultipleReducer reducer whe the state share a common functionality

import React,{ useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action.type){
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

export const MultipleReducer = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Multiple useReducer</h2>
        <div>
            <p>{count1}</p>
            <button onClick={ () => dispatch1({type:'increment', value:5})}>Inc</button>
            <button onClick={ () => dispatch1({type:'decrement', value:2})}>Dec</button>
            <button onClick={ () => dispatch1({type:'reset'})}>Reset</button>
        </div>
        <div>
            <p>{count2}</p>
            <button onClick={ () => dispatch2({type:'increment', value:5})}>Inc</button>
            <button onClick={ () => dispatch2({type:'decrement', value:2})}>Dec</button>
            <button onClick={ () => dispatch2({type:'reset'})}>Reset</button>
        </div>
    </div>
  )
}
