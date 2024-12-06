import React from "react";
import "./Navbar.css"; // Import the external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h1>Ticketing System</h1>
      </div>

      {/* Menu Items */}
      <ul className="navbar-menu">
        <li className="navbar-menu-item">Customer</li>
        <li className="navbar-menu-item">Login</li>
        <li className="navbar-menu-item">Vendor</li>
      </ul>
    </nav>
  );
};

export default Navbar;
