import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize theme from localStorage
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const validThemes = ['light', 'dark', 'yellow'];
  // Default to 'dark' if no theme is saved or if saved theme is invalid
  const theme = savedTheme && validThemes.includes(savedTheme) ? savedTheme : 'dark';
  const root = document.documentElement;
  root.classList.remove('light', 'dark', 'yellow');
  root.classList.add(theme);
  // Ensure localStorage has the correct theme
  if (!savedTheme || !validThemes.includes(savedTheme)) {
    localStorage.setItem('theme', 'dark');
  }
  return theme;
};

// Update favicon based on theme
const updateFavicon = (theme: string) => {
  const favicon = document.getElementById('favicon') as HTMLLinkElement;
  if (favicon) {
    if (theme === 'dark') {
      favicon.href = '/favicon-dark.svg';
    } else {
      // Light and yellow themes use black logo
      favicon.href = '/favicon-light.svg';
    }
  }
};

// Initialize theme before rendering
const initialTheme = initializeTheme();
updateFavicon(initialTheme);

// Watch for theme changes
const observer = new MutationObserver(() => {
  const root = document.documentElement;
  let currentTheme = 'dark';
  if (root.classList.contains('yellow')) currentTheme = 'yellow';
  else if (root.classList.contains('dark')) currentTheme = 'dark';
  else if (root.classList.contains('light')) currentTheme = 'light';
  updateFavicon(currentTheme);
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class'],
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
