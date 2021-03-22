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
        
        
        <div className="absolute w-screen md:w-80vw h-screen inset-y-0 right-0 flex flex-grow bg-accent dark:bg-background_dark">
            <div className="menu_container w-full h-3/5 min-h-full ml-5 md:ml-40 mt-20 self-stretch grid grid-cols-1 auto-rows-fr">
                <div></div>
                <ListLink to="/"><span className="font-sans font-bold text-text_dark uppercase sm:text-4vh md:text-4vw">Home</span></ListLink>
                <ListLink to="/portfolio"><span className="font-sans font-bold text-text_dark uppercase sm:text-4vh md:text-4vw">Journal</span></ListLink>
                <ListLink to="/selected"><span className="font-sans font-bold text-text_dark uppercase sm:text-4vh md:text-4vw">Approach</span></ListLink>
                <ListLink to="/your_day"><span className="font-sans text-text_dark font-bold uppercase sm:text-4vh md:text-4vw">Wedding Guide</span></ListLink>
                <ListLink to="/about"><span className="font-sans text-text_dark font-bold uppercase sm:text-4vh md:text-4vw">For Photographers</span></ListLink>
                <ListLink to="/about"><span className="font-sans text-text_dark font-bold uppercase sm:text-4vh md:text-4vw">Prints</span></ListLink>
                <ListLink to="/about"><span className="font-sans text-text_dark font-bold uppercase sm:text-4vh md:text-4vw">About Us</span></ListLink>
                <ListLink to="/about"><span className="font-sans text-text_dark font-bold uppercase sm:text-4vh md:text-4vw">Contact Us</span></ListLink>

                <div className="grid grid-cols-3 w-1/4">
                
                  <div className="p-5 text-xl fill-current text-text_dark transform hover:transition duration-500 hover:scale-98">
                    <Link to={behance}>
                      <FontAwesomeIcon icon={faBehance} size="2x" className="fill-current text-text_dark" />
                    </Link>    
                  </div>
            
                  <div className="p-5 text-xl transform hover:transition duration-500 hover:scale-98">
                    <Link to={instagram}> 
                      <FontAwesomeIcon icon={faInstagram} size="2x" className="fill-current text-text_dark" />
                    </Link>
                  </div>

                  <div className="p-5 text-xl transform hover:transition duration-500 hover:scale-98">
                    <Link to={instagram}> 
                      <FontAwesomeIcon icon={faPinterest} size="2x" className="fill-current text-text_dark" />
                    </Link>
                  </div>
                
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