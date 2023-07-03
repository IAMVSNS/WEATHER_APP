import React from 'react'
import './styles.css'
import './Components/backgroundWeather/backgroundWeather.css'

import { Header } from './Components/header/header.jsx'
import { Search } from './Components/search/search.jsx'
import { CardsByHours } from './Components/cardsByHours/cardsByHours.jsx'
import { MainInformationCities } from './Components/mainInformationCities/mainInformationCities.jsx'
import { BackgroundWeather } from './Components/backgroundWeather/backgroundWeather.jsx' 
import { Footer } from './Components/footer/footer.jsx'


const Main = ({ cards }) => {
  return (
    <body className="container">
        <header>
          <Header />
        </header>
        <main>
          <BackgroundWeather />
          <Search />
          <MainInformationCities />
          <CardsByHours />
        </main>
        <footer>
          <Footer/>
        </footer>
    </body>
  )
}

export default Main