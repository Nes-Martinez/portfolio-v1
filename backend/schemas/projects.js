export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "siteLink",
      title: "Site Link",
      type: "string",
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "url",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          name: "tag",
          title: "Tag",
          type: "string",
        },
      ],
    },
    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [
        {
          name: "tech",
          title: "Tech",
          type: "string",
        },
      ],
    },
  ],
};
