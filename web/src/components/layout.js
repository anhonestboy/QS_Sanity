import React from "react";
import Header from "./header/header";
import Helmet from 'react-helmet';


import "../styles/layout.css";


const Layout = ({ children, siteTitle }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/jgd3urv.css" />
    </Helmet>

    <Header siteTitle={siteTitle} />
    <div className="box">{children}</div>
    <footer className="">
      <div className="">
        <div className="">
          &copy; {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      </div>
    </footer>
  </>
);

export default Layout;
