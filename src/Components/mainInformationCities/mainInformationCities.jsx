import React from 'react'
import './mainINformationCities.css'

export const MainInformationCities = ({ city, сelsius, description}) => {
    return (
    <div className='card-text'>
        <span className='card-text__city'>{city}</span>
        <span className='card-text__сelsius'>{сelsius}&deg;</span>
        <span className='card-text__weather_description'>{description}</span>
        <div className='card-text__temperature'>
            <span className='card-text__temperature_max'>Макс.: <a className='max_degrees'>23&deg;</a>, </span>
            <span className='card-text__temperature_min'>мин.: <a className='min_degrees'>12&deg;</a></span>
        </div>
    </div>
    )
}