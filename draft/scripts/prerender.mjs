import fs from 'node:fs/promises';
import path from 'node:path';
import {createServer} from 'vite';
import React from 'react';
import {renderToString} from 'react-dom/server';
const out=path.resolve('dist/client');
const baseTemplate=await fs.readFile(path.join(out,'index.html'),'utf8');
const server=await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'});
const escape=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
try{
 const {App}=await server.ssrLoadModule('/src/App.jsx');
 const {routes,getPageMeta}=await server.ssrLoadModule('/src/metadata.js');
 const {site}=await server.ssrLoadModule('/src/site.js');
 const origin=(process.env.SITE_URL||site.url).replace(/\/$/,'');
 for(const route of [...routes,'/404']){
  const meta=getPageMeta(route);const canonical=origin+route;
  const schema=meta.post?{'@context':'https://schema.org','@type':'BlogPosting',headline:meta.post.title,description:meta.description,datePublished:meta.post.isoDate,author:{'@type':'Organization',name:'Dawn Mentor'},publisher:{'@type':'Organization',name:site.name,logo:{'@type':'ImageObject',url:origin+'/assets/brand-mark.webp'}},mainEntityOfPage:canonical}:route==='/'?{'@context':'https://schema.org','@type':'EducationalOrganization',name:site.institute,url:origin,email:site.email,address:site.address}:null;
  const head=`<title>${escape(meta.title)}</title>\n<meta name="description" content="${escape(meta.description)}"/>\n<link rel="canonical" href="${escape(canonical)}"/>\n<meta name="robots" content="${meta.notFound?'noindex,follow':'index,follow'}"/>\n<meta property="og:type" content="${meta.post?'article':'website'}"/>\n<meta property="og:site_name" content="Dawn Mentor"/>\n<meta property="og:title" content="${escape(meta.title)}"/>\n<meta property="og:description" content="${escape(meta.description)}"/>\n<meta property="og:url" content="${escape(canonical)}"/>\n<meta property="og:image" content="${origin}/assets/prism.webp"/>\n<meta name="twitter:card" content="summary_large_image"/>\n${schema?'<script type="application/ld+json">'+JSON.stringify(schema).replaceAll('<','\\u003c')+'</script>':''}`;
  let html=baseTemplate.replace(/<title>[\s\S]*?<\/title>/,'').replace(/<meta name="description"[^>]*>/,'').replace('</head>',head+'\n</head>').replace('<div id="root"></div>','<div id="root">'+renderToString(React.createElement(App,{path:route}))+'</div>');
  const filename=route==='/404'?path.join(out,'404.html'):path.join(out,route.slice(1),'index.html');
  await fs.mkdir(path.dirname(filename),{recursive:true});await fs.writeFile(filename,html);
 }
 const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+routes.map(route=>'<url><loc>'+escape(origin+route)+'</loc></url>').join('\n')+'\n</urlset>\n';
 await fs.writeFile(path.join(out,'sitemap.xml'),sitemap);
 await fs.writeFile(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+origin+'/sitemap.xml\n');
 // Ship only the optimized assets used by the site. Preserve original artwork in the source project.
 for(const file of ['assessment.png','brand-lockup.png','brand-mark.png','logo-lockup.png','logo-mark.png','prism.png'])await fs.rm(path.join(out,'assets',file),{force:true});
 console.log('Prerendered '+routes.length+' routes, 404 page, sitemap and robots.txt for '+origin);
} finally {await server.close()}
