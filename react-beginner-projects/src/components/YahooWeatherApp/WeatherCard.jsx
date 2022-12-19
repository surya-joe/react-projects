import React from 'react'

export const WeatherCard = ({report}) => {
    const upComingForecasts = report.forecasts
  return (
    <section id='card'>
        <div className='cardRow' >
            <h3>City <span>{report.location.city}</span></h3> 
            <h3>Region <span>{report.location.region}</span></h3> 
            <h3>Country <span>{report.location.country}</span></h3> 
            <h3>Time-Zone <span>{report.location.timezone_id}</span></h3> 
        </div>
        <div className='cardRow'>
            <h3>Condition<span>{report.current_observation.condition.text}</span></h3> 
            <h3>Temperature<span>{report.current_observation.condition.temperature}° Fahrenheit</span></h3> 
        </div>
        <h2>UpComing Forecasts</h2>
        <div className='cardRow' id='upComingForecasts'>
            <p>
                {
                    upComingForecasts.map(
                        (item,i) =>  <span key={i}>{item.day} - {item.text} </span> 
                    )        
                }
            </p>
        </div>
    </section>
  )
}
