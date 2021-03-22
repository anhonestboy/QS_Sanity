import { graphql } from "gatsby";

import Wedding from "../components/wedding/wedding";
import React from "react";


import GraphQLErrorList from "../components/graphql-error-list";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { toPlainText } from "../lib/helpers";


export const query = graphql`
  query WeddingTemplateQuery($id: String!) {
    wedding: sanityWedding(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      _rawFooter(resolveReferences: { maxDepth: 5 })
      _rawIntroCol01(resolveReferences: { maxDepth: 5 })
      _rawIntroCol02(resolveReferences: { maxDepth: 5 })

      publishedAt
      w_categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
          }
        }
        alt
      }
      imageGalleyTittle01
      imageGalleyTittle02
      imageGalleyTittle03
      imageGalleyTittle04
      photoGallery {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
            src
          }
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
      photoGallery02 {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
            src
          }
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
      photoGallery03 {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
            src
          }
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
      photoGallery04 {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
            src
          }
          metadata {
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  }
`;

const WeddingTemplate = (props) => {
  const { data, errors } = props;
  const wedding = data && data.wedding;


  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {wedding && (
        <SEO
          title={wedding.title || "Untitled"}
          description={toPlainText(wedding._rawExcerpt)}
          image={wedding.mainImage}
        />
      )}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {wedding && <Wedding {...wedding} />}
    </Layout>
  );
};

export default WeddingTemplate;
