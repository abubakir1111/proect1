import React, { useRef } from 'react'
import './main.scss'
import location from '../../../assets/img/main-img/location-img.png'
import desk from '../../../assets/img/main-img/desk-img.png'
import hour from '../../../assets/img/main-img/hour-img.png'
import car from '../../../assets/img/main-img/car-img.png'
import card_img1 from '../../../assets/img/main-img/selection-direct-img-hourse1.png'
import card_img2 from '../../../assets/img/main-img/selection-direct-img-hourse2.png'
import card_img3 from '../../../assets/img/main-img/selection-direct-img-hourse3.png'
import card_img4 from '../../../assets/img/main-img/selection-direct-img-hourse4.png'
import card_img5 from '../../../assets/img/main-img/selection-direct-img-hourse5.png'
import card_img6 from '../../../assets/img/main-img/selection-direct-img-hourse6.png'
import main_selection_right_img from '../../../assets/img/main-img/selection-direct-right-hourse-img.png'
import main_selection_left_img from '../../../assets/img/main-img/selection-direct-left-hourse-img.png'
import swiper_img_right from '../../../assets/img/main-img/swiper_img_div_button/Vector_right.png'
import swiper_img_left from '../../../assets/img/main-img/swiper_img_div_button/Vector_left.png'
// import swiper_card1_img1 from '../../../assets/img/main-img/swiper2/swiper-card1-img1.png'
// import swiper_card1_img2 from '../../../assets/img/main-img/swiper2/swiper-card1-img2.png'
// import swiper_card1_img3 from '../../../assets/img/main-img/swiper2/swiper-card1-img3.png'
// import swiper_card1_img4 from '../../../assets/img/main-img/swiper2/swiper-card1-img4.png'
// import swiper_card1_img5 from '../../../assets/img/main-img/swiper2/swiper-card1-img5.png'
import contact_right_img from '../../../assets/img/main-img/contact/Девочка.png'
import archa from '../../../assets/img/main-img/contact/archa.png'
import { swiperBottom, swiperTop } from './main'
import btnvector from '../../../assets/img/main-img/contact/buttonVector.png'
import man1 from '../../../assets/img/main-img/man-img/man1.png'
import man2 from '../../../assets/img/main-img/man-img/man2.png'
import man3 from '../../../assets/img/main-img/man-img/man3.png'
import instagram from '../../../assets/img/main-img/man-img/instagram.png'
import wk from '../../../assets/img/main-img/man-img/vk.png'
import quote from '../../../assets/img/main-img/man-img/quote.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import MainSilder from './mainSilder'

function Main() {
  const swiperBottomRef = useRef(null);
  const swiperTopRef = useRef(null);

  const handleNextClick = () => {
    if (swiperBottomRef.current) swiperBottomRef.current.slideNext();
    if (swiperTopRef.current) swiperTopRef.current.slideNext();
  };

  const handlePrevClick = () => {
    if (swiperBottomRef.current) swiperBottomRef.current.slidePrev();
    if (swiperTopRef.current) swiperTopRef.current.slidePrev();
  };

  return (
    <div className='main-container'>
      <div className="main-container-box">
        <div className="main-text-div">
          <div className="main-text-div-title">
            <p>О нашем клубе</p>
          </div>
          <div className="main-text-div-historiy">
            <div className="main-text-div-historiy-box">
              <div className="main-text-div-historiy-img">
              </div>
              <div className="main-text-div-historiy-text">
                <div className='historiy-text1-div-container'>
                  <div className='historiy-text1-container1'>
                    <div className="historiy-text1-div1">
                      <p>1100+</p>
                      <p>Довольный посетителей за последний год</p>
                    </div>
                    <div className="historiy-text1-div2">
                      <p>20+</p>
                      <p>Выпущенных профессиональных спортсменов за 1 год</p>
                    </div>
                  </div>
                  <div className="historiy-text1-container2">
                    <div className="historiy-text1-div3">
                      <p>50+</p>
                      <p>Проведенных мероприятий за 6 месяцев </p>
                    </div>
                    <div className="historiy-text1-div4">
                      <p>15+</p>
                      <p>Регулярный занятий в неделю с профессиональными наставниками</p>
                    </div>
                  </div>
                </div>
                <div className='historiy-text2-p'>
                  <p> Занятия проводятся индивидуально и в группах, стоимость также будет зависеть от ваших навыков и умений. Более выгодные условия предусмотрены для регулярных занятий при покупке абонементов. Для тех, кто хочет отточить своё мастерство, разработаны программы по специализации (конкур, выездка и другие), участие в соревнованиях и чемпионатах. Для самых маленьких любителей лошадей действуют пони-клубы, где ребята учатся ухаживать за животными и ездить на милых и добрых пони. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-selection-container">
            <div className="main-selection-container-box">
              <div className="main-selection-container-box-text">
                <p>Почему нас выбирают</p>
                <p>Подзаголовок блока</p>
              </div>
              <div className="main-selection-container-img">
                <div className='main-selection-container-div1'>
                  <img src={location} alt="" />
                  <p>Удобное расположение</p>
                  <p>Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться</p>
                </div>
                <div className='main-selection-container-div1'>
                  <img src={desk} alt="" />
                  <p>Обеденная зона </p>
                  <p>Имеется столовая, чтобы Вы могли  перекусить и немного отдохнуть. Бесплатно чай, кофе, печенки.</p>
                </div>
                <div className='main-selection-container-div1'>
                  <img src={hour} alt="" />
                  <p>Профессиональные тренера</p>
                  <p>Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших учеников</p>
                </div>
                <div className='main-selection-container-div1'>
                  <img src={car} alt="" />
                  <p>Бесплатная парковка</p>
                  <p>У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой автомобиль</p>
                </div>
              </div>
            </div>
          </div>
          <div className="main-container-direction">
            <div className="main-container-direction-box">
              <div className="main-container-direction-text">
                <p>Направления клуба </p>
                <p>Подзаголовок блока</p>
              </div>
              <div className="main-selection-direction-card">
                <div className="main-selection-direction-card-box">
                  <div className="main-selection-direction-card-div1">
                    <div className='main-selection-direction-card1'>
                      <div className='main-selection-direction-card1-box'>
                        <img src={card_img1} alt="" />
                        <div className='main-selection-direction-card1-box2'>
                          <p>Уроки верховой езды</p>
                          <div className="main-card-border"></div>
                          <p>Уроки профессиональной верховой езды для любителей и начинающих</p>
                        </div>
                      </div>
                    </div>
                    <div className='main-selection-direction-card2'>
                      <div className='main-selection-direction-card1-box'>
                        <img src={card_img2} alt="" />
                        <div className='main-selection-direction-card1-box2'>
                          <p>Прогулки верхом с тренером</p>
                          <div className="main-card-border"></div>
                          <p>Тренировка клиентов, подготовка занятиям конным спортом на профессиональном уровне под руководством опытных теннеров</p>
                        </div>
                      </div>
                    </div>
                    <div className='main-selection-direction-card1'>
                      <div className='main-selection-direction-card1-box'>
                        <img src={card_img3} alt="" />
                        <div className='main-selection-direction-card1-box2'>
                          <p>Фотосессии</p>
                          <div className="main-card-border"></div>
                          <p>Уроки профессиональной верховой езды для любителей и начинающих</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-selection-direction-card-div2">
                    <div className='main-selection-direction-card2'>
                      <div className='main-selection-direction-card1-box'>
                        <img src={card_img4} alt="" />
                        <div className='main-selection-direction-card1-box2'>
                          <p>Прогулки верхом с тренером </p>
                          <div className="main-card-border"></div>
                          <p>Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров </p>
                        </div>
                      </div>
                    </div>
                    <div className='main-selection-direction-card1'>
                      <div className='main-selection-direction-card1-box'>
                        <img src={card_img5} alt="" />
                        <div className='main-selection-direction-card1-box2'>
                          <p>Фотосессии </p>
                          <div className="main-card-border"></div>
                          <p>Уроки профессиональной верховой езды для любителей и начинающих</p>
                        </div>
                      </div>
                    </div>
                    <div className='main-selection-direction-card2'>
                      <div className='main-selection-direction-card1-box'>
                        <img src={card_img6} alt="" />
                        <div className='main-selection-direction-card1-box2'>
                          <p>огулки</p>
                          <div className="main-card-border"></div>
                          <p>Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className='main-selection-direction-card-box-button'>записаться</button>
                </div>
              </div>
            </div>
            <div className='main-selection-direction-img-div'>
              <img src={main_selection_right_img} alt="" />
              <img src={main_selection_left_img} alt="" />
            </div>
          </div>
          <div>
          </div>
          <div className="main-img-swiper-container"> 
            <div className="main-img-swiper-container-box">
              <p className='main-img-swiper-container-p'>Наши посетители</p>
              <div className="main-img-swiper-container">
                <Swiper
                  onSwiper={(swiper) => (swiperBottomRef.current = swiper)}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={'auto'}
                  spaceBetween={40}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={{ clickable: true, el: '.custom-pagination' }}
                  navigation={false}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                >
                  <div className="main-img-swiper-div1-siper-container1">
                    <SwiperSlide>
                      <div className="main-img-swiper-div1">
                        {swiperBottom.map((imgBottom) =>
                          <img src={imgBottom.img} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-swiper-div1">
                        {swiperBottom.map((imgBottom) =>
                          <img src={imgBottom.img} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-swiper-div1">
                        {swiperBottom.map((imgBottom) =>
                          <img src={imgBottom.img} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <Swiper
                  onSwiper={(swiper) => (swiperTopRef.current = swiper)}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={'auto'}
                  spaceBetween={40}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  pagination={{ clickable: true, el: '.custom-pagination' }}
                  navigation={false}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                >

                  <div className="main-img-swiper-div1-siper-container2">
                    <SwiperSlide >
                      <div className="main-img-swiper-div2">
                        {swiperTop.map((imgTop) =>
                          <img src={imgTop.img} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-swiper-div2">
                        {swiperTop.map((imgTop) =>
                          <img src={imgTop.img} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="main-img-swiper-div2">
                        {swiperTop.map((imgTop) =>
                          <img src={imgTop.img} alt="" />
                        )}
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                {/* <div className="main-img-swiper-div1-swiper-container1">
                  <div className="main-img-swiper-div1">
                    {swiperBottom.map((imgBottom) =>
                      <img src={imgBottom.img} alt="" />
                    )}
                  </div>
                </div>
                <div className="main-img-swiper-div1-swiper-container2">
                  <div className="main-img-swiper-div2">
                    {swiperTop.map((imgTop) =>
                      <img src={imgTop.img} alt="" />
                    )}
                  </div>
                </div> */}
                <div className="main-img-swpier-div1-swiper-btn">
                  <button className="main-swiper-button-right" onClick={handleNextClick}> <img src={swiper_img_right} alt="" /></button>
                  <div className="custom-pagination"></div>
                  <button className="main-swiper-button-left" onClick={handlePrevClick}> <img src={swiper_img_left} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="main-swiper-card-container"> 
                <MainSilder />
          </div>
          <div className="contact">
            <div className="contact-box">
              <div className="contact-right-img">
                <img src={contact_right_img} alt="" />
              </div>
              <div className="contact-left-login">
                <div className="contact-left-login-card">
                  <div className="contact-left-login-card-text-div">
                    <p>Отвечаем на вопросы</p>
                    <p>Мы ответим на все ваши вопросы по телефону,или вы можете записаться на бесплатное пробное занятие</p>
                  </div>
                  <div className="contact-left-login-card-input-div">
                    <input type="text" placeholder='Ваше имя' />
                    <input type="text" placeholder='Ваш телефон' />
                  </div>
                  <div className="contact-left-login-card-button-div">
                    <button>Задать вопрос</button>
                  </div>
                  <div className="contact-left-login-card-checkbox-div">
                    <input type="checkbox" name="" id="2" className='input' />
                    <p>Даю согласие на <label htmlFor="2">обработку данных</label></p>
                  </div>
                </div>
              </div>
              <img src={archa} alt="" className='archa' />
            </div>
          </div>
          <div className="customer">
            <div className="customer-box">
              <div className="customer-text-title">
                <p>О нас говорят клиенты</p>
              </div>
              <div className="customer-card">
                <div className="customer-card1">
                  <div className="customer-card1-box">
                    <div className='customer-card1-text'>
                      <p>Развивает силу, гибкость и координацию всадника; Выпрямляется осанка и повышается стрессоустойчивость; Общение с лошадью лечит умственные отклонения.</p>
                      <button>Подробнее <img src={btnvector} alt="" /></button>
                    </div>
                    <div className='customer-card1-img'>
                      <div className="customer-card1-img-div">
                        <div className="customer-card1-img-man">
                          <img src={man3} alt="" />
                        </div>
                        <div className="customer-card1-text">
                          <p>Валентина Сорокина</p>
                          <div className='customer-img-wk-ins'>
                            <img src={instagram} alt="" />
                            <img src={wk} alt="" />
                          </div>
                        </div>
                      </div>
                      <div >
                        <img src={quote} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="customer-card2">
                  <div className="customer-card2-box">
                    <div className='customer-card2-text'>
                      <p>Развивает силу, гибкость и координацию всадника; Выпрямляется осанка и повышается стрессоустойчивость; Общение с лошадью лечит умственные отклонения.</p>
                      <button>Подробнее <img src={btnvector} alt="" /></button>
                    </div>
                    <div className='customer-card2-img'>
                      <div className="customer-card2-img-div">
                        <div className="customer-card2-img-man">
                          <img src={man1} alt="" />
                        </div>
                        <div className="customer-card2-text">
                          <p>Валентина Сорокина</p>
                          <div className='customer-img-wk-ins'>
                            <img src={instagram} alt="" />
                            <img src={wk} alt="" />
                          </div>
                        </div>
                      </div>
                      <div >
                        <img src={quote} alt="" />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="customer-card2">
                  <div className="customer-card2-box">
                    <div className='customer-card2-text'>
                      <p>Развивает силу, гибкость и координацию всадника; Выпрямляется осанка и повышается стрессоустойчивость; Общение с лошадью лечит умственные отклонения.</p>
                      <button>Подробнее <img src={btnvector} alt="" /></button>
                    </div>
                    <div className='customer-card2-img'>
                      <div className="customer-card2-img-div">
                        <div className="customer-card2-img-man">
                          <img src={man2} alt="" />
                        </div>
                        <div className="customer-card2-text">
                          <p>Валентина Сорокина</p>
                          <div className='customer-img-wk-ins'>
                            <img src={instagram} alt="" />
                            <img src={wk} alt="" />
                          </div>
                        </div>
                      </div>
                      <div >
                        <img src={quote} alt="" />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="customer-card1">
                  <div className="customer-card1-box">
                    <div className='customer-card1-text'>
                      <p>Развивает силу, гибкость и координацию всадника; Выпрямляется осанка и повышается стрессоустойчивость; Общение с лошадью лечит умственные отклонения.</p>
                      <button>Подробнее <img src={btnvector} alt="" /></button>
                    </div>
                    <div className='customer-card1-img'>
                      <div className="customer-card1-img-div">
                        <div className="customer-card1-img-man">
                          <img src={man3} alt="" />
                        </div>
                        <div className="customer-card1-text">
                          <p>Валентина Сорокина</p>
                          <div className='customer-img-wk-ins'>
                            <img src={instagram} alt="" />
                            <img src={wk} alt="" />
                          </div>
                        </div>
                      </div>
                      <div >
                        <img src={quote} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer-box-button">
                <button>
                  <img src={swiper_img_right} alt="" />
                </button>
                <button>
                  <img src={swiper_img_left} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main