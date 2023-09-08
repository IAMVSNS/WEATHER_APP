import React from 'react'
import './cardsByHours.css'
import Rain from './rain.svg'
import Cloud from './cloud.svg'
import Storm from './storm.svg'
import StormWithRain from './stormWithRain.svg'
import Sun from './sun.svg'
import Snow from './snow.svg'

export const CardsByHours = ({ temp, clock } ) => {
    return (
        <section className='cards'>

            <div className='card__1 card'>
                <h6 className='clock__weather'>{clock[0]}</h6>
                <Rain className='cardSize'/>
                <span className='card__temperature'>{temp[0]}&deg;</span>
            </div>

            <div className='card__2 card'>
                <h6 className='clock__weather'>{clock[1]}</h6>
                <Cloud className='cardSize'/>
                <span className='card__temperature'>{temp[1]}&deg;</span>
            </div>

            <div className='card__3 card'>
                <h6 className='clock__weather'>{clock[2]}</h6>
                <Storm className='cardSize'/>
                <span className='card__temperature'>{temp[2]}&deg;</span>
            </div>

            <div className='card__4 card'>
                <h6 className='clock__weather'>{clock[3]}</h6>
                <StormWithRain className='cardSize'/>
                <span className='card__temperature'>{temp[3]}&deg;</span>
            </div>

            <div className='card__5 card'>
                <h6 className='clock__weather'>{clock[4]}</h6>
                <Sun className='cardSize'/>
                <span className='card__temperature'>{temp[4]}&deg;</span>
            </div>

            <div className='card__6 card'>
                <h6 className='clock__weather'>{clock[5]}</h6>
                <Snow className='cardSize'/>
                <span className='card__temperature'>{temp[5]}&deg;</span>
            </div>

        </section>
    )
}
