import { differenceInDays, formatDistance, format } from "date-fns";
import Container from "../container";
import PortableText from "../portableText";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

import Img from "gatsby-image"
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {GatsbyImage} from 'gatsby-plugin-image'


function Wedding(props) {
  const {
    _rawBody,
    _rawIntroCol01,
    _rawIntroCol02,
    w_categories,
    title,
    featured,
    mainImage,
    imageGalleyTittle01,
    imageGalleyTittle02,
    imageGalleyTittle03,
    imageGalleyTittle04,
    photoGallery,
    photoGallery02,
    photoGallery03,
    photoGallery04,
    _rawFooter,
    publishedAt,
  } = props;
  const col01 = _rawIntroCol01;
  const col02 = _rawIntroCol02;


  return (
    <article>
      <div className="container max-w-screen-lg grid sm:grid-cols-1 md:grid-cols-2 p-20 md:pb-5 items-center">
        {/* META WEDDING TITLE */}
        <div className="">
            <h1>{title}</h1>
        </div>
        <div className="md:justify-self-end sm:text-left md:text-right">
            {/* META DATE */}
            <div className="meta_date">
                {publishedAt && (
                <div className="font-mono text-base tracking-widest uppercase text-gray dark:text-text_dark">
                    {differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? formatDistance(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), "MMMM Mo, yyyy")}
                </div>
                )}
            </div>
            {/* META CATEGORY */}
            <div className="meta_category">
                {w_categories && (
                <div className="font-mono text-base tracking-widest uppercase text-gray dark:text-text_dark">
                    <ul>
                    {w_categories.map((category) => (
                        <li key={category._id}>{category.title}</li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
        </div>       
      </div>
      {/* META FEATURED IMAGE */}
      {mainImage && mainImage.asset && (
        <div className="m-0 w-screen mx-auto">
        <Img fluid={mainImage.asset.fluid} alt="" />
          {/* <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1920)
              .height(Math.floor((9 / 16) * 1920))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />*/}
        </div> 
        )}
      
      {/* ARTICLE */}
      <Container>
          <div className="">
            <div className="body_container container max-w-screen-md py-10 odd:bg-black">

              {/* 2 COLUMNS INTRODUCTION */}
              {col01 && (
                  <div className="grid grid-flow-col gap-10 my-10 mx-10">
                    <div>{col01 && <PortableText blocks={col01} />}</div>
                    <div>{col02 && <PortableText blocks={col02} />}</div>
                  </div>
                )}
              {/* 1 COLUMN MAIN BODY */}
                {_rawBody && (
                  <div className="body_text my-10 mx-10">
                  {_rawBody && <PortableText blocks={_rawBody} />}
                  </div>
                )}

                {/* IMAGE GALLERY 01 */}
                <div>
                  {photoGallery ? (
                  <div className="gallery flex flex-wrap my-20">
                    {photoGallery.map(gallery => {  
                      const imageH = gallery.asset.metadata.dimensions.height
                      const imageW = gallery.asset.metadata.dimensions.width

                      return (
                        <>
                        {imageW > imageH && 
                        <div className="w-full my-2 px-2 landscape"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle01} /></div>
                        }
                        {imageW < imageH && 
                        <div className="w-6/12 my-2 px-2 portrait"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle01} /></div>
                        }
                        </>
                      )
                    })}
                  </div>
                  ):(
                  <></>
                    )}
                </div>



                <div>
                  {photoGallery02 != null && (
                  <div className="gallery flex flex-wrap my-20">
                    {photoGallery02.map(gallery => {  
                      const imageH = gallery.asset.metadata.dimensions.height
                      const imageW = gallery.asset.metadata.dimensions.width

                      return (
                        <>
                        {imageW > imageH && 
                        <div className="w-full my-2 px-2 landscape"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle02} /></div>
                        }
                        {imageW < imageH && 
                        <div className="w-6/12 my-2 px-2 portrait"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle02} /></div>
                        }
                        </>
                      )
                    })}
                  </div>
                  )}
                </div>

                <div>
                  {photoGallery03 != null && (
                  <div className="gallery flex flex-wrap my-20">
                    {photoGallery03.map(gallery => {  
                      const imageH = gallery.asset.metadata.dimensions.height
                      const imageW = gallery.asset.metadata.dimensions.width

                      return (
                        <>
                        {imageW > imageH && 
                        <div className="w-full my-2 px-2 landscape"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle03} /></div>
                        }
                        {imageW < imageH && 
                        <div className="w-6/12 my-2 px-2 portrait"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle03} /></div>
                        }
                        </>
                      )
                    })}
                  </div>
                  )}
                </div>

                <div>
                  {photoGallery04 && (
                  <div className="gallery flex flex-wrap my-20">04
                    {photoGallery04.map(gallery => {  
                      const imageH = gallery.asset.metadata.dimensions.height
                      const imageW = gallery.asset.metadata.dimensions.width

                      return (
                        <>
                        {imageW > imageH && 
                        <div className="w-full my-2 px-2 landscape"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle04} /></div>
                        }
                        {imageW < imageH && 
                        <div className="w-6/12 my-2 px-2 portrait"><Img fluid={gallery.asset.fluid} alt={imageGalleyTittle04} /></div>
                        }
                        </>
                      )
                    })}
                  </div>
                  )}
                </div>

                <footer>
                {_rawFooter && (
                  <div className="body_text my-10 mx-10">
                  {_rawFooter && <PortableText blocks={_rawFooter} />}
                  </div>
                )}
                </footer>


          </div>   
        </div>
      </Container>
    </article>
  );
}

export default Wedding;
