import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='header'>
      <nav className="navbar fixed-top navbar-expand-lg">
        <a className="navbar-brand text-light" href="#">Inicio</a>
        <button className="navbar-toggler bg-secondary" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-light" href="culture.html">OCASIONES <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">FLORES</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 actions">
            <input className="form-control mr-sm-2" type="search" placeholder="ej. Rosas, arreglos" />
            <button className="btn btn-outline-secondary my-2 my-sm-0 text-light" type="submit">BUSCAR</button>
          </form>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;