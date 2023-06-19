import React from 'react'
import './search.css'

export const Search = ({ search }) => {
    return (
        <div className='SearchLocation'>
            <input  className='input' type='text' placeholder='Поиск' />
        </div>
    )
}