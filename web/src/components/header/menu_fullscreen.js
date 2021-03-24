import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faBehance, faPinterest } from '@fortawesome/free-brands-svg-icons'
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
        <div className="font-sans font-bold text-text_dark uppercase transform translate hover:transition duration-150 hover:translate-x-1.5">
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

      <div className="bg-background bg-opacity-90 w-screen h-screen">
      </div>
        
        
        <div className="absolute w-screen md:w-80vw h-screen inset-y-0 right-0 flex flex-grow bg-accent dark:bg-background_dark">
            <div className="absolute bottom-0 left-0 w-50vw ml-5 mb-10 md:ml-40 mt-20 self-stretch overflow-y-scroll">
                <div></div>
                <ListLink to="/">
                  <span className="sm:text-2vh md:text-2vw">Home</span>
                </ListLink>
                <ListLink to="/portfolio">
                  <span className="sm:text-4vh md:text-4vw">Portfolio</span>
                </ListLink>
                <ListLink to="/selected">
                  <span className="sm:text-4vh md:text-4vw">Approach</span>
                </ListLink>
                <ListLink to="/your_day">
                  <span className="sm:text-4vh md:text-4vw">Wedding Guide</span>
                </ListLink>
                <ListLink to="/about">
                  <span className="sm:text-2vh md:text-2vw">For Photographers</span>
                </ListLink>
                <ListLink to="/about">
                  <span className="sm:text-2vh md:text-2vw">Prints</span>
                </ListLink>
                <ListLink to="/about">
                  <span className="sm:text-2vh md:text-2vw">About Us</span>
                </ListLink>
                <ListLink to="/about">
                  <span className="uppercase sm:text-2vh md:text-2vw">Contact Us</span>
                </ListLink>

                <div className="grid grid-cols-3 sm:w-1/2 md:w-1/4 pt-5">
                
                  <div className="p-5 pl-0 text-xl fill-current text-text_dark transform hover:transition duration-500 hover:scale-98">
                    <Link to={behance}>
                      <FontAwesomeIcon icon={faBehance} size="2x" className="fill-current text-text_dark" />
                    </Link>    
                  </div>
            
                  <div className="p-5 pl-1 text-xl transform hover:transition duration-500 hover:scale-98">
                    <Link to={instagram}> 
                      <FontAwesomeIcon icon={faInstagram} size="2x" className="fill-current text-text_dark" />
                    </Link>
                  </div>

                  <div className="p-5 pl-0 text-xl transform hover:transition duration-500 hover:scale-98">
                    <Link to={instagram}> 
                      <FontAwesomeIcon icon={faPinterest} size="2x" className="fill-current text-text_dark" />
                    </Link>
                  </div>
                
                </div>

                <div className="pt-5">
                    <p className="text-xs tracking-wide	text-text_dark opacity-50 cursor-default">©{new Date().getFullYear()} Mary & Maurizio<br />Wedding & Lifestyle Photographers</p>
                    <p className="text-xs tracking-wide	text-text_dark opacity-50 cursor-default"><a href="mailto:quattro@quattrostudio.eu">quattro@quattrostudio.eu</a></p>
                </div>
                <div></div>
            </div>
        </div>

     
     </>
    )
};


export default MenuFullScreen