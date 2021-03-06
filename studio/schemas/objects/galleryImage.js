export default {
    name: "galleryImage",
    type: "image",
    title: "Image",
    options: {
      hotspot: true,
    },
    fields: [
      {
        title: 'Add this to Home Page',
        name: 'featured',
        type: 'boolean'
      },
      {
        name: "caption",
        type: "string",
        title: "Caption",
        options: {
          isHighlighted: true,
        },
      },
      {
        name: "alt",
        type: "string",
        title: "Alternative text",
        description: "Important for SEO and accessiblity.",
        options: {
          isHighlighted: true,
        },
      },
    ],
    preview: {
      select: {
        imageUrl: "asset.url",
        title: "caption",
      },
    },
  };
  