import React from 'react';
import {url} from './site.js';

/** Full reference-inspired Ln Physics logo, shared across the site. */
export function BrandMark({className = ''}) {
  return <img className={`brand-logo ${className}`} src={url('/assets/ln-physics-logo.webp')} alt="Ln Physics" width="1200" height="279" fetchPriority="high"/>;
}
