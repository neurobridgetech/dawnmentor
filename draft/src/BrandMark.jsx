import React from 'react';
import {url} from './site.js';

/** Full reference-inspired ln Physics logo, shared across the site. */
export function BrandMark({className = ''}) {
  return <img className={`brand-logo ${className}`} src={url('/assets/ln-physics-logo.webp')} alt="ln Physics" width="1200" height="279" fetchPriority="high"/>;
}
