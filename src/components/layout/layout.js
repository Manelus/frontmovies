import React from "react";
import { NavLink, Link, Outlet} from "react-router-dom";

function Layout() {
  let activeClassName = "underline"
  let liClassName = "nav-item";
  let navLink = "nav-link";
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-brand">Gat i gos</button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/">Home</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/about">Nosotros</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/contact" >Contact</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/login">Login</NavLink>
            </li>
            <li className={liClassName}>
              <NavLink className={({ isActive }) =>
                  isActive ? (navLink + ' ' + activeClassName) : navLink
              } to="/register">Register</NavLink>
            </li>
            
          </ul>
        </div>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <div className="container-fluid vh-100">
        <div className="inner-margin">
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;