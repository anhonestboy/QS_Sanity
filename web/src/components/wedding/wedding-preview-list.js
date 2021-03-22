import * as styles from "./wedding.module.css";
import WeddingPreview from "./wedding-preview";
import { Link } from "gatsby";
import React from "react";

function WeddingPreviewGrid(props) {
  return (
    <div className="">
      {props.title && <h3 className="font-bold uppercase text-center py-20">Latest stories</h3>}
    
    
      <ul className={`${styles.qs_portfolio_grid} grid sm:grid-cols-1 md:grid-cols-2 gap-0`} >
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id} className="w-full">
              <WeddingPreview {...node} isInList />
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

WeddingPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default WeddingPreviewGrid;
