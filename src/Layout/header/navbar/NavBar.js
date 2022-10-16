import React from "react";
import cls from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={cls["navbar-design"]}>
      <NavLink 
        activeClassName={cls["activeLink"]}
        className={cls["link"]}
        to="/" exact
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

      <NavLink
        activeClassName={cls["activeLink"]}
        className={cls["link"]}
        to="/login"
      >
        Login
      </NavLink>


      <NavLink
        activeClassName={cls["activeLink"]}
        className={cls["link"]}
        to="/contact_us"
      >
        contact Us
      </NavLink>
    </div>
  );
};

export default NavBar;
