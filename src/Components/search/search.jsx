import React from 'react'
import './search.css'

export const Search = ({ search }) => {
    return (
        <div className='searchLocation'>
            <input  className='input' type='text' placeholder='Поиск' />
        </div>
    )
}