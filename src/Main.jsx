import React from 'react'
import './Components/body/styles.css'

import { Header } from './Components/header/header.jsx'
import { Search } from './Components/search/search.jsx'
import { сardsWithCity } from './Components/cardsWithCity/cardsWithCity.jsx'


const Main = () => {
  return (
    <main className="main_card">
      <Header />
      <Search />
      <сardsWithCity />
    </main>
  )
}

export default Main