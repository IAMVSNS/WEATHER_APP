import React from 'react'
import './styles.css'
import './Components/backgroundWeather/backgroundWeather.css'

import { Header } from './Components/header/header.jsx'
import { Search } from './Components/search/search.jsx'
import { CardsByHours } from './Components/cardsByHours/cardsByHours.jsx'
import { MainInformationCities } from './Components/mainInformationCities/mainInformationCities.jsx'
import { BackgroundWeather } from './Components/backgroundWeather/backgroundWeather.jsx' 


const Main = ({ cards }) => {
  return (
    <div className="container">
          <BackgroundWeather />
          <Header />
          <Search />
          <MainInformationCities />
          <CardsByHours />
    </div>
  )
}

export default Mainтз