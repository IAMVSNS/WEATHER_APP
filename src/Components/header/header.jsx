import React from 'react'
import './header.css'
import Sun from './sun.svg'

export const Header = () => {
  const date = new Date(Date.now()).toLocaleTimeString()
  return (
    <div className="header">
      <div className='header_main_title'>
        <span className='header_weather'><a className='url' href='#'>Погода</a></span>
        <span className='header_time_now'>{date}</span>
      </div>
      <Sun width={70} height={50}/>
      <span className='today'><a className='url' href='#'>Сегодня</a></span>
      <span className='tomorrow'><a className='url' href='#'>Завтра</a></span>
      <span className='tenDays'><a className='url' href='#'>Неделя</a></span>
    </div>
  )
}