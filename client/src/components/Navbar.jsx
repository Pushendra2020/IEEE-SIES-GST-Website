import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/siesLogo.png";

export default function Navbar() {
  return (
   
        <NavLink to='/' className="inline">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </NavLink>
  );
}