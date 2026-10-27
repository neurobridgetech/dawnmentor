import React, {useEffect} from 'react';
import {Header,Footer} from './Layout.jsx';
import {Home} from './Home.jsx';
import {Blog,Article} from './Blog.jsx';
import {About,Contact,FAQ,Privacy,NotFound} from './Pages.jsx';
import {cleanPath,getPageMeta} from './metadata.js';
export function App({path=typeof window!=='undefined'?window.location.pathname:'/'}){
 path=cleanPath(path); const meta=getPageMeta(path);
 useEffect(()=>{document.title=meta.title;document.querySelector('meta[name="description"]')?.setAttribute('content',meta.description)},[meta.title,meta.description]);
 const page=meta.post?<Article post={meta.post}/>:path==='/'?<Home/>:path==='/blog'?<Blog/>:path==='/about'?<About/>:path==='/contact'?<Contact/>:path==='/faq'?<FAQ/>:path==='/privacy-policy'?<Privacy/>:<NotFound/>;
 return <><Header path={path}/>{page}<Footer/></>;
}
