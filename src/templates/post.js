import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

/*
  This is used in blog posts. The index page can be found at src/pages/blog.js
*/

const Post = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div class="usa-layout-docs usa-section">
        <div class="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-layout-docs__main desktop:grid-col-9 usa-prose">
              <h1 className="title">{frontmatter.title}</h1>
              <div className="text-base margin-bottom-2">
                <div className="margin-top-neg-105">
                  By <span className="text-bold">{frontmatter.author}</span> ·{" "}
                  {frontmatter.date}
                </div>
                <span dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        author
        date
        path
        title
      }
    }
  }
`

export default Post
