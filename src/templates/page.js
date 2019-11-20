import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/*
  This template is for a single page that does not have a date associated with it. For example, an about page.
*/

const Page = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div class="usa-layout-docs usa-section">
        <div class="grid-container">
          <div class="grid-row grid-gap">
            <div
              class="usa-layout-docs__main desktop:grid-col-9 usa-prose"
              dangerouslySetInnerHTML={{ __html: html }}
            ></div>
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
        title
      }
    }
  }
`

export default Page
