import React from "react";
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PortableText from "../portableText";

function Approach01(props) {

    return (
      <section className="hero__image">
            <div className="relative p-28 pb-0 grid grid-cols-2 gap-8">
              <div className="z-20 text-right">
                 <h1 className="blend pb-2 font-bold text-8vw">{props.HomeHeroTitle}</h1>
                 <h2 className="blend pt-0 pb-10 uppercase font-sans font-bold text-3vw">{props.homeTitlesubtitle}</h2>
              </div>
              <div className="z-20 pt-40 blend">
                  {props._rawHomeDescription && <PortableText blocks={props._rawHomeDescription} />}
              </div>    
            </div>
            <BackgroundImage Tag="section" className="z-10 w-screen h-screen -mt-56" fluid={props.HomeHeroMainImage.asset.fluid} >
            </BackgroundImage>   

      </section>
    );
  }
  
export default Approach01;
  