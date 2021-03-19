import { buildImageObj, cn, getBlogUrl } from "../lib/helpers";
import { Link } from "gatsby";
import PortableText from "./portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../lib/image-url";

function BlogPostPreview(props) {
  const categories = props.categories

  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className="">
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((3 / 4) * 600))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
            className="w-full m-0"
          />
        )}
      </div>
      <div className="">
         {categories && (
            <div className="flex flex-row">
            {categories.map((category) => (
              <h5 className="py-2 px-5 m-0 font-sans uppercase" key={category._id}>{category.title}</h5>
            ))}
          </div>

            )}
        <h3 className="text-5xl m-10">{props.title}</h3>
        
        {/* {props._rawExcerpt && (
          <div className="">
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
        {/* <div className="">
          {format(new Date(props.publishedAt), "MMMM Mo, yyyy")}
        </div> */}
      </div>
      
    </Link>
  );
}

export default BlogPostPreview;
