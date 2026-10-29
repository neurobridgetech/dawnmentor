import React from 'react';

/**
 * Elegant LN monogram with a single refined orbital ring + electron.
 * Transparent / no plate. currentColor adapts to light & dark headers.
 */
export function BrandMark({size = 52, className = ''}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Primary orbit */}
      <ellipse
        cx="48"
        cy="48"
        rx="36"
        ry="13"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-32 48 48)"
      />
      {/* Secondary orbit — lighter weight */}
      <ellipse
        cx="48"
        cy="48"
        rx="36"
        ry="13"
        stroke="currentColor"
        strokeWidth="1.15"
        opacity="0.45"
        transform="rotate(48 48 48)"
      />
      {/* Electron */}
      <circle className="brand-electron" cx="76.5" cy="35.5" r="2.6" fill="var(--accent, #008f89)" />
      {/* LN — tall, light geometric monogram */}
      <g fill="currentColor">
        <path d="M28 30h3.1v33.2H42.2v3.1H28z" />
        <path d="M48.5 30h3.2l12.6 26.4V30H67.5v36.3h-3.2L51.7 39.9v26.4h-3.2z" />
      </g>
    </svg>
  );
}
