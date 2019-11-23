/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import "./src/styles/index.scss"
import "uswds"

const dap = pathname => {
  window.gas && window.gas("send", "pageview", pathname)
}

let loaded = false
const onload = () => {
  dap(window.location.pathname)
  loaded = true
}

export const onInitialClientRender = (_, opts) => {
  const script = document.createElement("script")
  script.src =
    "https://dap.digitalgov.gov/Universal-Federated-Analytics-Min.js?agency={{site.dap_agency}}"
  script.id = "_fed_an_ua_tag"
  script.onload = onload
  document.body.appendChild(script)
}

export const onRouteUpdate = ({ location }) => {
  loaded && dap(location.pathname)
}
