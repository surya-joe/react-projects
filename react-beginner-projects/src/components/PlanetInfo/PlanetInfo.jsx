import React,{useEffect, useReducer} from 'react'
import axios from 'axios'
import {PlanetCard} from './PlanetCard'
import './style.css'

const initialState = {
    loading: false,
    error: '',
    posts:[],
    post:{},
    planetName: ''
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS':
            return{
                ...state,
                posts: action.payload
            }
        case 'ERROR':
            return{
                ...state,
                error: 'Something went wrong...'
            }
        case 'ON_CHANGE':
            return{
                ...state,
                [action.field] : action.onChangePayload
            }
        case 'GET_POST':
            return{
                ...state,
                post: action.filterPayload
            }
        case 'LOADING':
            return{
                ...state,
                loading: action.loadingFlag
            }
        default:
            return state 
    }
}

export const PlanetInfo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(
        () => {
            const options = {
            method: 'GET',
            url: `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list`,
            headers: {
                'X-RapidAPI-Key': '59dbbe565amshcd3e9aceff0e38ap13fc4ajsnd8c024328e3b',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
            };
            
            axios.request(options)
            .then( res => {
                // console.log(res.data)
                dispatch({type:'SUCCESS', payload: res.data})
            }).catch( err => {
                console.error(err);
            });
        }, []
    )

    const handleChange = (e) => {
        dispatch({
            type:'ON_CHANGE', 
            field: e.target.name,
            onChangePayload: e.target.value
        })
    }

    const filterPlanet = () => {
        
        const str = state.planetName.trim()
        const strToCaptalize = str.charAt(0).toUpperCase() + str.slice(1)
        // console.log(strToCaptalize)

        const postList = state.posts 
        const filterPost = postList.filter( 
            item => { return item.name === strToCaptalize }
        )
        // console.log(filterPost)

        dispatch({type:'GET_POST', filterPayload: filterPost })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch({type:'LOADING', loadingFlag: true})

        filterPlanet()
    
        dispatch({type:'LOADING', loadingFlag: false})
    }   

  return (
    <div>
        <h2>Planet INFO</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Enter planet name'
                required
                name='planetName'
                value={state.planetName}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
        {   
            state.loading ? 'Loading...' :
            state.post.length > 0 
            ? <PlanetCard planetData={state.post} /> : null
        }
    </div>
  )
}
