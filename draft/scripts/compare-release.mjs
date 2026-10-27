import sharp from 'sharp';
const source='C:/Users/Atharv/.codex/generated_images/01a17cc7-8de8-77e0-820b-752f5cf2ffd2/exec-f20ec6b0-083b-495e-a016-7cf595fcd65a.png';
const left=await sharp(source).resize({width:640}).png().toBuffer();
const right=await sharp('qa/release/home-desktop.png').resize({width:640}).png().toBuffer();
const a=await sharp(left).metadata(), b=await sharp(right).metadata();
await sharp({create:{width:1280,height:Math.max(a.height,b.height),channels:4,background:'#ffffff'}}).composite([{input:left,left:0,top:0},{input:right,left:640,top:0}]).png().toFile('qa/release/comparison.png');
console.log('Desktop source and implementation comparison ready');
