import React, {useEffect} from 'react'
import './styles.css'
import './Components/backgroundWeather/backgroundWeather.css'

import {Header} from './Components/header/header.jsx'
import {Search} from './Components/search/search.jsx'
import {CardsByHours} from './Components/cardsByHours/cardsByHours.jsx'
import {MainInformationCities} from './Components/mainInformationCities/mainInformationCities.jsx'
import {BackgroundWeather} from './Components/backgroundWeather/backgroundWeather.jsx'
import {Footer} from './Components/footer/footer.jsx'


const Main = ({cards}) => {

    useEffect(() => {
        // TODO: запрос с помощью fetch к open-meteo, результаты в консоль
    }, [])


    return (
        <>
            <header>
                <Header/>
            </header>
            <body className="container">
            <main>
                <BackgroundWeather/>
                <Search/>
                <MainInformationCities city="Москва"/>
                <CardsByHours temp={[9, 4, 3, 2, 4, 3]}/>
            </main>
            </body>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Main
