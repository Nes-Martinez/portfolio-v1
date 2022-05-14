export default {
  name: "years",
  title: "Years",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "jobs",
      title: "Jobs",
      type: "array",
      of: [{ type: "jobs" }],
    },
  ],
};
