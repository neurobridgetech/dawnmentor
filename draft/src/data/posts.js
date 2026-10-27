import imported from './posts.json';
export const posts = imported.map(post => ({
  ...post,
  isoDate: new Date(post.date + ' 00:00:00 GMT').toISOString().slice(0,10),
  blocks: post.blocks.filter((block,index,blocks) => !/^\|[-|]+\|$/.test(block.text) && !(block.tag === 'h2' && /^\|[-|]+\|$/.test(blocks[index+1]?.text || ''))),
}));
export const categories = ['All articles', 'IIT JEE', 'NEET', 'Study Tips', 'Exam Guide'];
import {url} from '../site.js';
export const postUrl = post => url('/blog/' + post.slug);
