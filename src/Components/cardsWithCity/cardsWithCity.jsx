import React from 'react'
import './cardsWithCity.css'

export const CardsWithCity = (cards) => {
    return (
    <div className="container">
        <div className='clouds'>
            <div className='clouds-1'></div>
            <div className='clouds-2'></div>
            <div className='clouds-3'></div>
            <div className='card_text'>
                <span className='city'></span>
                <span className='сelsius'></span>
                <span className='weather_description'></span>
                <span className='max_min_temperature'></span>
            </div>
        </div>
    </div>
    )
}