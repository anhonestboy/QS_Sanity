import { Link } from "gatsby";
import React from "react";
import ThemeToggle from "./themeToggle"
import MenuIndex from "./menu"
import Logo from "../../images/MM_logo.inline.svg";
import Pittogramma from "../../images/MM_pitt.inline.svg";

const Header = ({ siteTitle }) => (
  <div className="grid grid-cols-3 w-full h-40">
    <div className="social flex justify-start items-center">
      <div className="relative sm:ml-5 md:ml-10">
        <ThemeToggle />
      </div>
    </div>
    <div className="logo flex justify-center items-center">
      <Link to="/">
      <Logo className="hidden md:block w-72 fill-current text-black dark:text-text_dark" /> 
      <Pittogramma className="sm:block md:hidden w-32 fill-current text-black dark:text-text_dark" /> 
      </Link>
    </div>
    <div className="menu flex justify-self-end items-center sm:mr-2 md:mr-10">
      <nav className="grid grid-flow-col auto-cols-auto h-full w-100 items-center place-items-end">
        <MenuIndex />
      </nav>
    </div>
  </div>

);

export default Header;
