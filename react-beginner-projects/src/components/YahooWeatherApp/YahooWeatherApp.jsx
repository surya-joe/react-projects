import React,{useState} from 'react'
import axios from "axios"
import { WeatherCard } from './WeatherCard'
import './style.css'


export const YahooWeatherApp = () => {
    const [weatherData, setWeatherData] = useState([])
    const [cityName, setCityName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        const options = {
            method: 'GET',
            url: 'https://yahoo-weather5.p.rapidapi.com/weather',
            params: {location: cityName, format: 'json', u: 'f'},
            headers: {
                'X-RapidAPI-Key': '59dbbe565amshcd3e9aceff0e38ap13fc4ajsnd8c024328e3b',
                'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
            }
        };

        await axios.request(options)
        .then( re => {
            setWeatherData(re.data)
            console.log(re.data)
        }).catch( er => {
            setWeatherData(er)
            console.log(er)
        });

        setIsSubmited(true)
        setIsLoading(false)
    }


  return (
    <div>
        <h2>Yahoo Weather-App</h2>
        <form onSubmit={ handleSubmit }>
            <input 
                required
                type='text'
                placeholder='Enter city name'
                value={cityName}
                onChange={ e => setCityName(e.target.value) }
            />
            <button>Get-Report</button>
        </form>
        {   
            isSubmited 
            ? isLoading 
            ? <p>Loading...</p> 
            : <WeatherCard report={weatherData} />
            : null
        }
    </div>
  )
}
