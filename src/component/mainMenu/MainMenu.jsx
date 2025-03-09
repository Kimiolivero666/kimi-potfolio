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
            id: 'inicio',
        },
        {
            label: 'Sobre mi',
            icons: GoPerson,
            id: 'sobre-mi'
        },
        {
            label: 'Trabajos',
            icons: MdOutlineWorkOutline,
            id: 'Trabajos',
        },
        {
            label: 'Contacto',
            icons: IoMailOutline,
            id: 'Contacto',
        },
    ]

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <>
            <li>
                {routes.map((route) => (
                    <div
                        key={route.id}
                        onClick={() => handleScroll(route.id)}
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