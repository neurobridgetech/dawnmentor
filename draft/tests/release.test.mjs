import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import posts from '../src/data/posts.json' with {type:'json'};
const root=path.resolve('dist/client');
const read=route=>fs.readFileSync(path.join(root,route,'index.html'),'utf8');
test('all five complete article pages are pre-rendered with correct metadata',()=>{
 assert.equal(posts.length,5);
 for(const post of posts){const html=read('blog/'+post.slug);assert.ok(html.includes(post.title));assert.ok(html.includes('A note on this archived article'));assert.ok(html.includes('application/ld+json'));assert.ok(html.includes('rel="canonical"'));assert.ok(html.includes(post.blocks.at(-1).text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll("'",'&#x27;').replaceAll('"','&quot;')));assert.ok(!html.includes('|---|'));}
});
test('all navigation pages render meaningful HTML without JavaScript',()=>{for(const route of ['','blog','about','contact','faq','privacy-policy']){const html=read(route);assert.match(html,/<h1/);assert.match(html,/site-footer/);assert.ok(!html.includes('fonts.googleapis.com'));}});
test('local links and referenced assets have build targets',()=>{const files=['index.html','blog/index.html','about/index.html','contact/index.html','faq/index.html','privacy-policy/index.html',...posts.map(p=>'blog/'+p.slug+'/index.html')];const base=(process.env.VITE_BASE||'/').replace(/\/$/,'');for(const file of files){const html=fs.readFileSync(path.join(root,file),'utf8');for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:#[^"]*)?"/g)){let target=match[1];if(base&&(target===base||target.startsWith(base+'/')))target=target.slice(base.length)||'/';assert.ok(fs.existsSync(path.join(root,target))||fs.existsSync(path.join(root,target,'index.html')),`${file}: missing ${target}`);}}});
test('contact is real and journal links stay on site',()=>{const html=read('contact');assert.ok(html.includes('mailto:Er.sanketvyas@gmail.com'));assert.ok(html.includes('463, Devi Nagar'));assert.ok(!read('').includes('href="https://www.dawnmentor.com/blog'));assert.ok(read('').includes('https://edu.aichanakya.in/'));});
test('sitemap contains all article URLs and 404 is excluded from indexing',()=>{const map=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');for(const post of posts)assert.ok(map.includes('/blog/'+post.slug));assert.ok(fs.readFileSync(path.join(root,'404.html'),'utf8').includes('noindex,follow'));});
