const Logo = () => {
    const handleScrollToTop = () => {
      const inicio = document.getElementById("inicio");
      if (inicio) {
        inicio.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <section className="contenedor" >
        <h1 className="brand" onClick={handleScrollToTop} style={{ cursor: "pointer" }}>Kimi Olivero</h1>
        <h3 className="sub-titulo">Desarrollador Web</h3>
      </section>
    );
  };
  
  export default Logo;
  