import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/fonts.css';
import '@fontsource/space-mono/latin-400.css';
import '@fontsource/space-mono/latin-700.css';
import App from './App';

// dist/index.html carries a pre-rendered first screen (src/shell.jsx). React replaces it with the real page;
// the entrance animation already played on the shell, so it must not replay on the new nodes.
if (window.location.pathname === '/' && document.getElementById('hero')) {
  document.documentElement.classList.add('has-shell');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
