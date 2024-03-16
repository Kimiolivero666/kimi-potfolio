
import { Row, Col, Container } from 'react-bootstrap'
import './sobreMi.css'
import Titulo from '../../component/titulo/Titulo'
import laptop from '../../assets/Laptop.png'

const SobreMi = () => {
    return (
        <div className='sobre-mi'>
            <div className="contenedor-sobre-mi">
                <Container>
                    <Row>
                        <Col md={6} className='sobre-mi-imagen'>
                            <img src={laptop} alt="" />
                        </Col>
                        <Col md={6} className='sobre-mi-info'>
                            <Titulo titulo='Sobre Mi' />
                            <p>¡Hola! Soy Miguel Olivero, aunque me conocen como KIMI, un apasionado desarrollador front-end con un enfoque creativo y meticuloso en la creación de experiencias web cautivadoras.</p>
                            <p>Mi fascinación por la tecnología y el diseño me impulsa a mantenerme actualizado con las últimas tendencias y mejores prácticas en desarrollo web.</p>
                            <p>Además de mi habilidad técnica, me considero un comunicador efectivo y un solucionador de problemas creativo. Disfruto colaborar en equipos multifuncionales para crear soluciones innovadoras que superen las expectativas del cliente.</p>
                            <p>Cuando no estoy codificando, me puedes encontrar explorando nuevas herramientas y frameworks, o disfrutando de actividades al aire libre. Estoy emocionado por seguir creciendo profesionalmente y contribuir al emocionante mundo del desarrollo web.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default SobreMi