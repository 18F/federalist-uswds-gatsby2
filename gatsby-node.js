/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  const posts = result.data.allMarkdownRemark.edges

  // Create your pagination index page
  paginate({
    createPage,
    items: posts,
    itemsPerPage: 3,
    pathPrefix: "/blog",
    component: path.resolve("./src/templates/blog.js"),
  })

  // Create individual pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve("./src/templates/post.js"),
    })
  })
}
