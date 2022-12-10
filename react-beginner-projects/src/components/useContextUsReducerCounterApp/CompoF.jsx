import React,{useContext} from 'react'
import { CountContext } from './ParentCompo'

export const CompoF = () => {
    const countContext = useContext(CountContext)
  return (
    <div>
        <p>CompoF-btn</p>
        <button style={countContext.btnStyle} onClick={() => countContext.countDispatch('increment')}>Inc</button>
        <button style={countContext.btnStyle} onClick={() => countContext.countDispatch('decrement')}>Dec</button>
        <button style={countContext.btnStyle} onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}
