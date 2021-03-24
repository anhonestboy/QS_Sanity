import React from "react";
import { Link } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import PortableText from "../portableText";
import { imageUrlFor } from "../../lib/image-url";
import { buildImageObj } from "../../lib/helpers";





function Hero01(props) {

  // var e = document.body
  // var observer = new MutationObserver(function (event) {
  //   console.log(event)   
  // })
  
  // observer.observe(e, {
  //   attributes: true, 
  //   attributeFilter: ['class'],
  //   childList: false, 
  //   characterData: false
  // })
  
  // setTimeout(function () {

  //   if(e.className = 'dark'){
  //     console.log("Body è Dark");
  //   }
  // }, 1000)




    return (
      <section className="relative pb-80 pt-20">
      <div className="relative h-screen">
       <div className="relative top-0 w-90vw mx-auto flex content-end relative z-20 grid sm:grid-cols-1 md:grid-cols-8 sm:text-center md:text-left">
          <h1 className="animate-fade-in-down font-serif_bold col-span-6 p-0 font-bold sm:text-15vw md:text-7vw">
            {props.HomeHeroTitle}
          </h1>
          <h2 className="animate-fade-in-up uppercase leading-2vw tracking-widest font-sans font-bold sm:-mt-5 md:mt-0 sm:text-3vw md:text-1_8vw">
            {props.homeTitlesubtitle}
          </h2>
        </div>

        <div className="w-screen absolute top-20">
         <div className="animate-fade-in-down transform duration-300 mx-auto w-60vw h-60vw rounded-full bg-background_lighter dark:bg-grayBlack" />
         <div className="z-20 relative sm:top-20 md:-top-80 absolute text-center p-40 text-1_8vw leading-3vw">
              {props._rawHomeDescription && <PortableText blocks={props._rawHomeDescription} />}
          </div> 
        </div>

        <div className="relative sm:top-0 md:-top-14 w-screen h-full opacity-1 dark:opacity-0 flex justify-items-center">
          <div className="w-screen flex top-0 absolute grid sm:grid-cols-1 md:grid-cols-10">
            <div className="col-span-1 sm:hidden md:block">
              <Link to="/">
                <h2 className="transform -rotate-90 absolute mt-20vw uppercase leading-1vw tracking-widest font-sans font-bold text-1vw translate hover:transition duration-300 hover:translate-y-1.5 hover:scale-102">
                  Our Approach
                </h2>
              </Link>
            </div> 
            <div className="col-span-8 sm:w-100vw md:w-80vw mx-auto">
            {props.HomeHeroMainImage && props.HomeHeroMainImage.asset && (
            <img
                src={imageUrlFor(buildImageObj(props.HomeHeroMainImage))
                  .width(2048)
                  .height(Math.floor((2 / 3.5) * 2048))
                  .auto("format")
                  .url()}
                alt={props.HomeHeroMainImage.alt}
                className="animate-fade-in-up z-10 sm:w-100vw md:w-80vw mx-auto m-0"
              />
              )}
              </div>
            <div className="col-span-1 hidden md:block">
              <Link to="/">
                <h2 className="transform rotate-90 absolute mt-20vw uppercase leading-1vw tracking-widest font-sans font-bold text-1vw translate hover:transition duration-300 hover:translate-y-1.5 hover:scale-102">
                Portfolio
                </h2>
              </Link>
            </div>
          </div>
        </div>

        

      </div> 
        

        {/* <div className="absolute w-screen opacity-0 dark:opacity-1 flex justify-items-center">
          {props.HomeHeroMainImageDark && props.HomeHeroMainImageDark.asset && (
          <img
              src={imageUrlFor(buildImageObj(props.HomeHeroMainImageDark))
                .width(2048)
                .height(Math.floor((2 / 3.5) * 2048))
                .auto("format")
                .url()}
              alt={props.HomeHeroMainImageDark.alt}
              className="z-10 w-70vw mx-auto m-0"
            />
            )}
        </div> */}



        {/* <BackgroundImage Tag="section" className="z-10 w-50vw h-30vw" fluid={props.HomeHeroMainImage.asset.fluid} /> */}
          {/* <Img className="z-10 w-screen h-screen -mt-80" fluid={props.HomeHeroMainImage.asset.fluid} />
          <Img className="z-10 w-screen h-screen -mt-80 hidden" fluid={props.HomeHeroMainImageDark.asset.fluid} /> */}

          

           
            
      </section>
      
    );
  }
  
export default Hero01;
  