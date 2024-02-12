import { motion } from "framer-motion";
import { Col, Container, Row } from 'react-bootstrap';
import './inicio.css';
import kimi from '../../assets/Kimi.png';
import kimiMovile from '../../assets/Kimi-movile.jpg';
// iconos
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Boton from "../../component/boton/Boton";

const Inicio = () => {
    return (
        <div className='inicio'>
            <Container>
                <Row>
                    <Col lg={5} className='contenedor-imagen-hero d-none d-lg-block'>
                        <motion.img
                            className='imagen-hero'
                            src={kimi}
                            alt=""
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        />
                    </Col>
                    <Col lg={7} >
                        <div className="contenido-text-hero">
                            <motion.div
                                className="box-titulo-hero"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <div className='div'></div>
                                <h1>KIMI OLIVERO</h1>
                            </motion.div>
                            <motion.div
                                className="box-subtitulo-hero"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h3>PROGRAMADOR FRONT-END</h3>
                                <p>Mi enfoque se ecentra en combinar diseño
                                    elegante con una implementación técnica sólida
                                    para brindar a los usuarios una experiencia única.</p>
                            </motion.div>

                            <motion.div
                                className="iconos-redes"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <FaLinkedinIn className="icono" />
                                <FiGithub className="icono" />
                                <MdOutlineEmail className="icono" />
                                <FaWhatsapp className="icono" />
                            </motion.div>

                            <motion.div
                                className="boton"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 1.4 }}
                            >
                                <Boton />
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="d-block d-lg-none text-center imagen-movile">
                <img src={kimiMovile} alt="" />
            </div>
        </div>
    );
}

export default Inicio;
