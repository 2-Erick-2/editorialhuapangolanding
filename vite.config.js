import { defineConfig, loadEnv } from 'vite';

/**
 * URL pública del sitio (sin "/" final). Se puede sobrescribir con la variable
 * de entorno VITE_SITE_URL en el hosting. Alimenta canonical, Open Graph,
 * JSON-LD, robots.txt y sitemap.xml: al cambiar de dominio basta con editarla.
 */
const DEFAULT_SITE_URL = 'https://editorialhuapango.com.mx';

function siteFiles(siteUrl) {
  return {
    name: 'huapango-site-files',
    // robots.txt y sitemap.xml se generan con el dominio vigente
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
    },
    // Precarga de las fuentes principales (solo subset latino) para acelerar el primer render
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        const fonts = Object.keys(ctx.bundle).filter((f) =>
          /(newsreader|plus-jakarta-sans)-latin-wght-normal-.*\.woff2$/.test(f)
        );
        const tags = fonts
          .map((f) => `  <link rel="preload" href="./${f}" as="font" type="font/woff2" crossorigin>`)
          .join('\n');
        return html.replace('</title>', `</title>\n${tags}`);
      },
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, '');
  // Expone la URL al HTML como %VITE_SITE_URL% aunque venga del valor por defecto
  process.env.VITE_SITE_URL = siteUrl;

  return {
    base: './',
    plugins: [siteFiles(siteUrl)],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
    },
    server: {
      port: 3000,
      open: false,
    },
  };
});
