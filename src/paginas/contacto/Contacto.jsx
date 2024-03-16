import { Col, Container, Row } from 'react-bootstrap'
import Formulario from '../../component/formulario/Formulario'
import Titulo from '../../component/titulo/Titulo'
import './contacto.css'

// iconos
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contacto = () => {
    return (
        <div className='Contacto'>
            <div className="contacto-titulo text-center">
                <Titulo titulo='Contáctame' />
            </div>
            <div className="contacto-subtitulo text-center">
                <p>¡Gracias por visitar mi portafolio! No dudes en ponerte en contacto si tienes alguna pregunta o proyecto interesante en mente.

</p>
            </div>
            <Container>
                <Row>
                    <Col md={3} className='contenedor-iconos-contacto'>
                        <div className="iconos-contacto">
                            <FaLinkedinIn className="icono" />
                            <FiGithub className="icono" />
                            <MdOutlineEmail className="icono" />
                            <FaWhatsapp className="icono" />
                        </div>
                    </Col>
                    <Col md={6}> <Formulario /></Col>
                    <Col md={3}></Col>
                </Row>
            </Container>

        </div>
    )
}

export default Contacto