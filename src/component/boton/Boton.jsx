/* eslint-disable react/prop-types */
import  './boton.css'

// eslint-disable-next-line no-unused-vars
const Boton = (props) => {
  return (
    <div className='boton'>
    <button >{props.name}</button>
    </div>
  )
}

export default Boton