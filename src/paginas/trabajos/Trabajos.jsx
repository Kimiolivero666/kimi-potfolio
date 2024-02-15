
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import Titulo from '../../component/titulo/Titulo';
import './trabajos.css';
import CardTrabajos from '../../component/card-trabajos/CardTrabajos';
import BotonTrabajo from '../../component/boton-trabajo/BotonTrabajo';

// imagenes
import Sneakers1 from '../../assets/Sneakers1.png';
import Lizzy1 from '../../assets/Lizzy1.png';
import Little1 from '../../assets/Little1.png';
import Biatech1 from '../../assets/Biatech1.png';
import Bimex1 from '../../assets/Bimex1.png';
import { useEffect, useState } from 'react';

const Trabajos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='trabajos'>
      <motion.div
        className="trabajos-titulo text-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Titulo titulo='Mis últimos trabajos' />
      </motion.div>
      <Container>
        <div className="contenedor-tarjetas">
          <Row>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <CardTrabajos imagen={Sneakers1} subTitulo='E-commerce' TituloProyecto='SNEAKERS' />
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <CardTrabajos imagen={Lizzy1} subTitulo='E-commerce' TituloProyecto='Lizzy' />
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <CardTrabajos imagen={Little1} subTitulo='Portafolio de agencia' TituloProyecto='Little' />
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <CardTrabajos imagen={Biatech1} subTitulo='Página coorporativa' TituloProyecto='BIATECH' />
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                <CardTrabajos imagen={Bimex1} subTitulo='Página coorporativa' TituloProyecto='BIMEX' />
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2.8 }}
              >
                <CardTrabajos imagen={Sneakers1} subTitulo='Página coorporativa' TituloProyecto='BIMEX' />
              </motion.div>
            </Col>
          </Row>
          <BotonTrabajo />
        </div>
      </Container>
    </div>
  );
};

export default Trabajos;
