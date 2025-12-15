import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Client-side hydration
hydrateRoot(document.getElementById('root')!, <App />);

