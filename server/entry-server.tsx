import React from 'react';
import { renderToString } from 'react-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '../src/components/ui/tooltip';
import Index from '../src/pages/Index';
import { SEOContent } from '../src/components/SEOContent';
import type { Language } from '../src/lib/seo-content';

export function render(url: string, language: Language) {
  // Create a new query client for each request (SSR best practice)
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
      },
    },
  });

  // For SSR, we render the Index page with necessary providers
  // (HashRouter doesn't work with SSR, so we render content directly)
  // The client-side will hydrate with HashRouter
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Index initialLanguage={language} />
      </TooltipProvider>
    </QueryClientProvider>
  );

  // Render SEO content separately (will be visually hidden)
  const seoHtml = renderToString(<SEOContent language={language} />);

  return {
    html,
    seoHtml
  };
}

