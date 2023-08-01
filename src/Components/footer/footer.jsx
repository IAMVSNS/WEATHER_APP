import React from 'react'
import './footer.css'

export const Footer = ({ street }) => {
    return (
        <div className='footer'>
            <span className='footer__geo'>Погода в геопозиции: <a className='footer__geo_street'>{street}</a></span>
        </div>
    )
}