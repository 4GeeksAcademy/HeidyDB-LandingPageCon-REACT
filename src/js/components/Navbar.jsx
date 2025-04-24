import React from "react";

const Navbar = () => {
  return (

    <nav className="navbar navbar justify-content-end  navbar-expand-lg  justify-content-end  navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Start Boostrap</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <li className="nav-item dropdown">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Tipo de dispositivo
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item" href="#">Moviles</a></li>
                  <li><a className="dropdown-item" href="#">Portatiles</a></li>
                </ul>
              </li>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}


export default Navbar;

/*    */