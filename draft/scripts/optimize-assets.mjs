import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
await mkdir('public/assets',{recursive:true});
await sharp('public/assets/ln-physics-cobalt-hd.png').trim().resize({width:1200,withoutEnlargement:true}).webp({quality:90}).toFile('public/assets/ln-physics-logo.webp');
await sharp('public/assets/prism.png').resize({width:1600,withoutEnlargement:true}).webp({quality:82}).toFile('public/assets/prism.webp');
await sharp('public/assets/assessment.png').resize({width:700,withoutEnlargement:true}).webp({quality:85}).toFile('public/assets/assessment.webp');
const logo = await sharp('public/assets/ln-physics-cobalt-hd.png').trim().toBuffer({resolveWithObject:true});
await sharp(logo.data).extract({left:0,top:0,width:Math.round(logo.info.width*0.36),height:logo.info.height}).resize({width:128,height:128,fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toFile('public/favicon.png');
console.log('Optimized website assets');
