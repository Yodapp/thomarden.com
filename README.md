# Thom Arden artist site

The Thom Arden artist website is a static Astro project for GitHub + Cloudflare Workers with static assets.

## Project goal

The site prioritizes atmosphere, album presentation, and an on-site music player. Contact is handled through the published email address.

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
- Album, tracks and MP3 URLs: `src/data/album.ts`
- Main styling: `src/styles/global.css`

## Updating content

### Album cover

Put the optimized square album image in:

```text
public/images/after-the-silence-cover.jpg
```

Then update `coverImage` in `src/data/album.ts` if the filename changes.

### MP3 files

The player reads each track URL from `src/data/album.ts`.

Update a track's `audioUrl` when its audio file moves. For example:

```text
https://media.thomarden.com/audio/after-the-silence.mp3
```

There is no visible download button. Public audio URLs are still technically accessible to knowledgeable users.

### YouTube videos

Add official video embeds or links in `src/pages/videos.astro` when visual releases are available.

### Cloudflare Web Analytics

The site does not include a Cloudflare Web Analytics script. Update the privacy page before enabling one.

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
