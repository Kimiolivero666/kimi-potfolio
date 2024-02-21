
import Inicio from "../../paginas/inicio/Inicio"
import Testimonios from "../../paginas/testimonios/Testimonios"
import Trabajos from "../../paginas/trabajos/Trabajos"
import Empresas from "../empresas/Empresas"
import './page.css'


const Page = () => {
  return (
    
    <div className="page">
    <Inicio/>
    <Trabajos/>
    <Testimonios/>
    <Empresas/>
    </div>
    

  )
}

export default Page