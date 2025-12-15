import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getLanguageFromRequest } from '../src/lib/seo-content';
import { getSEOContent } from '../src/lib/seo-content';
import { generateMetaTags, renderMetaTags, generateJSONLD } from '../src/lib/meta-tags';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;

const resolve = (p: string) => path.resolve(__dirname, p);

const createServer = async () => {
  const app = express();

  let vite: any;
  
  if (!isProduction) {
    // Development: Use Vite dev server for HMR and transforms
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    // Use Vite's connect instance as middleware for dev
    app.use(vite.middlewares);
  } else {
    // Production: Serve static files
    app.use(express.static(resolve('../dist/client'), { index: false }));
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      const language = getLanguageFromRequest(url);
      const seoContent = getSEOContent(language);
      const metaTags = generateMetaTags(seoContent, language);
      const metaTagsHtml = renderMetaTags(metaTags);
      const jsonLd = generateJSONLD(language);

      // Render app (in production, import from built server entry)
      let renderFn;
      if (!isProduction) {
        // In dev, dynamically import the server entry via Vite
        const serverEntry = await vite!.ssrLoadModule('../server/entry-server.tsx');
        renderFn = serverEntry.render;
      } else {
        // In production, import from built server
        const serverEntry = await import('../dist/server/entry-server.js');
        renderFn = serverEntry.render;
      }
      const { html: appHtml, seoHtml } = renderFn(url, language);

      // Read template
      let template: string;
      if (!isProduction) {
        template = fs.readFileSync(resolve('../index.html'), 'utf-8');
        template = await vite!.transformIndexHtml(url, template);
      } else {
        template = fs.readFileSync(resolve('../dist/client/index.html'), 'utf-8');
      }

      // Replace only the existing SEO block so we don't drop styles/scripts in <head>
      const seoStart = template.indexOf('<!-- Primary Meta Tags -->');
      const jsonLdMarker = template.indexOf('<!-- Structured Data (JSON-LD) -->');
      const jsonLdEnd = jsonLdMarker !== -1 ? template.indexOf('</script>', jsonLdMarker) : -1;

      if (seoStart !== -1 && jsonLdEnd !== -1) {
        const afterJsonLd = template.substring(jsonLdEnd + '</script>'.length);
        template = `${template.substring(0, seoStart)}
    <!-- Primary Meta Tags -->
    ${metaTagsHtml}
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
${jsonLd}
    </script>${afterJsonLd}`;
      } else {
        // Fallback: inject before closing head if markers are missing
        const headClose = template.indexOf('</head>');
        if (headClose !== -1) {
          template = `${template.substring(0, headClose)}
    ${metaTagsHtml}
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
${jsonLd}
    </script>
${template.substring(headClose)}`;
        }
      }

      // Inject rendered app HTML and SEO content
      template = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>
    ${seoHtml}`
      );

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e: any) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  return app;
};

createServer().then(app => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
