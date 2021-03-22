import { buildImageObj, cn, getBlogUrl } from "../../lib/helpers";
import { Link } from "gatsby";
import * as styles from "./blog-post.module.css";
import PortableText from "../portableText";
import React from "react";
import { format } from "date-fns";
import { imageUrlFor } from "../../lib/image-url";

function BlogPostPreview(props) {
  const categories = props.categories

  return (
    <Link to={getBlogUrl(props.publishedAt, props.slug.current)}>
    
    <div className={styles.post_list_link}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(900)
              .height(Math.floor((2.8 / 4) * 900))
              .auto("format")
              .url()}
            alt={props.mainImage.alt}
            className="w-full m-0"
          />
        )}
       
      <div className={styles.category_badge}></div>     
      {categories && (
        <div className="flex flex-row ml-20">
        {categories.map((category) => (
          <h5 className="py-2 px-5 m-0 uppercase" key={category._id}>{category.title}</h5>
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
