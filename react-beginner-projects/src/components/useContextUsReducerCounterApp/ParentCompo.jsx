import React, {useReducer} from 'react'
import { CompoA } from './CompoA'
import { CompoB } from './CompoB'
import { CompoC } from './CompoC'

export const CountContext = React.createContext()

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

const buttonStyle = {
    padding:'1rem',
    border:'1px solid #000',
    margin:'1rem'
}

export const ParentCompo = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>ParentCounter - {count}</h2>
        <CountContext.Provider value={ {countState: count, countDispatch: dispatch, btnStyle: buttonStyle} }>
            <CompoA />
            <CompoB />
            <CompoC />
        </CountContext.Provider>
    </div>
  )
}
