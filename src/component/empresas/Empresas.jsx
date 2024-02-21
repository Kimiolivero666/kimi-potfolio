import Titulo from '../titulo/Titulo'
import './empresas.css'

// imagenes
import fiverr from '../../assets/fiverr.png'
import upwork from '../../assets/upwork.png'
import freelancer from '../../assets/freelancer.png'
import malt from '../../assets/malt.png'

const Empresas = () => {
  return (
    <div className='Empresas'>
        <div className="empresas-titulo text-center">
        <Titulo titulo='Empresas'/>
        </div>
        <div className="logos-empresas">
            <img src={fiverr} alt="" />
            <img src={upwork} alt="" />
            <img src={freelancer} alt="" />
            <img src={malt} alt="" />
        </div>
        
    </div>
  )
}

export default Empresas