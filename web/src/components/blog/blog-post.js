import { differenceInDays, formatDistance, format } from "date-fns";
import Container from "../container";
import PortableText from "../portableText";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";

import Img from "gatsby-image"
import {getGatsbyImageData} from 'gatsby-source-sanity'
import {GatsbyImage} from 'gatsby-plugin-image'


function BlogPost(props) {
  const {
    _rawBody,
    categories,
    title,
    mainImage,
    photoGallery,
    publishedAt,
  } = props;


  return (
    <article className="">

      {mainImage && mainImage.asset && (
        <div className="">
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />

        </div>
      )}
      <Container>
        <div className="">
          <div className="">
            <h1 className="">{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}

            <div className="gallery">
            {photoGallery && (
              <ul>
                {photoGallery.map((gallery) => (
                  <Img fluid={gallery.asset.fluid} alt={gallery.alt} />
                ))}
              </ul>
            )}
          </div>


          </div>
          <aside className="">
            {publishedAt && (
              <div className="">
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? formatDistance(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Mo, yyyy")}
              </div>
            )}

            {categories && (
              <div className="">
                <h3 className="">Categories</h3>
                <ul>
                  {categories.map((category) => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>



        

      </Container>
    </article>
  );
}

export default BlogPost;
