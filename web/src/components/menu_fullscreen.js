import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faBehance } from '@fortawesome/free-brands-svg-icons'
import { Helmet } from "react-helmet";


const MenuFullScreen = () => {

    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                behance
                instagram
              }
            }
          }
        `
      )
      const { instagram, behance } = data.site.siteMetadata;


    const ListLink = props => (
        <div className="transform hover:transition duration-500 hover:scale-98">
            <Link to={props.to}>{props.children}</Link>
        </div> 
      )

    return (
      <>
      <Helmet>
        <style type="text/css">
          {`body {overflow-y:hidden}`}
        </style>
      </Helmet>

      <div className="bg-background bg-opacity-50 w-screen h-screen">
      </div>
        
        
        <div className="container absolute inset-y-0 right-0 flex flex-grow w-80vh h-screen bg-accent">
            <div className="menu_container self-stretch w-full grid grid-cols-1 font-serif uppercase sm:text-10vw md:text-10vh">
                <div></div>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/projects">Projects</ListLink>
                <ListLink to="/selected">Selected</ListLink>
                <ListLink to="/about">About</ListLink>
                <div>
                <Link to={behance}>
                  
                    <FontAwesomeIcon icon={faBehance} size="1x" className="p-5 max-w-3 min-w-1 text-10vh transform hover:transition duration-500 hover:scale-98" />
                </Link>    
                
                <Link to={instagram}> 
                    <FontAwesomeIcon icon={faInstagram} size="1x" className="p-5 max-w-3 text-10vh transform hover:transition duration-500 hover:scale-98"/>
                </Link>
                </div>
                <div>
                    <p className="text-xs tracking-wide	text-white opacity-50 cursor-default">©{new Date().getFullYear()} Mary & Maurizio<br />photographers & Art Directors</p>
                    <p className="text-xs tracking-wide	text-white opacity-50 cursor-default"><a href="mailto:contact@maryandmaurizio.com" >contact@maryandmaurizio.com</a></p>
                </div>
                <div></div>
            </div>
        </div>

     
     </>
    )
};


export default MenuFullScreen