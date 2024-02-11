
import { useState } from "react";
import MainMenu from "../mainMenu/MainMenu";
import "./sidebar.css";
import { HiBars3BottomRight } from "react-icons/hi2";

const Sidebar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {/* Nuevo div para el fondo gris transparente */}
      {menuVisible && (
        <div className="sidebar-overlay" onClick={toggleMenu}></div>
      )}
      <div className="bars d-block d-xl-none" onClick={toggleMenu}>
        <HiBars3BottomRight />
      </div>
      <div className={`sidebar fixed ${menuVisible ? 'd-block' : 'd-none'} d-xl-block`}>
        <section className='contenedor'>
          <h1 className='brand'>Kimi Olivero</h1>
          <h3 className='sub-titulo'>Desarrollador Web</h3>
        </section>
        <section>
          <MainMenu />
        </section>
      </div>
    </>
  );
};

export default Sidebar;
