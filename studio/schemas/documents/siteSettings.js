export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe your blog for search engines and social media.",
    },
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your blog.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "author",
      type: "reference",
      description: "Publish an author and set a reference to them here.",
      title: "Author",
      to: [{ type: "author" }],
    },
    {
      name: "instagram",
      type: "string",
      description: "Instagram page link.",
      title: "Instagram",
    },
    {
      name: "facebook",
      type: "string",
      description: "Facebook page link.",
      title: "Facebook",
    },
    {
      name: "pinterest",
      type: "string",
      description: "Pinterest page link.",
      title: "Pinterest",
    },
  ],
};
