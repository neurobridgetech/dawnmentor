import fs from 'node:fs';
const app = fs.readFileSync('src/App.jsx','utf8');
let home = app.slice(app.indexOf('<main id="main">'),app.lastIndexOf('</main>')+7);
home=home.replaceAll('https://www.dawnmentor.com/blog','/blog').replaceAll('/assets/prism.png','/assets/prism.webp').replaceAll('/assets/assessment.png','/assets/assessment.webp');
home=home.replace('At the heart of Dawn Mentor: a place for curious minds, clear concepts and thoughtful teaching.','Meet Sanket Vyas at QuantEdge by Dawnmentor. A place for curious minds, clear concepts and thoughtful teaching.');
home=home.replace('<p className="coming-team">More teachers joining soon.</p>','<p className="coming-team">More teachers joining soon.</p><a className="text-link about-link" href="/about">Get to know Dawn Mentor <ArrowRight size={18}/></a>');
fs.writeFileSync('src/Home.jsx',`import React from 'react';\nimport {ArrowRight, ArrowUpRight, FileText, BookOpen, Play, Clock} from '@phosphor-icons/react';\nimport {AIButton} from './Layout.jsx';\nexport function Home(){return (${home});}\n`);
