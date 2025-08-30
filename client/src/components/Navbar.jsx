import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/siesLogo.png";

export default function Navbar() {
  return (
   <>
        <NavLink to='/' className="pl-4 pt-4">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </NavLink>
   </>
  );
}