# Portfolio

Mikhail Medovnik's personal portfolio site.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- TypeScript (strict)
- styled-components 6
- Static export (`output: 'export'`)

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `out/`.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the real production domain before deploying — it's used for `metadataBase`, canonical URLs, Open Graph tags, `sitemap.xml`, and `robots.txt`. See `.env.example` and `netlify.toml`.
