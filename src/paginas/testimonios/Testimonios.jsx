import { Col, Row } from 'react-bootstrap';
import TestimoniosCard from '../../component/testimoniosCard/TestimoniosCard';
import Titulo from '../../component/titulo/Titulo'
import './testimonios.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// imagenes
import Alexander from '../../assets/Alexandre.gif'
import Waola from '../../assets/Waola.gif'
import Miguel from '../../assets/Miguel.gif'


const Testimonios = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className='testimonios'>
            <motion.div
                className="testimonios-titulo text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Titulo titulo='Testimonios' />
            </motion.div>

            <div className="contenedor-tarjetas">
                <Row>
                    <Col lg={2}></Col>
                    <Col xs={12} lg={8} className='mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <TestimoniosCard testimonio='Muy profesional y serio. Todo un placer trabajar con el. Volveremos a trabajar con el en el futuro' imgTestimonio="https://img.freepik.com/foto-gratis/retrato-empleado-feliz-volver-al-trabajo_23-2148727616.jpg?w=1060&t=st=1708024332~exp=1708024932~hmac=474d8225a13b46725abdb2b05b361e0db52624e3e565a60b8ba146af254cbad9" nombre='Borja' cliente="INTERFUNERARIAS" />
                        </motion.div>
                    </Col>
                </Row>
                <Row>

                    <Col lg={2}></Col>
                    <Col xs={12} lg={8} className='mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <TestimoniosCard testimonio='La experiencia al trabajar con Miguel ha sido muy buena. Realizó el trabajo solicitado correctamente y hubo buena comunicación. También estuvo dispuesto a hacer los cambios que le pedimos y se esforzó por cumplir con los plazos. Le tendremos en cuenta para más proyectos en el futuro.' imgTestimonio={Waola} nombre='Woala' cliente="WOA" />
                        </motion.div>
                    </Col>
                </Row>
                <Row>
                <Col lg={2}></Col>
                <Col xs={12} lg={8} className='mb-3'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 1.5 }}
                    >
                        <TestimoniosCard testimonio='Kimi (Miguel) es un gran profesional, estamos muy contentos con el trabajo realizado y el trato, seguiremos contando con él para próximos proyectos. Lo recomiendo sin ninguna duda.' imgTestimonio={Alexander} nombre='Alexandre' cliente="EVENTS ARENA" />
                    </motion.div>
                </Col>
                </Row>
                <Row>
                <Col lg={2}></Col>
                <Col xs={12} lg={8} className='mb-3'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 2 }}
                    >
                        <TestimoniosCard testimonio='Rigor, seriedad, rapidez y profesionalidad. Inmejorable.' imgTestimonio={Miguel} nombre='Miguel' cliente="GRUPO MAINJOBS" />
                    </motion.div>
                </Col>

            </Row>

        </div>


        </section >
    )
}

export default Testimonios