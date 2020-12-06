import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  const style = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>
          <Link style={style} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={style} to="/shop">
            Shop
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
