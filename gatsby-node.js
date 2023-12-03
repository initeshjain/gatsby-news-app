/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for news articles
  const { data } = await graphql(`
    {
      cats: allMongodbNewsAppNews {
        distinct(field: { category: SELECT })
  }
}
  `);

  // // Create pages for each news article
  // result.data.allMongodbNews.nodes.forEach(node => {
  //   createPage({
  //     path: `/news/${node.title}`, // You can customize the URL structure as needed
  //     component: path.resolve('./src/templates/news-template.js'),
  //     context: {
  //       title: node.title,
  //     },
  //   });
  // });

  // // Create category pages
  // const categories = new Set();
  // result.data.allMongodbNews.nodes.forEach(node => {
  //   if (node.category) {
  //     categories.add(node.category);
  //   }
  // });

  data.cats.distinct.forEach(category => {
    createPage({
      path: `/${category.toLowerCase()}`,
      component: path.resolve('./src/templates/category.js'),
      context: {
        category,
      },
    });
  });
};
