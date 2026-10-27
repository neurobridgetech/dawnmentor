import fs from 'node:fs';
const file='tests/release.test.mjs';let s=fs.readFileSync(file,'utf8');s=s.replace("assert.ok(html.includes(post.blocks.at(-1).text))", "assert.ok(html.includes(post.blocks.at(-1).text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll(\"'\",'&#x27;').replaceAll('\"','&quot;')))");fs.writeFileSync(file,s);
