import axios from 'axios'
import React, {useState,useEffect, useReducer} from 'react'
import { PlanetCard } from './PlanetCard'
import './style.css'

const initialState = {
    loading: true, 
    error: '',
    posts:[]
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                posts: action.payload
            }
        case 'ERROR':
            return{
                loading:false,
                error: 'Something went wrong...',
                posts: []
            }
        default:
            return state 
    }
}

export const PlanetDetails = () => {
    const [planetName, setPlaneName] = useState('')
    const [post, setPost] = useState({})
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
            
            axios.request(options).then(function (response) {
                dispatch({type:'SUCCESS', payload: response.data})
            }).catch(function (error) {
                console.error(error);
            });
        }, []
        
    )

    const handleSubmit = (e) => {

        e.preventDefault()
        const str = planetName
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);

        const dataList = state.posts
        const filterPlanet = dataList.filter( post => { 
            return post.name === str2
        } ) 

        setPost(filterPlanet)

    }

  return (
    <div>
        <h2>Our Eight Planets</h2>
        <form onSubmit={handleSubmit}>
            <input 
                required
                type='text'
                placeholder='Enter planet name'
                value={planetName}
                onChange={ e => setPlaneName(e.target.value) }
            />
            <button>Search</button>
        </form>
        {
            post.length > 0     
            ? <PlanetCard planetData = {post} />
            : state.error  
        }
    </div>
  )
}
