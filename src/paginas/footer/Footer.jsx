import Logo from '../../component/logo/Logo'
import './footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="contenedor-footer">
            <p>© 2024 Kimi. Todos los derechos reservados</p>
            <div className="logo-footer">
            <Logo/>
            </div>
            
            </div>
           
        </div>
    )
}

export default Footer