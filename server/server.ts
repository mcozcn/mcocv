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

      // Replace meta tags in template
      const headStart = template.indexOf('<head>');
      const headEnd = template.indexOf('</head>');
      
      if (headStart !== -1 && headEnd !== -1) {
        const beforeHead = template.substring(0, headStart + 6);
        const afterHead = template.substring(headEnd);
        
        template = `${beforeHead}
    ${metaTagsHtml}
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
${jsonLd}
    </script>
${afterHead}`;
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

