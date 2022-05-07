import React from "react";
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img
        src={logo}
        alt="logo"
        className="nav--logo"
      />
      <h3 className="nav--title">my travel journal.</h3>
    </nav>
  )
}

export default Navbar;