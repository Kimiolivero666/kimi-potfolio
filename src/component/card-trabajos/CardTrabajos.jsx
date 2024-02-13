/* eslint-disable react/prop-types */

import './cardTrabajos.css';


const CardTrabajos = (props) => {
  return (
    <div className='CardTrabajos'>
      <div className='zoom-container'>
        <img src={props.imagen} alt="" className='img-card' />
      </div>
      <div className='titulo-sub-tarjeta titulo-sub-tarjeta-hover'>
        <h5>{props.subTitulo}</h5>
        <h3>{props.TituloProyecto}</h3>
      </div>
    </div>
  )
}

export default CardTrabajos;
