import React from 'react'
import './Components/body/styles.css'

import { Header } from './Components/header/header.jsx'
import { Search } from './Components/search/search.jsx'
import { CardsWithCity } from './Components/cardsWithCity/cardsWithCity.jsx'


const Main = () => {
  return (
    <main className="main_card">
    <Header />
    <Search />
    <CardsWithCity />
    </main>
  )
}

export default Main
