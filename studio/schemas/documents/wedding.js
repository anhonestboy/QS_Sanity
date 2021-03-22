import { format } from "date-fns";

export default {
  name: "wedding",
  title: "Wedding",
  type: "document",
  initialValue: () => ({
    featured: false,
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Titles should be catchy, descriptive, and not too long",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      description: "This can be used to schedule post for publishing",
    },
    {
      title: 'Add this to Home Page',
      name: 'featured',
      type: 'boolean'
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "w_categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "w_category",
          },
        },
      ],
    },
    {
      name: 'introCol01',
      type: 'bodyPortableText',
      title: 'Intro Column 01'
    },
    {
      name: 'introCol02',
      type: 'bodyPortableText',
      title: 'Intro Column 02'
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Main Story",
      description:
      "One column main story text",
    },
    {
      name: "excerpt",
      type: "excerptPortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
    },
    {
      name: "imageGalleyTittle01",
      type: "string",
      title: "Image gallery title",
      description: "This will be also the alt of all the images",
    },
    {
      name: 'photoGallery',
      title: 'Images gallery 01',
      type: 'array',
      of: [{ type: 'galleryImage' }]
    },
    {
      name: "imageGalleyTittle02",
      type: "string",
      title: "Image gallery title",
      description: "This will be also the alt of all the images",
    },
    {
      name: 'photoGallery02',
      title: 'Images gallery 02',
      type: 'array',
      of: [{ type: 'galleryImage' }]
    },
    {
      name: "imageGalleyTittle03",
      type: "string",
      title: "Image gallery title",
      description: "This will be also the alt of all the images",
    },
    {
      name: 'photoGallery03',
      title: 'Images gallery 03',
      type: 'array',
      of: [{ type: 'galleryImage' }]
    },
    {
      name: "imageGalleyTittle04",
      type: "string",
      title: "Image gallery title",
      description: "This will be also the alt of all the images",
    },
    {
      name: 'photoGallery04',
      title: 'Images gallery 04',
      type: 'array',
      of: [{ type: 'galleryImage' }]
    },
    {
      name: "footer",
      type: "bodyPortableText",
      title: "Footer",
      description: "One column footer",
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "excerpt",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
      category: "categories",
    },
    prepare({ title = "No title", media }) {
      return {
        title,
        media,
      };
    },
  },
};



