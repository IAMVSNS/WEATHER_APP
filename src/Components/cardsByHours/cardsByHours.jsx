import React from 'react'
import './cardsByHours.css'
import Rain from './rain.svg'
import Cloud from './cloud.svg'
import Storm from './storm.svg'
import StormWithRain from './stormWithRain.svg'
import Sun from './sun.svg'
import Snow from './snow.svg'

export const CardsByHours = () => {
    return (
        <section className='cards'>
        
            <div className='card_1' >
                <h6 className='clockWeather'>00:00</h6>
                <Rain width={90} heigth={70}/>
                <span className='card_temperature'>19&deg;</span>
            </div>

            <div className='card_2'>
                <h6 className='clockWeather'>04:00</h6>
                <Cloud width={90} heigth={70}/>
                <span className='card_temperature'>15&deg;</span>
            </div>

            <div className='card_3'>
                <h6 className='clockWeather'>08:00</h6>
                <Storm width={90} heigth={70}/>
                <span className='card_temperature'>10&deg;</span>
            </div>

            <div className='card_4'>
                <h6 className='clockWeather'>12:00</h6>
                <StormWithRain width={90} heigth={70}/>
                <span className='card_temperature'>6&deg;</span>
            </div>

            <div className='card_5'>
                <h6 className='clockWeather'>16:00</h6>
                <Sun width={90} heigth={70}/>
                <span className='card_temperature'>18&deg;</span>
            </div>

            <div className='card_6'>
                <h6 className='clockWeather'>20:00</h6>
                <Snow width={90} heigth={70}/>
                <span className='card_temperature'>0&deg;</span>
            </div>

        </section>
    )
}