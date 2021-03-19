import React from "react";
import Header from "./header";

import "../styles/layout.css";

const Layout = ({ children, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <div className="">{children}</div>
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
