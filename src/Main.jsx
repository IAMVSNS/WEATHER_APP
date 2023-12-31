import React, {useEffect, useState, useCallback} from 'react'
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
    fetch('https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FMoscow&current_weather=true')
      .then(response => {
        return response.json()
      })
      .then(response => {setDataWeather(response)} )
  },[])

  // Обновление каждый час
    setTimeout(function(){
      window.location.reload(1);
  }, 600000);

      useEffect(() => {
        console.log(dataWeather?.current_weather?.temperature)
        console.log(dataWeather)
    },[dataWeather])
  
    const chooseDay = useCallback((item) => {
      console.log(item.target.value)
  })

  return (
    <div className="app">
      <header>
        <Header chooseDay={chooseDay}/>
      </header>
      <body>
        <main>
          <BackgroundWeather />
          <Search />
          <MainInformationCities
            city={dataWeather?.timezone_abbreviation} 
            сelsius={Math.round(dataWeather?.current_weather?.temperature)}
            description={weatherInterpretationCodes[dataWeather?.current_weather?.weathercode]}
            maxTemperature={Math.round(dataWeather?.daily?.temperature_2m_max[0])}
            minTemperature={Math.round(dataWeather?.daily?.temperature_2m_min[0])}
            />
          <CardsByHours
            temp={[
              Math.round(dataWeather?.hourly?.temperature_2m[0]),
              Math.round(dataWeather?.hourly?.temperature_2m[4]),
              Math.round(dataWeather?.hourly?.temperature_2m[8]),
              Math.round(dataWeather?.hourly?.temperature_2m[12]),
              Math.round(dataWeather?.hourly?.temperature_2m[16]),
              Math.round(dataWeather?.hourly?.temperature_2m[20])
              ]}

            clock={[
              dataWeather?.hourly?.time[0].substring(dataWeather?.hourly?.time[0].length-5, dataWeather?.hourly?.time[0].length),
              dataWeather?.hourly?.time[4].substring(dataWeather?.hourly?.time[0].length-5, dataWeather?.hourly?.time[0].length),
              dataWeather?.hourly?.time[8].substring(dataWeather?.hourly?.time[0].length-5, dataWeather?.hourly?.time[0].length),
              dataWeather?.hourly?.time[12].substring(dataWeather?.hourly?.time[0].length-5, dataWeather?.hourly?.time[0].length),
              dataWeather?.hourly?.time[16].substring(dataWeather?.hourly?.time[0].length-5, dataWeather?.hourly?.time[0].length),
              dataWeather?.hourly?.time[20].substring(dataWeather?.hourly?.time[0].length-5, dataWeather?.hourly?.time[0].length)
              ]}
            />

        </main>
          <footer>
            <Footer street="Кутузовский проспект"/>
          </footer>
      </body>
    </div>
  )
}

export default Main
