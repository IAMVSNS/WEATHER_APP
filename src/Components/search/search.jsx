import React, { useCallback } from 'react'
import './search.css'

export const Search = ({ search }) => {
    const searchPlace = useCallback(() => {
        // fetch 
    })
    return (
        <div className='search__location'>
            <input  onChange={searchPlace} className='search__location_input' type='text' placeholder='Поиск' />
        </div>
    )
}