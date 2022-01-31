import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"
import SquadcastLogoCircle from "./squadcast-logo-circle"

const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline" href="https://www.squadcast.com/">
      <DocsNavLogoLockup
        small={true}
        logo={<SquadcastLogoCircle/>}
      />
    </a>
  </div>
)

export default DocsMobileHeader
