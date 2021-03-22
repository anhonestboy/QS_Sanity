import * as styles from "./blog-post.module.css";
import BlogPostPreview from "./blog-post-preview";
import { Link } from "gatsby";
import React from "react";

function BlogPostPreviewGrid(props) {
  return (
    <div className="">
      {props.title && <h2 className="font-sans uppercase">{props.title}</h2>}
    
    
      <ul className={`${styles.qs_portfolio_grid} grid grid-cols-2 gap-0`} >
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id} className="w-full">
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className="">
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}

      
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
