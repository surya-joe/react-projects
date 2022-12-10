import React,{useContext} from 'react'
import { CountContext } from './ParentCompo'

export const CompoA = () => {
    const countContext = useContext(CountContext)
  return (
    <div>
        <p>CompoA-Btn</p>
        <button style={countContext.btnStyle} onClick={() => countContext.countDispatch('increment')}>Inc</button>
        <button style={countContext.btnStyle} onClick={() => countContext.countDispatch('decrement')}>Dec</button>
        <button style={countContext.btnStyle} onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}
