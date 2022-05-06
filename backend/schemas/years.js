export default {
  name: "years",
  title: "Years",
  type: "document",
  fields: [
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
