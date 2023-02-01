import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <div className='header'>
        <div className="upMenu">
            <ul className='menu'>
                <li><a href="">Про нас</a></li>
                <li><a href="">Сертеіфкати</a></li>
                <li><a href="">Контакти</a></li>
                <li><a href="">Акції</a></li>
            </ul>
            <ul className='numbers'>
                <li><a href="tel: +380 (63) 871 60 80">+380 (63) 871 60 80</a></li>
                <li><a href="tel: +380 (63) 871 60 80">+380 (63) 871 60 80</a></li>
                <li><a href="tel: +380 (63) 871 60 80">+380 (63) 871 60 80</a></li>
                <li>ПН - ВС 10:00 - 22:00</li>

            </ul>
            <div className="logo">
                <img src="https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr" alt=""/>
            </div>
        </div>
        <div className="downMenu">
            <ul className='menu'>
                <li><a href="">Квести</a></li>
                <li><a href="">Мапа Квестів</a></li>
                <li><a href="">Розклад</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header