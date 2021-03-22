import React from "react";
import { graphql } from "gatsby";
import { filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes, } from "../lib/helpers";

import WeddingPreviewList from "../components/wedding/wedding-preview-list";
import Container from "../components/container";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query PortfolioPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      instagram
      keywords
    }
    weddings: allSanityWedding(
      limit: 10
      sort: {fields: publishedAt, order: DESC}
      filter: {slug: {current: {ne: "null"}}, publishedAt: {ne: "null"}, featured: {eq: true}}
    ) {
      edges {
        node {
          id
          title
          publishedAt
          _rawExcerpt
          featured
          w_categories {
            title
          }
          mainImage {
            ...SanityImage
            alt
          }   
          slug {
            current
          }
        }
      }
    }
  }
`;

const PortfolioPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];
  const weddingNodes = (data || {}).weddings
    ? mapEdgesToNodes(data.weddings)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        {weddingNodes && (
          <WeddingPreviewList
            title="weddings"
            nodes={weddingNodes}
            browseMoreHref="/archive/"
          />
        )}
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
