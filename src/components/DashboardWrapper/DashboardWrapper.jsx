import React from "react";
import { Link } from "react-router-dom";
import style from "./wrapper.module.css";
import Logo from "../../assets/img/logo.png";

const DashboardWrapper = ({ children }) => {
  return (
    <div>
      <nav className={style.nav}>
        <div>
          <img className={style.logo} src={Logo} alt="logo" />
        </div>
        <Link to="/dashboard">Tus links</Link>
        <Link to="/dashboard/profile">Perfil</Link>
        <Link to="/signout">Sign Out</Link>
      </nav>
      <div className="main-container">{children}</div>
    </div>
  );
};

export default DashboardWrapper;
