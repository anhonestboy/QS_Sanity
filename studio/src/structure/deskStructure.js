import S from "@sanity/desk-tool/structure-builder";
import { MdSettings } from "react-icons/md";
import { MdPerson, MdDescription, MdLocalOffer } from "react-icons/md";
import IframePreview from "../previews/IframePreview";
import SocialPreview from 'part:social-preview/component'
import { toPlainText } from 'part:social-preview/utils'


// Web preview configuration
const remoteURL = "https://qs-sanity.netlify.app";
const localURL = "http://localhost:8000";
const previewURL =
  window.location.hostname === "localhost" ? localURL : remoteURL;

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (['post', 'wedding'].includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title("Web preview")
        .options({ previewURL }),
      S.view
      .component(
        SocialPreview({
          // Overwrite prepareFunction to pick the right fields
          prepareFunction: (
            { title, excerpt, mainImage, slug } /* this object is the currently active document */,
          ) => ({
            title,
            description: toPlainText(excerpt || []),
            ogImage: mainImage,
            siteUrl: 'https://www.quattrostudio.eu',
            slug: slug.current,
          }),
        }),
      )
      .title('Social & SEO'),
    ]);
  }
  return S.document().views([S.view.form()]);
};

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title("Base")
    .items([  
      S.listItem()
        .title('Weddings')
        .child(
          S.list()
            .title('Weddings')
            .items([
              S.listItem()
                .title('Wedding Categories')
                .child(
                  S.documentTypeList('w_category')
                    .title('Weddings by Category')
                    .child(w_categoryId =>
                      S.documentList()
                        .title('Weddings')
                        .filter('_type == "wedding" && $w_categoryId in w_categories[]._ref')
                        .params({ w_categoryId }))),
              S.listItem()
                .title("All Weddings")
                .icon(MdDescription)
                .schemaType("post")
                .child(S.documentTypeList("wedding").title("Weddings")),
            ])
        ), 
        S.listItem()
        .title('Your Day')
        .child(
          S.list()
            .title('Your Day Blog')
            .items([
              S.listItem()
                .title('Blog Categories')
                .child(
                  S.documentTypeList('category')
                    .title('Posts by Category')
                    .child(categoryId =>
                      S.documentList()
                        .title('Weddings')
                        .filter('_type == "wedding" && $categoryId in categories[]._ref')
                        .params({ categoryId }))),  
                  S.listItem()
                    .title("All Blog Posts")
                    .icon(MdDescription)
                    .schemaType("post")
                    .child(S.documentTypeList("post").title("Blog posts")), 
            ])
        ), 
        S.divider(),
      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.

      // ...S.documentTypeListItems().filter(
      //   (listItem) =>
      //     !["category", "author", "post", "siteSettings"].includes(
      //       listItem.getId()
      //     )
      // ),
      S.listItem()
        .title("Home Page")
        .icon(MdDescription)
        .child(
          S.editor()
            .id("homepage")
            .schemaType("homepage")
            .documentId("homepage")
        ),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(MdSettings)
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
    ]);
