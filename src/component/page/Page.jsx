
import Contacto from "../../paginas/contacto/Contacto"
import Empresas from "../../paginas/empresas/Empresas"
import Inicio from "../../paginas/inicio/Inicio"
import SobreMi from "../../paginas/sobre mi/SobreMi"
import Testimonios from "../../paginas/testimonios/Testimonios"
import Trabajos from "../../paginas/trabajos/Trabajos"

import './page.css'


const Page = () => {
  return (
    
    <div className="page">
    <Inicio/>
    <SobreMi/>
    <Trabajos/>
    <Testimonios/>
    <Empresas/>
    <Contacto/>
    </div>
    

  )
}

export default Page