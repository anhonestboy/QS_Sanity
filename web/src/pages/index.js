import React from "react";
import { graphql } from "gatsby";
import { filterOutDocsPublishedInTheFuture, filterOutDocsWithoutSlugs, mapEdgesToNodes, } from "../lib/helpers";
import Img from "gatsby-image"

import WeddingPreviewList from "../components/wedding/wedding-preview-list";
import Container from "../components/container";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

import Hero01 from "../components/blocks/hero01";
import Approach01 from "../components/blocks/approach01";


// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(TextPlugin, ScrollTrigger);


// // Part 2
// const sections = document.querySelectorAll('section');

// sections.forEach((section, index) => {
//   gsap.to(section, {autoAlpha: 1,
//     scrollTrigger: {
//       trigger: section,
//       start: 'top bottom-=100',
//       toggleActions: 'play none none reverse',
//       markers: true
//     }
//   });
  
//   ScrollTrigger.create({
//     trigger: section,
//     id: index+1,
//     start: 'top center',
//     end: () => `+=${section.clientHeight + 30}`,
//     toggleActions: 'play reverse none reverse',
//     toggleClass: {targets: section, className: "is-active"},
//     markers: true
//   })
  
// })

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

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      instagram
      keywords
    }
    homepage: sanityHomepage {
      HomeHeroTitle
      HomeHeroMainImage {
        ...SanityImage
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
          }
        }
        alt
      }
      HomeHeroMainImageDark {
        ...SanityImage
        asset {
          fluid {
            ...GatsbySanityImageFluid_withWebp_noBase64
          }
        }
        alt
      }
      _rawHomeDescription(resolveReferences: { maxDepth: 5 })
      homeTitlesubtitle
    }
    weddings: allSanityWedding(
      limit: 6
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

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const homepage = (data || {}).homepage;

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


      <Hero01 {...homepage}/>


      <Approach01 {...homepage} />

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

export default IndexPage;
