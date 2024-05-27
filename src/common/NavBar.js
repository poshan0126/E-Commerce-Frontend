import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const handleToggleCollapse = () => {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.toggle('show');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/Home">E-Commerce</Link>
        <button className="navbar-toggler" type="button" onClick={handleToggleCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Customers">Customers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Orders">Orders</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
