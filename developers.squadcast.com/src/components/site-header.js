import React from "react"

import { Link } from "gatsby"

import DocsNavLogoLockup from "cloudflare-docs-engine/src/components/docs-nav-logo-lockup"
import ThemeToggle from "cloudflare-docs-engine/src/components/theme-toggle"
import SiteSearch from "./site-search"

import "../css/components/site-header.css"

const SiteHeader = () => (
  <>
    <div className="SiteHeader">
      <div className="SiteHeader--logo-section">
        <Link className="SiteHeader--cloudflare-logo-link Link Link-without-underline" to="/">
          <DocsNavLogoLockup
            logo={<img 
              src="https://uploads-ssl.webflow.com/5c51758c58939b30a6fd3d73/61c46dede24a2083002b1093_Squadcast_symbol.png"
              alt=""
              style={{width:"50%",marginTop:"13px",marginLeft:"20px"}}
              />}
            text={(
              <>
                <span data-text="Squadcast">Squadcast</span>
                <span>&nbsp;</span>
                <span data-text="Docs">Developer Portal</span>
              </>
            )}
          />
        </Link>
      </div>

      <div className="SiteHeader--search">
        <SiteSearch/>
      </div>

      <div className="SiteHeader--nav">
        <a className="SiteHeader--nav-link" href="https://support.squadcast.com/">
          <span>Docs</span>
        </a>
        {/* <Link className="SiteHeader--nav-link" to="/docs">
          <span>Docs</span>
        </Link>
        <Link className="SiteHeader--nav-link" to="/sponsorships">
          <span>Sponsorships</span>
        </Link>
        <a className="SiteHeader--nav-link" href="https://cloudflare.github.io">
          <span>Open Source</span>
        </a>
        <a className="SiteHeader--nav-link" href="https://blog.cloudflare.com/serverlist/">
          <span>Newsletter</span>
        </a> */}
      </div>

      <div className="SiteHeader--theme-toggle">
        <ThemeToggle/>
      </div>
    </div>
    <div className="SiteHeader---shadow"></div>
    <div className="SiteHeader---shadow-cover"></div>
  </>
)

export default SiteHeader
