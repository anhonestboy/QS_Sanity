import React from "react";
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PortableText from "../portableText";

function Hero01(props) {

    return (
      <section>
        <div className="relative grid grid-cols-3 py-10 text-right">
            <div className="p-28 col-span-1">
                <h1 className="z-20 pb-2 font-bold text-7xl">{props.HomeHeroTitle}</h1>
                <h2 className="z-20 pt-0 pb-10 uppercase font-sans font-bold text-2xl">{props.homeTitlesubtitle}</h2>

                <p>{props._rawHomeDescription && <PortableText blocks={props._rawHomeDescription} />}</p>
            </div>
            <BackgroundImage Tag="section" className="col-span-2 w-full h-auto" fluid={props.HomeHeroMainImage.asset.fluid} >
            </BackgroundImage>   
        </div>
      </section>
    );
  }
  
export default Hero01;
  