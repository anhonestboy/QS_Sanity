export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605378ab2fb4e40df0a486ec",
                  title: "Sanity Studio",
                  name: "qs-sanity-studio",
                  apiId: "4dbd1e6f-741c-4c5c-b1f0-dae7fb19dcf4",
                },
                {
                  buildHookId: "605378abdfb5aa135e0addb0",
                  title: "Blog Website",
                  name: "qs-sanity",
                  apiId: "37477142-fd7c-4f4d-8b5b-ccb8edadf2d9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/anhonestboy/QS_Sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://qs-sanity.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
