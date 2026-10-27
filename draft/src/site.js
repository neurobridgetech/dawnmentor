const rawBase = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
export const base = rawBase.replace(/\/+$/, '');

/** Prefix an in-site path with the Vite base (needed for GitHub Pages project sites). */
export function url(path = '/') {
  if (!path || path === '/') return base ? `${base}/` : '/';
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;
  if (path.startsWith('#')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}

export const site = {
  name: 'Dawn Mentor',
  institute: 'QuantEdge by Dawnmentor',
  email: 'Er.sanketvyas@gmail.com',
  address: '463, Devi Nagar, New Sanganer Road, Sodala',
  url: 'https://www.dawnmentor.com',
  aiUrl: 'https://edu.aichanakya.in/',
};
