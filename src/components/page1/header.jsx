import { Link } from 'react-router-dom';
import './headerscss.scss'
import logo from '../../assets/img/nav-img/Ресурс 1 1.png'
import phone_nav from '../../assets/icons/nav-icons/phone-nav.png'
function Header() {

  return (
    <div className="hourse-container">
      <div className="hourse-box">
        <div className="header">
          <div className="header-box">
            <div className="navbar">
              <div className="nabbar-box">
                <div className="nav-logo">
                  <img src={logo} alt="" />
                </div>
                <div className='nav-center-number-div'>
                  <div className="nav-center-text">
                    <Link className='link1'>О нас </Link>
                    <Link className='link2'>Услуги и цены </Link>
                    <Link className='link3'>Фотоальбом </Link>
                    <Link className='link4'>Контакты</Link>
                  </div>
                  <div className="nav-number">
                    <div className='nav-number-img'>
                      <img src={phone_nav} alt="" />
                    </div>
                    <div className="number">
                      <p>+7 (000) 000-00-00</p>
                      <p>Ежедневно 9:00 – 22:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-text-img-div">
              <div className="header-text-img-div-box">

              </div>
            </div>
            <div className='header-hourse-text-div'>
              <div className="header-hourse-text-div-box">
                <div className='header-hourse-text-p'>
                  <p>Окунитесь в мир лошадей вместе с нами</p>
                  <p>Уроки верховой езды, фотосессии и мероприятия в частном конном клубе <span>г. Санкт-Петербург</span></p>
                  <button className='header-hourse-text-div-button'>записаться</button>
                </div>
                <div className='header-hourse-img-div'>
                  <div className="header-qush-background-image">
                    
                  </div>
                  <div className='header-hourse-background-image'>
                  </div>
                </div>
              </div>
            </div>
            <div className='header-box-space-betwen-img'>
             <div className='header-box-space-betwen-background-img1'></div>
             <div className='header-box-space-betwen-background-img2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
