
import { useState } from "react";
import MainMenu from "../mainMenu/MainMenu";
import "./sidebar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import Logo from "../logo/Logo";

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
      <div className={`sidebar ${menuVisible ? 'd-block' : 'd-none'} d-xl-block`}>
        <Logo />
        <section>
          <MainMenu />
        </section>
      </div>
    </>
  );
};

export default Sidebar;
