import './mainMenu.css'
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const MainMenu = () => {

  const routes = [
    {
        label: 'Inicio',
        icons: IoHomeOutline,
        href: '/',
    },
    {
        label: 'Sobre mi',
        icons: GoPerson,
        href: '/Sobre mi',
    },
    {
        label: 'Trabajos',
        icons: MdOutlineWorkOutline,
        href: '/Trabajos',
    },
    {
        label: 'Contacto',
        icons: IoMailOutline,
        href: '/Contacto',
    },
]

  return (
    <>
    <li>
        {routes.map((route) => (
            <div
            key={route.href}
            href={route.href}
            className='main-menu'>
                <route.icons />
                {route.label}
            </div>
        ))}




    </li>
</>
  )
}

export default MainMenu