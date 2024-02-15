import './testimoniosCard.css'

const TestimoniosCard = () => {
  return (
    <div className='TestimoniosCard'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis odit dolorem ad velit? Placeat asperiores omnis accusamus. Animi natus ad quos, consequuntur suscipit.</p>
        <div className="contenedor-imagen-titulo">
        <div className='imagen-testimonio'>
            <img src="https://img.freepik.com/foto-gratis/retrato-empleado-feliz-volver-al-trabajo_23-2148727616.jpg?w=1060&t=st=1708024332~exp=1708024932~hmac=474d8225a13b46725abdb2b05b361e0db52624e3e565a60b8ba146af254cbad9" alt="Image" />
        </div>
        <div className='contenedor-titulos'>
        <h3 className='titulo-testimonio'>John Smith</h3>
        <h5 className='subtitulo-testimonio'>SEO amazon</h5>
        </div>
        </div>
    </div>
  )
}

export default TestimoniosCard