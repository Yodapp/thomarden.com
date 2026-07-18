import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thomarden.com',
  output: 'static',
  build: {
    // Keep the visual shell in the HTML so a stale or failed asset request cannot
    // leave Safari with a completely unstyled page after a deployment.
    inlineStylesheets: 'always'
  }
});
