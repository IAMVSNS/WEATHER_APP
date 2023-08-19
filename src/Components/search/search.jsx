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
            <div className='search__location_dropdown'>
                <ul className='search__location_dropdown_topmenu'>
                    <li><input onChange={searchPlace} className='search__location_input' type='text' placeholder='Поиск' />
                        <ul className='submenu'>
                            <li><a className='submenu__city' href=''>Смоленск</a></li>
                            <li><a className='submenu__city' href=''>Санкт-Петербург</a></li>
                            <li><a className='submenu__city' href=''>Чебоксары</a></li>
                            <li><a className='submenu__city' href=''>Казань</a></li>
                            <li><a className='submenu__city' href=''>Екатеринбург</a></li>
                            <li><a className='submenu__city' href=''>Новосибирск</a></li>
                            <li><a className='submenu__city' href=''>Красноярск</a></li>
                            <li><a className='submenu__city' href=''>Иркутск</a></li>
                            <li><a className='submenu__city' href=''>Владивосток</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}