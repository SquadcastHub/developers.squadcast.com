const productIconKey = "api";

module.exports = {
  product: "API",
  pathPrefix: "/api",
  productIconKey,
  contentRepo: "squadcasthub/developers.squadcast.com",
  contentRepoFolder: "products/api",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M40.5 6H7.5L6 7.5V40.5L7.5 42H40.5L42 40.5V7.5L40.5 6ZM39 39H9V9H39V39Z" /><path d="M13.9665 27.375H18.1282L18.9818 30H21.5925L17.6175 18.474H14.4788L10.5 30H13.1115L13.9665 27.375ZM16.0043 21.111H16.0942L17.5103 25.473H14.5853L16.0043 21.111Z" /><path d="M25.2593 26.2627H27.3068C28.0905 26.2857 28.868 26.1179 29.5725 25.7738C30.1743 25.4688 30.6727 24.9929 31.005 24.4058C31.3439 23.7855 31.5145 23.0874 31.5 22.3807C31.514 21.6738 31.3464 20.975 31.0133 20.3513C30.688 19.7647 30.1981 19.2862 29.604 18.975C28.9124 18.6246 28.144 18.4531 27.369 18.4763H22.8218V30H25.2593V26.2627ZM25.2593 20.466H26.9017C27.3057 20.4515 27.7073 20.5335 28.0732 20.7053C28.3668 20.8522 28.6075 21.0864 28.7625 21.3757C28.9121 21.6894 28.9898 22.0325 28.9898 22.38C28.9898 22.7275 28.9121 23.0706 28.7625 23.3843C28.6091 23.6766 28.3692 23.9145 28.0755 24.0653C27.714 24.2411 27.3148 24.3254 26.913 24.3105H25.263L25.2593 20.466Z" /><path d="M36 18.474H33.5632V30H36V18.474Z" /></svg>',
  externalLinks: [
    {
      title: "Full API docs",
      url: "https://api.cloudflare.com/",
    },
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:api"]' },
  },
  siteMetadata: {
    title: "Cloudflare API docs",
    description:
      "Cloudflare’s API tokens allow you to make calls to our API to alter different settings.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/api",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};