const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Slowstep-blog",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@constants": path.resolve(__dirname, "src/constants"),
          "@data": path.resolve(__dirname, "src/data"),
          "@styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: ["js"],
      },
    },
  ],
};
