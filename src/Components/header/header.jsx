import React from 'react'
import './header.css'
// import picture from './Components/header/sunImage.png';

import Sun from './sun.svg'


export const Header = () => {
  const date = new Date(Date.now()).toLocaleTimeString()
  return (
    <div className="header">
      <div className='main_title'>
        <p className='weather'><a className='url' href='#'>Погода</a></p>
        {/* <div className='picture'>
          <img src={picture} alt='sun' />
        </div> */}
        <p className='time_now'>{date}</p>
      </div>
      <Sun width={70} height={50}/>
      <p className='today'><a className='url' href='#'>Сегодня</a></p>
      <p className='tomorrow'><a className='url' href='#'>Завтра</a></p>
      <p className='tenDays'><a className='url' href='#'>Неделя</a></p>
    </div>
  )
}