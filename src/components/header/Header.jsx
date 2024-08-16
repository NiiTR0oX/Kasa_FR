import React from "react";
import "./header.scss";
import logo from "./../../assets/images/logo/LOGO.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="containernav">
        <a href="#">
          <img src={logo} alt="KASA" />
        </a>
        <nav className="main_nav">
          <ul>
            <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/a-propos"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
