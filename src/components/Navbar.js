import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
      <div className='header'>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <div className="container-fluid" >
            <Link className="navbar-brand" style={{color: 'white'}} to="/">Inicio</Link>
            <button
              className="navbar-toggler bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row  align-items-end" >
                <li className="nav-item">
                  <Link className="nav-link" style={{color: 'white'}} to="/iniciarSesion">Iniciar Sesion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color: 'white'}} to="/registro">Registro</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color: 'white'}} to="/pedidos">Pedidos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{color: 'white'}} to="/servicioAlCliente">Servicio al Cliente</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}
export default Navbar;
