import React from 'react'
import './header.css'
import Sun from './sun.svg'

export const Header = () => {
  const date = new Date(Date.now()).toLocaleTimeString()

  return (
    <div className="header">
      <div className='header__title'>
        <span className='header__title_weather'><a className='url' href='#'>Погода</a></span>
        <span className='header__title_time'>{date}</span>
      </div>
      <Sun width={70} height={50}/>
      <span className='header__today'><a className='url' href='#'>Сегодня</a></span>
      <span className='header__tomorrow'><a className='url' href='#'>Завтра</a></span>
      <span className='header__week'><a className='url' href='#'>Неделя</a></span>
    </div>
  )
}
