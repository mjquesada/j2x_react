import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roster">Roster</Link>
        </li>
        <li>
          <Link to="/force">Force Disposition</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;