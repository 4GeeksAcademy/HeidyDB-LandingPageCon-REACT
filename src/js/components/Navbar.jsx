import React from "react";

const Navbar = () => {
  return (

    <nav className="navbar navbar  navbar-expand-lg  navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"> </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Start Boostrap</a>
        </div>

        <div className="justify-content-end collapse navbar-collapse" id="navbarTogglerDemo01" > 
          <ul className="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
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