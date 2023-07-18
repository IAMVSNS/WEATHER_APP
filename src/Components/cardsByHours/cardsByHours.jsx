import React from 'react'
import './cardsByHours.css'
import Rain from './rain.svg'
import Cloud from './cloud.svg'
import Storm from './storm.svg'
import StormWithRain from './stormWithRain.svg'
import Sun from './sun.svg'
import Snow from './snow.svg'

export const CardsByHours = ({ temp }) => {
    return (
        <section className='cards'>
        
            <div className='card__1 card'>
                <h6 className='clock__weather'>00:00</h6>
                <Rain width={90} heigth={70}/>
                <span className='card__temperature'>{temp[0]}&deg;</span>
            </div>

            <div className='card__2 card'>
                <h6 className='clock__weather'>04:00</h6>
                <Cloud width={90} heigth={70}/>
                <span className='card__temperature'>{temp[1]}&deg;</span>
            </div>

            <div className='card__3 card'>
                <h6 className='clock__weather'>08:00</h6>
                <Storm width={90} heigth={70}/>
                <span className='card__temperature'>{temp[2]}&deg;</span>
            </div>

            <div className='card__4 card'>
                <h6 className='clock__weather'>12:00</h6>
                <StormWithRain width={90} heigth={70}/>
                <span className='card__temperature'>{temp[3]}&deg;</span>
            </div>

            <div className='card__5 card'>
                <h6 className='clock__weather'>16:00</h6>
                <Sun width={90} heigth={70}/>
                <span className='card__temperature'>{temp[4]}&deg;</span>
            </div>

            <div className='card__6 card'>
                <h6 className='clock__weather'>20:00</h6>
                <Snow width={90} heigth={70}/>
                <span className='card__temperature'>{temp[5]}&deg;</span>
            </div>

        </section>
    )
}