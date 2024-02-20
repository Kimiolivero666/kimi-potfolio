/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './testimoniosCard.css'

const TestimoniosCard = (props) => {
  return (
    <div className='TestimoniosCard'>
        <p>{props.testimonio}</p>
        <div className="contenedor-imagen-titulo">
        <div className='imagen-testimonio'>
            <img src={props.imgTestimonio} alt="Image" />
        </div>
        <div className='contenedor-titulos'>
        <h3 className='titulo-testimonio'>{props.nombre}</h3>
        <h5 className='subtitulo-testimonio'>{props.cliente}</h5>
        </div>
        </div>
    </div>
  )
}

export default TestimoniosCard