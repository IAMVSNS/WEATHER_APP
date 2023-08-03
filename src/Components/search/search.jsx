import React, { useCallback } from 'react'
import './search.css'

export const Search = ({ search }) => {
    const searchPlace = useCallback((item) => {
        // Нашел в консоли сайта с API, но мне кажется это не то что надо
        console.log(item.target.value)
        fetch (`https://geocoding-api.open-meteo.com/v1/search?name=${item.target.value}`)
    .then(response => {
        return response.json()
        })
    })
    
    return (
        <div className='search__location'>
            <input  onChange={searchPlace} className='search__location_input' type='text' placeholder='Поиск' />
        </div>
    )
}