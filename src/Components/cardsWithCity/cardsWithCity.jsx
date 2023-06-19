import React from 'react'
import './cardsWithCity.css'

export const сardsWithCity = (cards) => {
    return (
    <div className="container">
        <div className='clouds'>
            <div className='clouds_1'></div>
            <div className='clouds_2'></div>
            <div className='clouds_3'></div>
            <div className='card_text'>
                <span className='city'>Moscow</span>
                <span className='сelsius'>22</span>
                <span className='weather_description'>Временами облачно</span>
                <span className='max_min_temperature'>Макс.: 23&deg; , мин.: 12&deg;</span>
            </div>
        </div>
    </div>
    )
}