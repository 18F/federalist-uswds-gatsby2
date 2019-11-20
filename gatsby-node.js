/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

// Adds the source "name" from the filesystem plugin to the markdown remark nodes
// so we can filter by it.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // We only care about MarkdownRemark content.
  if (node.internal.type !== "MarkdownRemark") {
    return
  }

  const fileNode = getNode(node.parent)

  createNodeField({
    node,
    name: "sourceName",
    value: fileNode.sourceInstanceName,
  })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await createBlogPages(createPage, graphql)
  await createMarkdownPages(createPage, graphql)
}

async function createBlogPages(createPage, graphql) {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "posts" } } }) {
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

  // Create pagination index page
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

async function createMarkdownPages(createPage, graphql) {
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { sourceName: { eq: "pages" } } }) {
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

  const pages = result.data.allMarkdownRemark.edges

  pages.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve("./src/templates/page.js"),
    })
  })
}
