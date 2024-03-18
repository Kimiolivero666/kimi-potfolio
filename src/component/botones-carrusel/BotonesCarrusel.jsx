import { useSwiper } from 'swiper/react'
import './botones-carrusel.css'

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const BotonesCarrusel = () => {
    const swiper = useSwiper();
  return (
    <div className='BotonesCarrusel'>
        < IoIosArrowDropleftCircle className='next-prev' onClick={() => swiper.slidePrev()}/>
        <IoIosArrowDroprightCircle className='next-prev' onClick={() => swiper.slideNext()} />
    </div>
  )
}

export default BotonesCarrusel