import React from "react"

import DocsNavLogoLockup from "./docs-nav-logo-lockup"
import SquadcastLogoCircle from "./squadcast-logo-circle"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a className="DocsSidebar--cloudflare-logo-link DocsSidebar--link" href="https://www.squadcast.com/">
      <DocsNavLogoLockup
        logo={<SquadcastLogoCircle/>}
        text={(
          <>
            <span data-text="Squadcast">Squadcast</span>
          </>
        )}
      />
    </a>
  </div>
)

export default DocsSidebarHeaderSection
