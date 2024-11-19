import React from 'react'
import './login.scss'
import location_svg from '../../../../assets/img/footer/login/pin.svg'
function Login() {
  return (
    <div className='login-container'>
      <div className="login-container-box">
        <div className='login-title-text-div'>
          <div className="login-title">
            <p>Контакты</p>
            <div className="login-text-border"></div>
          </div>  
          <div className="login-text">
            <div className="login-text-div">
              <div className='login-text-div1'>
                <div className='login-img1'></div>
                <p>ул. Ленина, 25, офис 65</p>
              </div>
              <div className='login-text-div1'>
              <div className='login-img2'></div>
                <p>+7 (495) 000-00-00</p>
              </div>
              <div className='login-text-div1'>
                <div className='login-img3'></div>

                <p>mail@somemail.com</p>
              </div>
              <div className='login-text-div2'>
              <div className='login-img4'></div>
                <p>Пн-Пт: 10:00 - 19:00 Сб: 10:00 - 17:00 Вс: выходной</p>
              </div>
            </div>
            <div className='login-container-img'>
              <div className='login-icons-img'>
                <div className="login-icons1"></div>
                <div className="login-icons2"></div>
                <div className="login-icons3"></div>
                <div className="login-icons4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={location_svg} alt="" />
    </div>
  )
}
export default Login