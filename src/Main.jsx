import React, {useEffect, useState} from 'react'
import './styles.css'
import './Components/backgroundWeather/backgroundWeather.css'

import {Header} from './Components/header/header.jsx'
import {Search} from './Components/search/search.jsx'
import {CardsByHours} from './Components/cardsByHours/cardsByHours.jsx'
import {MainInformationCities} from './Components/mainInformationCities/mainInformationCities.jsx'
import {BackgroundWeather} from './Components/backgroundWeather/backgroundWeather.jsx' 
import {Footer} from './Components/footer/footer.jsx'
import {weatherInterpretationCodes} from './utils.js'

const Main = ({ cards }) => {

  const [dataWeather, setDataWeather] = useState({});

  useEffect(() => {
          // https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m,weathercode&timezone=Europe%2FMoscow&current_weather=true - Изначальное
    fetch('https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow&current_weather=true')
      .then(response => {
        return response.json()
      })
      .then(response => {setDataWeather(response)} )
  },[])

      useEffect(() => {
        console.log(dataWeather?.current_weather?.temperature)
        console.log(dataWeather)
    },[dataWeather])
  
  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <body>
        <main>
          <BackgroundWeather />
          <Search />
          <MainInformationCities
            city="Москва"
            сelsius={dataWeather?.current_weather?.temperature}
            description={weatherInterpretationCodes[dataWeather?.current_weather?.weathercode]}
            maxTemperature={dataWeather?.daily?.temperature_2m_max[0]}
            minTemperature={dataWeather?.daily?.temperature_2m_min[0]}
            />
          <CardsByHours
            temp={[1, 2, 3, 4, 5, 6]}/>
        </main>
          <footer>
            <Footer street="Кутузовский проспект"/>
          </footer>
      </body>
    </div>
  )
}

export default Main
