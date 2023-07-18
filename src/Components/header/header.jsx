import React, {useState, useEffect} from 'react'
import './header.css'
import Sun from './sun.svg'

export const Header = () => {
  const date = (new Date()).toDateString()
  const [time, setTime] = useState(new Date());

  // Обновление времени каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Очищение выпонения интервала, перед выполнением следующего
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Формат времени
  const timeString = `${hours}:${minutes}:${seconds}`;

  return (
    <div className="header">
      <div className='header__title'>
        <span className='header__title_weather'><a className='url' href='#'>Погода</a></span>
        <span className='header__title_date'>{date}</span>
        <span className='header__title_time'>{timeString}</span>

      </div>
      <Sun width={70} height={50}/>
      <span className='header__today'><a className='url' href='#'>Сегодня</a></span>
      <span className='header__tomorrow'><a className='url' href='#'>Завтра</a></span>
      <span className='header__week'><a className='url' href='#'>Неделя</a></span>
    </div>
  )
}