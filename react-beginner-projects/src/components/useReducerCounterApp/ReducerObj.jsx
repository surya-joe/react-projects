import React, {useReducer} from 'react'

const initialState = {
    counter1: 0,
    counter2: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state, counter1: state.counter1 + action.value }
        case 'decrement':
            return { ...state, counter1: state.counter1 - action.value }
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value }
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value }
        case 'reset':
            return initialState
        default:
            return state 
    }
}
export const ReducerObj = () => {
    
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2>useReducer with object state management</h2>
        <p>{count.counter1}</p>
        <p>{count.counter2}</p>
        <button onClick={() => dispatch({type:'increment', value:5 })}>Inc</button>
        <button onClick={() => dispatch({type:'decrement', value:2 })}>Dec</button>
        <button onClick={() => dispatch({type:'increment2', value:5 })}>Inc2</button>
        <button onClick={() => dispatch({type:'decrement2', value:2 })}>Dec2</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}
