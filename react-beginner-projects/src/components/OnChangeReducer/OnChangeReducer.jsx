import React,{useReducer} from 'react'
const initialState = {
    submited: false,
    name: '',
    lname: ''
}
const reducer = (state, action) => {
    switch(action.type){
        case 'ON_CHANGE':
            return{
                ...state,
                [action.field] : action.payload
            }
        case 'SUBMITED':
            return{
                ...state, 
                submited: action.flag
            }
        default:
            return state 
    }
}
export const OnChangeReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'SUBMITED', flag: true})
        console.log(state.name)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Enter text'
                name = 'name'
                value={state.name}
                onChange={ e => dispatch({
                    type:'ON_CHANGE',
                    field: e.target.name, 
                    payload: e.target.value

                })}
            />
            <button>submit</button>
        </form>

        {
            state.submited ? state.name : null
        }
    </div>
  )
}
