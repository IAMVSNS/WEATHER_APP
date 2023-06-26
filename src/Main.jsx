import React from 'react'
import './styles.css'
import './Components/backgroundWeather/backgroundWeather.css'

import { Header } from './Components/header/header.jsx'
import { Search } from './Components/search/search.jsx'
import { CardsByHours } from './Components/cardsByHours/cardsByHours.jsx'
import { mainInformationCities } from './Components/mainInformationCities/mainInformationCities.jsx'

const Main = ({ cards }) => {
  return (
    <div className="container">
      <div className='clouds'>
          <div className='clouds_1'></div>
          <div className='clouds_2'></div>
          <div className='clouds_3'></div>
            <div className='card_text'>
              <span className='city'>Москва</span>
              <span className='сelsius'>22&deg;</span>
              <span className='weather_description'>Временами облачно</span>
              <span className='max_min_temperature'>Макс.: 23&deg;, мин.: 12&deg;</span>
            </div>
      </div>
          <Header />
          <Search />
          <mainInformationCities />
          <CardsByHours />
    </div>
  )
}

export default Main