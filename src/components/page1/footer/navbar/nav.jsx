import React from 'react'
import './nav.scss'
import nav_logo from  '../../../../assets/img/nav/лого.png'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav-container'>
        <div className="nav-text-container">
            <div className="nav-text-container-div1">
                <div className="logo-container">
                    <img src={nav_logo} alt="" />
                </div>
                <div className="nav-text">
                    <Link className='link'>О нас</Link>
                    <Link className='link'>Услуги и цены</Link>
                    <Link className='link'>Фотоальбом</Link>
                    <Link className='link'>Контакты</Link>
                    <div className="nav-text-button">
                        <button>Заказать звонок</button>
                    </div>
                </div>
            </div>
            <div className="nav-text-container-div2">
                <Link className='div2-link'>Соглашение на обработку персональных данных</Link>
                <Link className='div2-link'>Политика конфенденциальности</Link>
            </div>
        </div>
    </div>
  )
}

export default Nav