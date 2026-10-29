import React, {useEffect, useState} from 'react';

const THEMES = [
  {id: '', label: 'Current'},
  {id: 'cobalt', label: '1 · Cobalt'},
  {id: 'emerald', label: '4 · Emerald'},
];

/** Temporary theme switcher — remove ThemePreview + theme-preview.css after you choose. */
export function ThemePreview() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return '';
    return new URLSearchParams(window.location.search).get('theme') || '';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.setAttribute('data-theme', theme);
    else root.removeAttribute('data-theme');
    const url = new URL(window.location.href);
    if (theme) url.searchParams.set('theme', theme);
    else url.searchParams.delete('theme');
    window.history.replaceState({}, '', url);
  }, [theme]);

  return (
    <div className="theme-preview-bar" role="group" aria-label="Temporary theme preview">
      <span className="theme-preview-note">Preview only</span>
      {THEMES.map(t => (
        <button
          key={t.id || 'current'}
          type="button"
          aria-pressed={theme === t.id}
          onClick={() => setTheme(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
