import React, {useEffect, useState} from 'react'
import './styles.css'
import './Components/backgroundWeather/backgroundWeather.css'

import {Header} from './Components/header/header.jsx'
import {Search} from './Components/search/search.jsx'
import {CardsByHours} from './Components/cardsByHours/cardsByHours.jsx'
import {MainInformationCities} from './Components/mainInformationCities/mainInformationCities.jsx'
import {BackgroundWeather} from './Components/backgroundWeather/backgroundWeather.jsx' 
import {Footer} from './Components/footer/footer.jsx'


const Main = ({ cards }) => {
  
  // useEffect(() => {

  //   const [user, setUsers] = useState('http://localhost:8080/');

  // },[])

  
  return (
    <section className="container">
      <header>
        <Header />
      </header>
      <body>
        <main>
          <BackgroundWeather />
          <Search />
          <MainInformationCities city="Москва"
            сelsius="22"
            description="Временнами облачно"
            />
          <CardsByHours temp={[1, 2, 3, 4, 5, 6]}/>
        </main>
          <footer>
            <Footer/>
          </footer>
      </body>
    </section>
  )
}

export default Main