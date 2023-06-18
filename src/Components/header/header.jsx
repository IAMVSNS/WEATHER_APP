import React from 'react'
import './header.css'

// import picture from './Components/header/sunImage.png';

export const Header = (header) => {
  return (
    <div className="header">
      <div className='main_title'>
        <p className='weather'><a className='url' href='#'>Погода</a></p>
        {/* <div className='picture'>
          <img src={picture} alt='sun' />
        </div> */}
        <p className='time_now'>12:12</p>
      </div>
      <img className='sun_image' src='../sunImage.png'></img>
      <p className='today'><a className='url' href='#'>Сегодня</a></p>
      <p className='tomorrow'><a className='url' href='#'>Завтра</a></p>
      <p className='tenDays'><a className='url' href='#'>Неделя</a></p>
    </div>
  )
}