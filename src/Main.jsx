import React from 'react'
import './Components/body/styles.css'

import { Header } from './Components/header/header.jsx'
import { Search } from './Components/search/search.jsx'
import { сardWithCities } from './Components/cardWithCities/cardWithCities.jsx'
import { hourlyWeather } from './Components/hourlyWeather/hourlyWeather.jsx'


const Main = () => {
  return (
    <main className="main_card">
      <Header />
      <Search />
      <сardWithCities />
      <hourlyWeather />
    </main>
  )
}

export default Main