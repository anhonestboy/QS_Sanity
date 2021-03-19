import { Link } from "gatsby";
import React from "react";
import logo from "../images/MMlogo.png"

import MenuIndex from "./menu"

const Header = ({ siteTitle }) => (
  <div className="flex items-center flex-row h-40">
    <div className="social flex-grow justify-self-start">
    </div>
    <div className="logo flex-grow-0 justify-self-center">
      <Link to="/">
        <img src={logo} alt={siteTitle} className="w-60" />
      </Link>
    </div>
    <div className="menu flex-grow justify-self-end">
      <MenuIndex />
    </div>
  </div>

);

export default Header;
