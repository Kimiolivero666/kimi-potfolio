import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import './carrusel.css'

// iconos
import illustrator from '../../assets/carrusel/Ai.png'
import photoshop from '../../assets/carrusel/Ps.png'
import figma from '../../assets/carrusel/Figma.png'
import wordpress from '../../assets/carrusel/wordpress.png'
import html from '../../assets/carrusel/HTML5.png'
import css from '../../assets/carrusel/CSS.png'
import sass from '../../assets/carrusel/SASS.png'
import bootstrap from '../../assets/carrusel/Bootsrap.png'
import tailwind from '../../assets/carrusel/Tallwind.png'
import git from '../../assets/carrusel/Git.png'
import github from '../../assets/carrusel/HitHub.png'
import js from '../../assets/carrusel/JS.png'
import React from '../../assets/carrusel/React.png'
import redux from '../../assets/carrusel/redux.png'
import next from '../../assets/carrusel/next.png'
import ts from '../../assets/carrusel/TS.png'
import angular from '../../assets/carrusel/angular.png'
import BotonesCarrusel from '../botones-carrusel/BotonesCarrusel';




const Carrusel = () => {
    return (
        <Swiper className='carrusel'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3} 

            breakpoints={{
                //  breakpoints para ajustar slidesPerView para tamaños de pantalla más pequeños
                768: {
                    slidesPerView: 6, 
                    spaceBetween: 10 
                },
                968: {
                    slidesPerView: 8,
                    spaceBetween: 10 
                }
            }}
        
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><div className="icono-carrusel"><img src={illustrator} alt="" /><h6>Illustrator</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={photoshop} alt="" /><h6>Photoshop</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={figma} alt="" /><h6>Figma</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={wordpress} alt="" /><h6>Wordpress</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={html} alt="" /><h6>HTML5</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={css} alt="" /><h6>CSS3</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={sass} alt="" /><h6>SASS</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={bootstrap} alt="" /><h6>Boostratp</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={tailwind} alt="" /><h6>Tailwind</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={git} alt="" /><h6>Git</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={github} alt="" /><h6>GitHub</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={js} alt="" /><h6>Javascript</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={React} alt="" /><h6>React</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={redux} alt="" /><h6>Redux</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={next} alt="" /><h6>Next</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={ts} alt="" /><h6>TypeScript</h6></div></SwiperSlide>
            <SwiperSlide><div className="icono-carrusel"><img src={angular} alt="" /><h6>Angular</h6></div></SwiperSlide>
            <BotonesCarrusel/>
        </Swiper>
    )
}

export default Carrusel