import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'ff10ae956cca45bb9084bbf34e67dc74',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '忾氧的纸尿裤博客',
  domain: 'https://tourmaline-frost-55f.notion.site/ff10ae956cca45bb9084bbf34e67dc74',
  author: '忾氧',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',
  
 // social usernames (optional)
  twitter: 'wangkaiyang3',
  github: 'eyhhhdznk',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`


  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  important pages
  navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
     {
       title: '关于我',
       pageId: '#0702d3691eb54cee95f3211b75943aa0'
     },
     {
       title: '联系我',
       pageId: '#997033d5b37d48d887bc197e23d2d00d'
     }
//{/*（别忘了上一行加逗号）*/
//       title: '帮助',
//       pageId: 'f1199d37579b41cbabfc0b5174f4256a'
//     }
   ]
})
