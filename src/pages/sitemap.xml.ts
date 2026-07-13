import type { APIRoute } from 'astro';
import { site } from '@/data/site';

const pages = ['/', '/music/', '/videos/', '/about/', '/contact/', '/privacy/'];

export const GET: APIRoute = () => {
  const urls = pages
    .map(
      (path) => `<url>
  <loc>${new URL(path, site.url).toString()}</loc>
</url>`
    )
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
