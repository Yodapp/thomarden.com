# Thom Arden artist site

First version of the Thom Arden artist website. The site is built as a static Astro project for GitHub + Cloudflare Workers with static assets.

## Project goal

The first release prioritizes design, atmosphere, album presentation, lyrics and a simple on-site music player. It intentionally does not include CMS, newsletter, cookies, press kit, or a real contact-form backend yet.

## Local development

Use Node 22 or newer.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Where to edit content

- Artist/site metadata: `src/data/site.ts`
- Album, tracks, lyrics and MP3 URLs: `src/data/album.ts`
- Social and streaming links: `src/data/socials.ts`
- Main styling: `src/styles/global.css`

## Replacing placeholders

### Album cover

Put the optimized square album image in:

```text
public/images/after-the-silence-cover.jpg
```

Then update `coverImage` in `src/data/album.ts` if the filename changes.

### MP3 files

The player reads each track URL from `src/data/album.ts`.

For now, the values are empty placeholders. Later, upload MP3 files to Cloudflare R2 and use URLs like:

```text
https://media.thomarden.com/audio/after-the-silence.mp3
```

There is no visible download button. Public audio URLs are still technically accessible to knowledgeable users.

### Social links

Replace `#` links in `src/data/socials.ts` with the real Spotify, Apple Music, YouTube, Instagram, TikTok and Facebook URLs.

### YouTube videos

Update the placeholders in `src/pages/videos.astro` once YouTube links are available.

### Cloudflare Web Analytics

Add the Cloudflare Web Analytics script to `src/layouts/BaseLayout.astro` when the site token is available. No analytics script is included yet.

## Cloudflare Workers build settings

Recommended settings:

- Build command: `npm run build`
- Deploy command: `npm run deploy`
- Version command: `npm run upload-version`
- Root directory / path: `/`
- Node version: current LTS

The Worker/static-assets configuration lives in `wrangler.jsonc`.

Important: this uses the newer Cloudflare Workers flow where static sites are deployed as Worker assets. Do not use `npx wrangler pages deploy dist` here.

The Worker name in `wrangler.jsonc` is `thomardencom`, matching the Worker name in Cloudflare.

## Dependency note

The project is currently pinned to Astro 5.18.2 because it works with the Node 22 runtime available in this local environment. `npm audit` reports advisories that are resolved by Astro 7, but Astro 7 requires Node 22.12 or newer. Recommended later step: update Node to 22.12+ and then upgrade Astro.
