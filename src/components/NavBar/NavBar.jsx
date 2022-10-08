import React from "react";
import CartWidget from "./CartWidget";
import navbar from "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="menu">
      <ul className="navbar">
        <Link to="/" className="list">
          <li>Inicio</li>
        </Link>
        <Link href="#" className="list">
          <li>Ofertas</li>
        </Link>
        <Link href="#" className="list">
          <li>Articulos por Encargo</li>
        </Link>
        <Link href="#" className="list">
          <li>Contacto</li>
        </Link>
        <Link href="#" className="list">
        <CartWidget/>
        </Link>
      </ul>
      
    </nav>
  );
}
export default NavBar;