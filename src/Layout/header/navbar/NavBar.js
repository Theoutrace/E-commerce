import React from "react";
import cls from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={cls["navbar-design"]}>
      <NavLink 
        activeClassName={cls["activeLink"]}
        className={cls["link"]}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName={cls["activeLink"]}
        className={cls["link"]}
        to="/store"
      >
        store
      </NavLink>
      <NavLink
        activeClassName={cls["activeLink"]}
        className={cls["link"]}
        to="/about"
      >
        about
      </NavLink>
    </div>
  );
};

export default NavBar;
