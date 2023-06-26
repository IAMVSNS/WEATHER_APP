import React from 'react'
import './mainINformationCities.css'

export const MainInformationCities = ({  }) => {
    return (
    <div className='card_text'>
        <span className='city'>Москва</span>
        <span className='сelsius'>22&deg;</span>
        <span className='weather_description'>Временами облачно</span>
        <span className='max_min_temperature'>Макс.: 23&deg;, мин.: 12&deg;</span>
    </div>
    )
}