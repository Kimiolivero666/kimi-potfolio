import { Col, Row } from 'react-bootstrap';
import TestimoniosCard from '../../component/testimoniosCard/TestimoniosCard';
import Titulo from '../../component/titulo/Titulo'
import './testimonios.css'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
                    <Col xs={12} sm={6} lg={6} className='mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <TestimoniosCard />
                        </motion.div>
                    </Col>

                    <Col xs={12} sm={6} lg={6} className='mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <TestimoniosCard />
                        </motion.div>
                    </Col>

                    <Col xs={12} sm={6} lg={6} className='mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1.5 }}
                        >
                            <TestimoniosCard />
                        </motion.div>
                    </Col>

                    <Col xs={12} sm={6} lg={6} className='mb-3'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 2 }}
                        >
                            <TestimoniosCard />
                        </motion.div>
                    </Col>

                </Row>

            </div>


        </section>
    )
}

export default Testimonios