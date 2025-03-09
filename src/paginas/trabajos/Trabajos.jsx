
import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import Titulo from '../../component/titulo/Titulo';
import './trabajos.css';
import CardTrabajos from '../../component/card-trabajos/CardTrabajos';
import BotonTrabajo from '../../component/boton-trabajo/BotonTrabajo';

// imagenes
import Sneakers1 from '../../assets/Sneakers1.png';
import RubenNani from '../../assets/RubenNani.png';
import Little1 from '../../assets/Little1.png';
import Biatech1 from '../../assets/Biatech1.png';
import Bimex1 from '../../assets/Bimex1.png';
import Chimichurri from '../../assets/Chimichurri.png';

import { useEffect, useState } from 'react';

const Trabajos = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div id='Trabajos' className='trabajos'>
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
                <a className='href' href="https://bespoke-muffin-92519d.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <CardTrabajos imagen={Sneakers1} subTitulo='E-commerce' TituloProyecto='SNEAKERS' />
                </a>
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a className='href' href="https://rubennaniseguros.com/" target="_blank" rel="noopener noreferrer">
                  <CardTrabajos imagen={RubenNani} subTitulo='Página coorporativa' TituloProyecto='Ruben Nani Seguros' />
                </a>
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <a className='href' href="https://scintillating-clafoutis-f72b00.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <CardTrabajos imagen={Little1} subTitulo='Portafolio de agencia' TituloProyecto='Little' />
                </a>
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <a className='href' href="https://jocular-salmiakki-8c36a7.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardTrabajos imagen={Biatech1} subTitulo='Página coorporativa' TituloProyecto='BIATECH' />
                </a>
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                <a className='href' href="https://fastidious-hummingbird-811a16.netlify.app/" target="_blank" rel="noopener noreferrer">
                <CardTrabajos imagen={Bimex1} subTitulo='Página coorporativa' TituloProyecto='BIMEX' />
                </a>
              </motion.div>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 2.8 }}
              >
                <a className='href' href="https://sweet-yeot-93b750.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <CardTrabajos imagen={Chimichurri} subTitulo='Página coorporativa' TituloProyecto='CHIMICHURRI' />
                </a>
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
