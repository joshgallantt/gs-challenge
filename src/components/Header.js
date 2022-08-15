import React from "react";
import "./css/Header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="Gymshark Logo" />
      <div className="header-title">Gymshark Exercises</div>
    </header>
  );
};

export default Header;
