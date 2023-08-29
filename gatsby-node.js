const AppTemplate = require.resolve("./src/pages/index.js");

exports.createPages = async ({ actions }) => {
  actions.createPage({
    path: "/",
    component: AppTemplate,
  });
};
