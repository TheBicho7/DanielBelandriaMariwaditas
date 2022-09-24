import React from "react";
import CartWidget from "./CartWidget";
import navbar from "./navbar.css";

function NavBar() {
  return (
    <nav className="menu">
      <ul className="navbar">
        <a href="#" className="list">
          <li>Inicio</li>
        </a>
        <a href="#" className="list">
          <li>Ofertas</li>
        </a>
        <a href="#" className="list">
          <li>Articulos por Encargo</li>
        </a>
        <a href="#" className="list">
          <li>Contacto</li>
        </a>
        <a href="#" className="list">
        <CartWidget/>
        </a>
      </ul>
      
    </nav>
  );
}
// export NavBar -> Importarlo desde App -> renderizarlo
export default NavBar;