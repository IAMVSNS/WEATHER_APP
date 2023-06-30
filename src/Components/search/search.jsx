import React from 'react'
import './search.css'

export const Search = ({ search }) => {
    return (
        <div className='searchLocation'>
            <input  className='searchLocation__input' type='text' placeholder='Поиск' />
        </div>
    )
}