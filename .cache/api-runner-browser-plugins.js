module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/shubhanjan/Desktop/developers.squadcast.com/src/components/docs-page.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1382,"disableBgImageOnAlpha":true}},"gatsby-remark-copy-linked-files"],"remarkPlugins":[null]},
    },{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[],"stylesProvider":{"disableGeneration":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Cloudflare docs","short_name":"Docs","start_url":"/","background_color":"#f38020","theme_color":"#f38020","display":"minimal-ui","icon":"src/images/cloudflare-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"a4d0d7a42ef65947e6c07fb2a20181c5"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-PKQFGQB","dataLayerName":"cfDataLayer","selfHostedOrigin":"https://tr.www.cloudflare.com"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
