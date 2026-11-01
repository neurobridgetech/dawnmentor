import {posts} from './data/posts.js';
import {site, base} from './site.js';
export function cleanPath(path){
  let bare = String(path || '/').replace(/\/+$/, '') || '/';
  if (base && (bare === base || bare.startsWith(`${base}/`))) {
    bare = bare.slice(base.length) || '/';
  }
  return bare.replace(/\/+$/, '') || '/';
}
export const routes=['/','/blog','/about','/contact','/faq','/privacy-policy',...posts.map(p=>'/blog/'+p.slug)];
export function getPageMeta(rawPath){
 const path=cleanPath(rawPath); const post=posts.find(p=>path==='/blog/'+p.slug);
 const pages={
 '/':['Big questions. Clear understanding.','Discover physics and science with Ln Physics and QuantEdge. Meet our teachers, explore study ideas and practise with Chanakya AI.'],
 '/blog':['The Learning Journal','Study strategies, JEE and NEET exam guides, and practical ideas from the Ln Physics learning journal.'],
 '/about':['About Ln Physics','Meet QuantEdge by Ln Physics: teacher-led learning, clear concepts and a growing community for physics and science.'],
 '/contact':['Contact QuantEdge','Contact QuantEdge by Ln Physics for class enquiries and learning support. Email '+site.email+'.'],
 '/faq':['Frequently Asked Questions','Answers about Ln Physics, QuantEdge, learning resources and access to Chanakya AI.'],
 '/privacy-policy':['Privacy Notice','How the Ln Physics website handles browsing, enquiries and external platform links.']};
 const match=post?[post.title,post.description]:pages[path];
 return {path,title:(match?.[0]||'Page not found')+' | Ln Physics',description:match?.[1]||'Find your way back to Ln Physics.',canonical:site.url+path,post,notFound:!match};
}
