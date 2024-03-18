
import {  Container } from 'react-bootstrap'
import './sobreMi.css'
import Titulo from '../../component/titulo/Titulo'
import laptop from '../../assets/Laptop.png'
import Carrusel from '../../component/carrusel/Carrusel'

const SobreMi = () => {
    return (
        <section className='sobre-mi'>
            <div className="sobre-mi-titulo text-center">
                <Titulo titulo='Sobre Mi' />
            </div>
            <div className="contenedor-sobre-mi">
                <Container>
                    
                        <div className='sobre-mi-imagen'>
                            <img src={laptop} alt="" />
                        </div>
                        <div className='sobre-mi-info '>

                            <p>¡Hola! Soy Miguel Olivero, aunque me conocen como KIMI, un apasionado desarrollador front-end con un enfoque creativo y meticuloso en la creación de experiencias web cautivadoras.</p>
                            <p>Mi fascinación por la tecnología y el diseño me impulsa a mantenerme actualizado con las últimas tendencias y mejores prácticas en desarrollo web.</p>
                            <p>Además de mi habilidad técnica, me considero un comunicador efectivo y un solucionador de problemas creativo. Disfruto colaborar en equipos multifuncionales para crear soluciones innovadoras que superen las expectativas del cliente.</p>
                            <p>Cuando no estoy codificando, me puedes encontrar explorando nuevas herramientas y frameworks, o disfrutando de actividades al aire libre. Estoy emocionado por seguir creciendo profesionalmente y contribuir al emocionante mundo del desarrollo web.</p>
                        </div>

                        <Carrusel/>
                </Container>
            </div>
        </section>
    )
}

export default SobreMi