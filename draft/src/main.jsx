import React from 'react';
import {createRoot,hydrateRoot} from 'react-dom/client';
import {App} from './App.jsx';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/syne';
import './styles.css';
import './theme-preview.css';
import {ThemePreview} from './ThemePreview.jsx';

const root = document.getElementById('root');
const app = <React.StrictMode><App/></React.StrictMode>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

// Mount outside #root so prerendered HTML can hydrate cleanly
const previewHost = document.createElement('div');
previewHost.id = 'theme-preview-root';
document.body.appendChild(previewHost);
createRoot(previewHost).render(<ThemePreview />);
