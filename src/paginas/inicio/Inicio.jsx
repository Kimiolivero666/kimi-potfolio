import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import './inicio.css';
import kimi from '../../assets/Kimi.png';

const Inicio = () => {
    return (
        <div className='inicio'>
            <Container>
                <Row>
                    <Col md={5} className='contenedor-imagen-hero'>
                        <img className='imagen-hero' src={kimi} alt="" />
                    </Col>
                    <Col md={7} >
                        <div className="contenido-text-hero">
                            <motion.div 
                                className="box-titulo-hero"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }} // Aplica un pequeño retraso
                            >
                                <div className='div'></div>
                                <h1>KIMI OLIVERO</h1>
                            </motion.div>
                            <motion.div 
                                className="box-subtitulo-hero"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }} // Incrementa el retraso
                            >
                                <h3>PROGRAMADOR FRONT-END</h3>
                                <p>Mi enfoque se ecentra en combinar diseño
                                    elegante con una implementación técnica sólida
                                    para brindar a los usuarios una experiencia única.</p>
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Inicio;
