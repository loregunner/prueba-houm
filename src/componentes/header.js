import React from "react";
//import { Link } from 'react-router-dom';
import "./styles/header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Navbar">
          <a className="logo" href="/">
            <span className="font-weight-light">ANIMELIST</span>
          </a>
          <div className="enlaces">
          <a className="Navbar-p" href="/">inicio</a>
          <a className="Navbar-p" href="/contacto">contacto</a>
        </div>
      </div>
    );
  }
}

export default Header;
