import React from "react";
import { Figure } from "./Figure";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    _rawIntroCol01: ({ props }) => <div className="test">{props._rawIntroCol01}</div>,
  },
};

export default serializers;
