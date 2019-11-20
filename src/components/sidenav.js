/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = () => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>
      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <a href="">Parent link</a>
        </li>
        <li className="usa-sidenav__item">
          <a href="" className="usa-current">
            Current page
          </a>
          <ul className="usa-sidenav__sublist">
            <li className="usa-sidenav__item">
              <a href="">Child link</a>
            </li>
            <li className="usa-sidenav__item">
              <a href="" className="usa-current">
                Child link
              </a>
              <ul className="usa-sidenav__sublist">
                <li className="usa-sidenav__item">
                  <a href="">Grandchild link</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="">Grandchild link</a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="" className="usa-current">
                    Grandchild link
                  </a>
                </li>
                <li className="usa-sidenav__item">
                  <a href="">Grandchild link</a>
                </li>
              </ul>
            </li>
            <li className="usa-sidenav__item">
              <a href="">Child link</a>
            </li>
            <li className="usa-sidenav__item">
              <a href="">Child link</a>
            </li>
            <li className="usa-sidenav__item">
              <a href="">Child link</a>
            </li>
          </ul>
        </li>
        <li className="usa-sidenav__item">
          <a href="">Parent link</a>
        </li>
      </ul>
    </nav>
  </aside>
)

export default Sidenav
