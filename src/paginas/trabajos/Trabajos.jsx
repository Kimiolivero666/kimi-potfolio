import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import Titulo from '../../component/titulo/Titulo';
import './trabajos.css';
import CardTrabajos from '../../component/card-trabajos/CardTrabajos';

// imagenes
import Sneakers1 from '../../assets/Sneakers1.png'
import Lizzy1 from '../../assets/Lizzy1.png'
import Little1 from '../../assets/Little1.png'

const Trabajos = () => {
  return (
    <div className='trabajos'>
      <motion.div 
        className="trabajos-titulo text-center"
        initial={{ y: 100, opacity: 0 }} // Posición inicial del título (abajo y no visible)
        animate={{ y: 0, opacity: 1 }} // Posición final del título (arriba y completamente visible)
        transition={{ duration: 0.5, delay: 0.3 }} // Duración de la animación y retraso
      >
        <Titulo titulo='Mis últimos trabajos' />
      </motion.div>
      <Container>
        <div className="contenedor-tarjetas">
          <Row>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <CardTrabajos imagen={Sneakers1} subTitulo='E-commerce' TituloProyecto='SNEAKERS'/>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <CardTrabajos imagen={Lizzy1} subTitulo='E-commerce' TituloProyecto='Lizzy'/>
            </Col>
            <Col xs={12} sm={6} lg={4} className="text-center">
              <CardTrabajos imagen={Little1} subTitulo='Portafolio de agencia' TituloProyecto='Little'/>
            </Col>
          </Row>
          <Row>
   <Col xs={12} sm={6} lg={4} className="text-center">
     <CardTrabajos />
   </Col>
   <Col xs={12} sm={6} lg={4} className="text-center">
     <CardTrabajos />
   </Col>
   <Col xs={12} sm={6} lg={4} className="text-center">
     <CardTrabajos />
   </Col>
 </Row>
        </div>
      </Container>
    </div>
  )
}

export default Trabajos;
