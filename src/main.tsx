// Client-side entry point
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check if we're doing SSR hydration or initial render
const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  // SSR hydration
  hydrateRoot(rootElement, <App />);
} else {
  // Initial client-side render (fallback for non-SSR)
  createRoot(rootElement).render(<App />);
}
