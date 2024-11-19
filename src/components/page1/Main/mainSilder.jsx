import React, { useRef } from 'react'
import swiper_card1_img1 from '../../../assets/img/main-img/swiper2/swiper-card1-img1.png'
import swiper_card1_img2 from '../../../assets/img/main-img/swiper2/swiper-card1-img2.png'
import swiper_card1_img3 from '../../../assets/img/main-img/swiper2/swiper-card1-img3.png'
import swiper_card1_img4 from '../../../assets/img/main-img/swiper2/swiper-card1-img4.png'
import swiper_card1_img5 from '../../../assets/img/main-img/swiper2/swiper-card1-img5.png'
import swiper_img_right from '../../../assets/img/main-img/swiper_img_div_button/Vector_right.png'
import swiper_img_left from '../../../assets/img/main-img/swiper_img_div_button/Vector_left.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

function MainSilder() {

  const swiperRef = useRef(null);

  const handleLeftClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); 
    }
  };

  const handleRightClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); 
    }
  };
  return (
    <div className="main-swiper-card-container-box">
      <div className="main-swiper-card-box">
        <Swiper
        ref={swiperRef}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2.8}
          spaceBetween={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}

          navigation={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          pagination={{ clickable: true, el: '.swiper2' }}

          className='swiper-card'
        >
          <SwiperSlide>
            <div className="card1">
              <div className='card1-div-img-box'>
                <img src={swiper_card1_img1} alt="" />
              </div>
              <div className='card1-text'>
                <p className='card1-text-title'>Жазель</p>
                <div className='card1-border'></div>
                <p className='card1-text-desciription'>Уроки профессиональной верховой езды для любителей и начинающих</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card2">
              <img src={swiper_card1_img2} alt="" />
              <div className='card2-text'>
                <p className='card2-text-title'>Юджин</p>
                <div className='card2-border'></div>
                <p className='card2-text-desciription'>Уроки профессиональной верховой езды для любителей и начинающих</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card2">
              <img src={swiper_card1_img3} alt="" />
               <div className='card2-text'>
                <p className='card2-text-title'>Мелисса</p>
                <div className='card2-border'></div>
                <p className='card2-text-desciription'>Уроки профессиональной верховой езды для любителей и начинающих</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card2">
              <img src={swiper_card1_img4} alt="" />
             <div className='card2-text'>
                <p className='card2-text-title'>Циан</p>
                <div className='card2-border'></div>
                <p className='card2-text-desciription'>Уроки профессиональной верховой езды для любителей и начинающих</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1">
            <div className='card1-div-img-box'>
                <img src={swiper_card1_img5} alt="" />
              </div>
              <div className='card1-text'>
                <p className='card1-text-title'>Хесана</p>
                <div className='card1-border'></div>
                <p className='card1-text-desciription'>Уроки профессиональной верховой езды для любителей и начинающих</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        <div className='main-swiper-card-container-box-button'>
        <button onClick={handleLeftClick}><img src={swiper_img_right} alt="" /></button>
        <div className='swiper2'></div>
        <button onClick={handleRightClick}><img src={swiper_img_left} alt="" /></button>
        </div>
    </div>
  )
}

export default MainSilder