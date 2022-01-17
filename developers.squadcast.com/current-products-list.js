// Currently live products that are active on the product grid on https://developers.cloudflare.com
// Must update this list when adding new product
const products = [
  {
    title: "API",
    href: "https://apidocs.squadcast.com/",
    icon: "api",
  },
  {
    title: "Incoming Webhooks",
    href: "https://support.squadcast.com/docs/apiv2",
    icon: "network-interconnect",
    wrap: true,
  },
  {
    title: "Outgoing Webhooks",
    href: "https://support.squadcast.com/docs/outgoing-webhooks",
    icon: "load-balancing",
    wrap: true,
  },
  {
    title: "Terraform Provider",
    href: "https://support.squadcast.com/docs/terraform-provider-for-squadcast",
    icon: "terraform", 
  },
  {
    title: "Webhooks Connectors",
    href: "https://github.com/SquadcastHub/Squadcast-Webhook-Connectors",
    icon: "bots",
    wrap: true,
  },
  // {
  //   title: "BYOIP",
  //   path: "byoip",
  //   icon: "byoip",
  // },
  // {
  //   title: "Cache",
  //   path: "cache",
  //   icon: "cache",
  // },
  // {
  //   title: "Cloudflare for Teams",
  //   path: "cloudflare-one",
  //   icon: "cloudflare-one",
  //   wrap: true,
  // },
  // {
  //   title: "Cloudflare Fundamentals",
  //   path: "fundamentals",
  //   icon: "fundamentals",
  //   wrap: true
  // },
  // {
  //   title: "Cloudflare Image Optimization",
  //   path: "images",
  //   icon: "images",
  //   wrap: true,
  // },
  // {
  //   title: "DNS Resolver",
  //   path: "1.1.1.1",
  //   icon: "1.1.1.1",
  // },
  // {
  //   title: "DDoS Protection",
  //   path: "ddos-protection",
  //   icon: "ddos-protection",
  // },
  // {
  //   title: "Distributed Web Gateway",
  //   path: "distributed-web",
  //   icon: "distributed-web",
  //   wrap: true,
  // },
  // {
  //   title: "Email Routing",
  //   path: "email-routing",
  //   icon: "email-routing",
  // },
  // {
  //   title: "Firewall Rules",
  //   path: "firewall",
  //   icon: "firewall",
  // },
  // {
  //   title: "HTTP/3",
  //   path: "http3",
  //   icon: "http3",
  // },
  // {
  //   title: "Load Balancing",
  //   path: "load-balancing",
  //   icon: "load-balancing",
  // },
  // {
  //   title: "Logs",
  //   path: "logs",
  //   icon: "logs",
  // },
  // {
  //   title: "Magic Transit",
  //   path: "magic-transit",
  //   icon: "magic-transit",
  // },
  // {
  //   title: "Magic Firewall",
  //   path: "magic-firewall",
  //   icon: "magic-firewall",
  // },
  // {
  //   title: "Magic WAN",
  //   path: "magic-wan",
  //   icon: "magic-wan",
  // },
  // {
  //   title: "Network Error Logging",
  //   path: "network-error-logging",
  //   icon: "network-error-logging",
  //   wrap: true,
  // }, 
  // {
  //   title: "Network Interconnect",
  //   path: "network-interconnect",
  //   icon: "network-interconnect",
  //   wrap: true,
  // },
  // {
  //   title: "Pages",
  //   path: "pages",
  //   icon: "pages",
  // },
  // {
  //   title: "Page Shield",
  //   path: "page-shield",
  //   icon: "page-shield",
  // },
  // {
  //   title: "Partners",
  //   path: "partners",
  //   icon: "partners",
  // },
  // {
  //   title: "Railgun",
  //   path: "railgun",
  //   icon: "railgun",
  // },
  // {
  //   title: "Randomness Beacon",
  //   path: "randomness-beacon",
  //   icon: "randomness-beacon",
  //   wrap: true,
  // },
  // {
  //   title: "Registrar",
  //   path: "registrar",
  //   icon: "registrar",
  // },
  // {
  //   title: "Rules",
  //   path: "rules",
  //   icon: "rules",
  // },
  // {
  //   title: "Ruleset Engine",
  //   path: "ruleset-engine",
  //   icon: "ruleset-engine",
  // },
  // {
  //   title: "Security Center",
  //   path: "security-center",
  //   icon: "security-center",
  // },
  // {
  //   title: "Spectrum",
  //   path: "spectrum",
  //   icon: "spectrum",
  // },
  // {
  //   title: "SSL",
  //   path: "ssl",
  //   icon: "ssl",
  // },
  // {
  //   title: "Stream",
  //   path: "stream",
  //   icon: "stream",
  // },
  // {
  //   title: "Tenant",
  //   path: "tenant",
  //   icon: "tenant",
  // },
  // {
  //   title: "Terraform",
  //   path: "terraform",
  //   icon: "terraform",
  // },
  // {
  //   title: "Time Services",
  //   path: "time-services",
  //   icon: "time-services",
  // },
  // {
  //   title: "WAF",
  //   path: "waf",
  //   icon: "waf",
  // },
  // {
  //   title: "Waiting Room",
  //   path: "waiting-room",
  //   icon: "waiting-room",
  // },
  // {
  //   title: "WARP Client",
  //   path: "warp-client",
  //   icon: "warp-client",
  // },
  // {
  //   title: "Workers",
  //   path: "workers",
  //   icon: "workers",
  // },
  // {
  //   title: "Zaraz",
  //   path: "zaraz",
  //   icon: "zaraz",
  // },
]

module.exports = {
  products,
}
