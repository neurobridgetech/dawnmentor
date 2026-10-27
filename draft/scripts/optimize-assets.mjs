import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
await mkdir('public/assets',{recursive:true});
await sharp('public/assets/brand-lockup.png').trim().resize({width:960,withoutEnlargement:true}).webp({quality:92}).toFile('public/assets/brand-lockup.webp');
await sharp('public/assets/brand-mark.png').trim().resize({width:512,withoutEnlargement:true}).webp({quality:92}).toFile('public/assets/brand-mark.webp');
await sharp('public/assets/brand-mark.png').trim().resize({width:64,height:64,fit:'contain',background:{r:255,g:255,b:255,alpha:0}}).png().toFile('public/favicon.png');
await sharp('public/assets/prism.png').resize({width:1600,withoutEnlargement:true}).webp({quality:82}).toFile('public/assets/prism.webp');
await sharp('public/assets/assessment.png').resize({width:700,withoutEnlargement:true}).webp({quality:85}).toFile('public/assets/assessment.webp');
console.log('Optimized website assets');
