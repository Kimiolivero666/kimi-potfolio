/* eslint-disable react/prop-types */
import './titulo.css'

const Titulo = (props) => {
  return (
    <div>
        <h2 className='titulo'>{props.titulo}</h2>
    </div>
  )
}

export default Titulo