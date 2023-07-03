import React from 'react'
import './search.css'

export const Search = ({ search }) => {
    return (
        <div className='search__location'>
            <input  className='search__location_input' type='text' placeholder='Поиск' />
        </div>
    )
}