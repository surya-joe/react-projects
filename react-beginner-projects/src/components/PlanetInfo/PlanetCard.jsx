import React from 'react'

export const PlanetCard = (props) => {
    const data = props.planetData[0]
  return (
    <div className='card'>
        <h3>Planet Position : <span id='planetId'>{data.id}</span></h3> 
        <h3>Planet Name : <span>{data.name}</span></h3>
        <h3>Description :</h3>
        <p>{data.description}</p>
    </div>
  )
}
